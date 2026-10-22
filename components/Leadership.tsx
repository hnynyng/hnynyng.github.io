import { leadership } from "@/content/site";
import Reveal from "./Reveal";

export default function Leadership() {
  return (
    <section id="leadership" className="section" aria-labelledby="leadership-title">
      <div className="container">
        <Reveal as="header" className="section-head">
          <p className="eyebrow">Leadership</p>
          <h2 id="leadership-title" className="section-title">
            {leadership.role}, {leadership.org}.
          </h2>
        </Reveal>
        <div className="lead-grid">
          <Reveal className="tile lead-intro">
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
          </Reveal>
          {leadership.stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
            <article className="tile spot story">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <dl className="story-results">
                {s.results.map((r) => (
                  <div key={r.label}>
                    <dt>{r.label}</dt>
                    <dd data-count>{r.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
