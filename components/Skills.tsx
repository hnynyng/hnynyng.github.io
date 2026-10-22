import { skillGroups, spokenLanguages } from "@/content/site";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-title" className="section-title">
            The toolkit.
          </h2>
        </header>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div key={g.name} className="tile">
              <h3>{g.name}</h3>
              <ul className="chips">
                {g.items.map((i) => (
                  <li key={i} className="chip">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="tile spoken-tile">
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
          </div>
        </div>
      </div>
    </section>
  );
}
