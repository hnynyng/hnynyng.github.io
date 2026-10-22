import { projects, type Project } from "@/content/site";
import ExternalLink from "./ExternalLink";
import ProjectIllustration from "./Illustrations";

// Renders "TODO:" strings with a visible marker so unfinished content stands out.
function Text({ children }: { children: string }) {
  return children.startsWith("TODO") ? <span className="todo">{children}</span> : <>{children}</>;
}

function ProjectTile({ project }: { project: Project }) {
  const titleId = `${project.id}-title`;
  return (
    <article className={`tile project ${project.todo ? "project-todo" : ""}`} aria-labelledby={titleId}>
      <div>
        <p className="project-context">{project.context}</p>
        <h3 id={titleId} className="tile-title">
          <Text>{project.name}</Text>
        </h3>
        <p className="project-summary">
          <Text>{project.summary}</Text>
        </p>
        {project.note && <p className="project-note">{project.note}</p>}
        <ul className="project-points">
          {project.points.map((p) => (
            <li key={p}>
              <Text>{p}</Text>
            </li>
          ))}
        </ul>
        {project.tags.length > 0 && (
          <ul className="chips" aria-label="Tech and focus">
            {project.tags.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        )}
        {project.links.length > 0 && (
          <ul className="project-links">
            {project.links.map((l) => (
              <li key={l.href}>
                <ExternalLink href={l.href}>
                  {l.label}
                  <span className="sr-only">: {project.name}</span>
                </ExternalLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="project-art">
        <ProjectIllustration kind={project.illustration} />
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="section section-alt" aria-labelledby="work-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Work</p>
          <h2 id="work-title" className="section-title">
            Things I have built.
          </h2>
          <p className="section-lede">
            A hackathon team build, a university team project and a website for a freelance client.
          </p>
        </header>
        <div className="work-grid">
          {projects.map((p) => (
            <ProjectTile key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
