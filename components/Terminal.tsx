"use client";

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import { profile, projects, skillGroups, spokenLanguages } from "@/content/site";

const COMMANDS = ["whoami", "skills", "projects", "contact", "ls", "help", "clear"] as const;
type Command = (typeof COMMANDS)[number];

type Entry = { id: number; input?: string; output: ReactNode };

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

const outputs: Record<Exclude<Command, "clear">, () => ReactNode> = {
  help: () => (
    <pre>
      <span className="t-head">Available commands</span>
      {"\n"}
      {[
        ["whoami", "who I am, in one breath"],
        ["skills", "what I work with"],
        ["projects", "what I have built"],
        ["contact", "how to reach me"],
        ["ls", "list commands (same as help)"],
        ["help", "this list"],
        ["clear", "clear the screen"],
      ]
        .map(([c, d]) => `  ${c.padEnd(10)}${d}`)
        .join("\n")}
    </pre>
  ),
  whoami: () => (
    <pre>
      <span className="t-head">{profile.name}</span>
      {`\n${profile.intro}\n${profile.location} · ${profile.status.toLowerCase()}.`}
    </pre>
  ),
  skills: () => (
    <pre>
      {skillGroups.map((g) => (
        <span key={g.name}>
          <span className="t-head">{g.name}</span>
          {`\n  ${g.items.join(", ")}\n`}
        </span>
      ))}
      <span className="t-head">Spoken</span>
      {`\n  ${spokenLanguages.map((l) => l.name).join(", ")}`}
    </pre>
  ),
  projects: () => (
    <pre>
      {projects.map((p) => (
        <span key={p.id}>
          <span className="t-head">{p.name}</span>
          <span className="t-dim">{`  ${p.context}`}</span>
          {`\n  ${p.summary}\n`}
          {p.links.map((l) => (
            <span key={l.href}>
              {"  "}
              <ExtLink href={l.href}>{l.href.replace("https://", "")}</ExtLink>
              {"\n"}
            </span>
          ))}
        </span>
      ))}
    </pre>
  ),
  ls: () => outputs.help(),
  contact: () => (
    <pre>
      {"email     "}
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      {"\nlinkedin  "}
      <ExtLink href={profile.linkedin}>{profile.linkedin.replace("https://", "")}</ExtLink>
      {"\ngithub    "}
      <ExtLink href={profile.github}>{profile.github.replace("https://", "")}</ExtLink>
      {"\nresume    "}
      <a href={profile.resume}>{profile.resume.slice(1)}</a>
    </pre>
  ),
};

function isCommand(cmd: string): cmd is keyof typeof outputs {
  return Object.hasOwn(outputs, cmd);
}

// The terminal opens with a welcome line and one command already run, so it
// never looks empty before anyone types.
const initialEntries: Entry[] = [
  {
    id: 0,
    output: <pre className="t-dim">Welcome. Type a command below, or tap one of the buttons. Try help.</pre>,
  },
  { id: 1, input: "whoami", output: outputs.whoami() },
];

export default function Terminal() {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const nextId = useRef(initialEntries.length);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [entries]);

  function run(raw: string) {
    const input = raw.trim();
    if (input) setHistory((h) => [...h, input]);
    setCursor(-1);
    setValue("");

    const cmd = input.toLowerCase();
    if (cmd === "clear") {
      setEntries([]);
      return;
    }
    let output: ReactNode = null;
    if (cmd === "") output = null;
    else if (isCommand(cmd)) output = outputs[cmd]();
    else
      output = (
        <pre>
          {`command not found: ${input}\n`}
          <span className="t-dim">Type help to see what you can run.</span>
        </pre>
      );
    setEntries((e) => [...e, { id: nextId.current++, input, output }]);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    run(value);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const i = cursor === -1 ? history.length - 1 : Math.max(0, cursor - 1);
      setCursor(i);
      setValue(history[i]);
    } else if (e.key === "ArrowDown" && cursor !== -1) {
      e.preventDefault();
      const i = cursor + 1;
      if (i >= history.length) {
        setCursor(-1);
        setValue("");
      } else {
        setCursor(i);
        setValue(history[i]);
      }
    } else if (e.key === "Tab" && value.trim()) {
      const match = COMMANDS.filter((c) => c.startsWith(value.trim().toLowerCase()));
      if (match.length === 1) {
        e.preventDefault();
        setValue(match[0]);
      }
    }
  }

  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <p>hon@portfolio: ~</p>
      </div>
      {/* Clicking anywhere in the output focuses the prompt, like a real terminal. */}
      <div className="terminal-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
        <div role="log" aria-live="polite" aria-label="Terminal output">
          {entries.map((entry) => (
            <div key={entry.id}>
              {entry.input !== undefined && (
                <pre>
                  <span className="t-prompt">~ %</span> {entry.input}
                </pre>
              )}
              {entry.output}
            </div>
          ))}
        </div>
        <form className="terminal-form" onSubmit={onSubmit}>
          <label htmlFor="terminal-input" className="t-prompt">
            <span aria-hidden="true">~ %</span>
            <span className="sr-only">Terminal command</span>
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="go"
            placeholder="type a command, e.g. help"
            aria-describedby="terminal-hint"
          />
          <button type="submit" className="terminal-run">
            Run
          </button>
        </form>
      </div>
      <div className="terminal-shortcuts">
        <span id="terminal-hint" className="sr-only">
          Commands: {COMMANDS.join(", ")}.
        </span>
        {COMMANDS.map((c) => (
          <button key={c} type="button" onClick={() => run(c)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
