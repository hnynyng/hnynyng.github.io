import { skillGroups, spokenLanguages } from "@/content/site";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <Reveal as="header" className="section-head">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title" className="section-title">
            The toolkit.
          </h2>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.name} delay={i * 60} className="tile spot">
              <h3>{g.name}</h3>
              <ul className="chips">
                {g.items.map((i) => (
                  <li key={i} className="chip" data-skill={i}>
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          <Reveal delay={skillGroups.length * 60} className="tile spoken-tile">
            <h3>Spoken languages</h3>
            <dl className="spoken">
              {spokenLanguages.map((l) => (
                <div key={l.name}>
                  <dt>{l.name}</dt>
                  <dd>
                    {l.level.startsWith("TODO") ? <span className="todo">{l.level}</span> : l.level}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
