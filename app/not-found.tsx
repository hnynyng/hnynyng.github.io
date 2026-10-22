import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Page not found | Hon Yen Yang",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="container not-found">
        <div>
          <p className="eyebrow">404</p>
          <h1 className="hero-title">This page doesn&rsquo;t exist.</h1>
          <p className="hero-intro">The link may be old, or the address may have a typo.</p>
          <div className="hero-ctas">
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
