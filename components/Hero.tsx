import { highlights, profile, stats } from "@/content/site";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-rise">
        <p className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          {profile.status}
        </p>
        <p className="hero-name">
          {profile.name} · {profile.location}
        </p>
        <h1 id="hero-title" className="hero-title">
          {profile.headline}
        </h1>
        <p className="hero-intro">{profile.intro}</p>
        <ul className="hero-highlights">
          {highlights.map((h) => (
            <li key={h}>{h}.</li>
          ))}
        </ul>
        <div className="hero-ctas">
          <a href="#work" className="btn btn-primary">
            See my work
          </a>
          <a href={profile.resume} className="btn btn-secondary">
            Resume
          </a>
        </div>
      </div>

      <h2 className="sr-only">At a glance</h2>
      <ul className="stats">
        {stats.map((s) => (
          <li key={s.label} className="stat">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
