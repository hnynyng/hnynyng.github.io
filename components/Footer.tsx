import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. {profile.location}, Malaysia.
        </p>
        <p>Built with Next.js. Hosted on GitHub Pages.</p>
      </div>
    </footer>
  );
}
