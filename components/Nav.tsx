"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/content/site";
import ThemeToggle from "./ThemeToggle";

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#education", label: "Education" },
  { href: "/#skills", label: "Skills" },
  { href: "/#terminal", label: "Terminal" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <nav className="container nav-inner" aria-label="Main">
        <Link href="/" className="nav-brand">
          {profile.name}
        </Link>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a href={profile.resume} className="btn btn-primary btn-small nav-resume">
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="mobile-menu">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.resume} className="btn btn-primary">
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
