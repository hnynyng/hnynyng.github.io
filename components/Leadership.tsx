import { leadership } from "@/content/site";

export default function Leadership() {
  return (
    <section id="leadership" className="section" aria-labelledby="leadership-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Leadership</p>
          <h2 id="leadership-title" className="section-title">
            {leadership.role}, {leadership.org}.
          </h2>
        </header>
        <div className="lead-grid">
          <div className="tile lead-intro">
            <p className="lead-summary">
              {leadership.summary}
            </p>
            <ol className="timeline" aria-label="Timeline">
              {leadership.timeline.map((t) => (
                <li key={t.when}>
                  <time>{t.when}</time>
                  <span>{t.what}</span>
                </li>
              ))}
            </ol>
          </div>
          {leadership.stories.map((s) => (
            <article key={s.title} className="tile story">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <dl className="story-results">
                {s.results.map((r) => (
                  <div key={r.label}>
                    <dt>{r.label}</dt>
                    <dd>{r.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
