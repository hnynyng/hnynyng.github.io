"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

// One observer shared by every Reveal. Elements get `is-in` the first time
// they enter the viewport and are then unobserved, so each reveal plays once.
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          entry.target.dispatchEvent(new Event("reveal"));
          observer?.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
  }
  return observer;
}

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  from?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
  as?: "div" | "li" | "header";
}) {
  const ref = useRef<HTMLDivElement & HTMLLIElement & HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${from} ${className}`}
      style={{ "--rd": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
