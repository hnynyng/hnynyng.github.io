"use client";

import { useEffect } from "react";

// Page-wide pointer effects, attached once with delegated listeners:
// - cursor spotlight: writes the pointer position into --mx/--my on any .spot tile
// - skill cross-highlight: hovering a chip with data-skill marks every chip with
//   the same data-skill (skills section and project tiles) as .is-match
// - count-up: numbers in [data-count] count up when their Reveal plays
export default function Interactions() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    if (fine) {
      const onMove = (e: PointerEvent) => {
        const tile = (e.target as Element).closest<HTMLElement>(".spot");
        if (!tile) return;
        const r = tile.getBoundingClientRect();
        tile.style.setProperty("--mx", `${e.clientX - r.left}px`);
        tile.style.setProperty("--my", `${e.clientY - r.top}px`);
      };

      const mark = (skill: string | null) => {
        document.querySelectorAll(".is-match").forEach((el) => el.classList.remove("is-match"));
        document.body.classList.toggle("skill-hover", skill !== null);
        if (!skill) return;
        document
          .querySelectorAll(`[data-skill="${CSS.escape(skill)}"]`)
          .forEach((el) => el.classList.add("is-match"));
      };
      const onOver = (e: PointerEvent) => {
        const chip = (e.target as Element).closest<HTMLElement>("[data-skill]");
        mark(chip?.dataset.skill ?? null);
      };

      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerover", onOver);
      cleanups.push(() => {
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerover", onOver);
      });
    }

    if (!reduced) {
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const host = el.closest(".reveal");
        if (!host) return;
        const final = el.textContent ?? "";
        const match = final.match(/\d+(\.\d+)?/);
        if (!match) return;
        const target = parseFloat(match[0]);
        const decimals = match[1] ? match[1].length - 1 : 0;
        const render = (n: number) => (el.textContent = final.replace(match[0], n.toFixed(decimals)));
        const play = () => {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / 1100);
            render(target * (1 - Math.pow(1 - t, 4)));
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = final;
          };
          requestAnimationFrame(tick);
        };
        if (host.classList.contains("is-in")) return;
        render(0);
        host.addEventListener("reveal", play, { once: true });
        cleanups.push(() => {
          host.removeEventListener("reveal", play);
          el.textContent = final;
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
