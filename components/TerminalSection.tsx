import Terminal from "./Terminal";

export default function TerminalSection() {
  return (
    <section id="terminal" className="section section-alt" aria-labelledby="terminal-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Terminal</p>
          <h2 id="terminal-title" className="section-title">
            Prefer the command line?
          </h2>
          <p className="section-lede">
            Ask the terminal about me. Try whoami, skills, projects or contact.
          </p>
        </header>
        <Terminal />
      </div>
    </section>
  );
}
