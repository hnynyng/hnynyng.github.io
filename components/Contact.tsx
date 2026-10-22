import { profile } from "@/content/site";
import ExternalLink from "./ExternalLink";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title" className="section-title">
          Let&rsquo;s work together.
        </h2>
        <p className="section-lede">
          {profile.status}. The quickest way to reach me is email.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Email me
          </a>
          <a href={profile.resume} className="btn btn-secondary">
            Resume
          </a>
        </div>
        <ul className="contact-links">
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </li>
          <li>
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
          </li>
        </ul>
      </div>
    </section>
  );
}
