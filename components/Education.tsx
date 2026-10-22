import { education, recognition } from "@/content/site";

export default function Education() {
  return (
    <section id="education" className="section section-alt" aria-labelledby="education-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Recognition and Education</p>
          <h2 id="education-title" className="section-title">
            Learning by building.
          </h2>
        </header>
        <div className="edu-grid">
          <div className="tile">
            <h3 className="tile-label">Recognition</h3>
            <ul className="award-list">
              {recognition.map((r) => (
                <li key={r.title} className="award">
                  <span className="award-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                      <path d="M12 3l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.4l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="item-title">{r.title}</h4>
                    <p>{r.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="tile">
            <h3 className="tile-label">Education</h3>
            {education.map((e) => (
              <div key={e.degree} className="edu-item">
                <h4 className="item-title">{e.degree}</h4>
                <p>
                  {e.school} · {e.when}
                </p>
                {e.details.length > 0 && (
                  <ul className="edu-meta">
                    {e.details.map((d) => (
                      <li key={d} className="chip">
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
