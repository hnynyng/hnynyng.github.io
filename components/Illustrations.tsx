import type { Illustration } from "@/content/site";

// Small, decorative drawings of each app. They use theme colours through CSS
// variables so they work in light and dark mode, and are hidden from screen
// readers because the tile text already describes the project.

const stroke = "var(--line)";
const ink = "var(--text)";
const dim = "var(--text-2)";
const accent = "var(--accent)";
const surface = "var(--tile)";

function Warung() {
  // Phone showing a stock list, a bar chart and a voice-order mic.
  return (
    <svg viewBox="0 0 300 240" aria-hidden="true" focusable="false">
      <rect x="95" y="8" width="110" height="224" rx="22" fill={surface} stroke={stroke} strokeWidth="2" />
      <rect x="132" y="18" width="36" height="6" rx="3" fill={stroke} />
      <rect x="108" y="36" width="56" height="7" rx="3.5" fill={ink} />
      <rect x="108" y="48" width="38" height="5" rx="2.5" fill={dim} opacity="0.6" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(108 ${66 + i * 24})`}>
          <rect width="84" height="18" rx="6" fill="var(--bg)" />
          <rect x="7" y="6" width="34" height="6" rx="3" fill={dim} opacity="0.7" />
          <rect x="58" y="5" width="19" height="8" rx="4" fill={accent} opacity={1 - i * 0.25} />
        </g>
      ))}
      {[30, 46, 22, 54, 38].map((h, i) => (
        <rect key={i} x={112 + i * 16} y={198 - h} width="10" height={h} rx="3" fill={accent} opacity={0.45 + i * 0.1} />
      ))}
      <circle cx="240" cy="70" r="26" fill={accent} />
      <rect x="234" y="56" width="12" height="20" rx="6" fill="#fff" />
      <path d="M228 70a12 12 0 0 0 24 0M240 82v6" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M38 150q10-14 20 0t20 0" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M30 170q14-18 28 0t28 0" stroke={accent} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function Chat() {
  // Chat window with a sessions sidebar, bubbles, an attachment and a shield.
  return (
    <svg viewBox="0 0 300 240" aria-hidden="true" focusable="false">
      <rect x="14" y="20" width="272" height="200" rx="18" fill={surface} stroke={stroke} strokeWidth="2" />
      <circle cx="34" cy="38" r="4" fill={stroke} />
      <circle cx="48" cy="38" r="4" fill={stroke} />
      <circle cx="62" cy="38" r="4" fill={stroke} />
      <line x1="90" y1="52" x2="90" y2="220" stroke={stroke} strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="26" y={62 + i * 20} width={i === 0 ? 52 : 44} height="10" rx="5" fill={i === 0 ? accent : dim} opacity={i === 0 ? 1 : 0.35} />
      ))}
      <rect x="104" y="64" width="120" height="30" rx="15" fill="var(--bg)" />
      <rect x="116" y="76" width="90" height="6" rx="3" fill={dim} opacity="0.7" />
      <rect x="156" y="104" width="116" height="30" rx="15" fill={accent} />
      <rect x="170" y="116" width="84" height="6" rx="3" fill="#fff" opacity="0.9" />
      <rect x="104" y="144" width="96" height="40" rx="12" fill="var(--bg)" stroke={stroke} />
      <path d="M116 156h14l6 6v14h-20z" fill="none" stroke={dim} strokeWidth="2" strokeLinejoin="round" />
      <rect x="144" y="160" width="44" height="6" rx="3" fill={dim} opacity="0.6" />
      <rect x="104" y="194" width="168" height="16" rx="8" fill="var(--bg)" stroke={stroke} />
      <path d="M248 150l18 7v12c0 10-8 17-18 20-10-3-18-10-18-20v-12z" fill={surface} stroke={accent} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M241 168l5 5 9-10" stroke={accent} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Events() {
  // Browser window showing an events landing page with a starry hero.
  return (
    <svg viewBox="0 0 300 240" aria-hidden="true" focusable="false">
      <rect x="14" y="20" width="272" height="200" rx="18" fill={surface} stroke={stroke} strokeWidth="2" />
      <circle cx="34" cy="38" r="4" fill={stroke} />
      <circle cx="48" cy="38" r="4" fill={stroke} />
      <circle cx="62" cy="38" r="4" fill={stroke} />
      <rect x="86" y="32" width="150" height="12" rx="6" fill="var(--bg)" />
      <rect x="26" y="56" width="248" height="96" rx="12" fill="#0b1630" />
      {[
        [52, 74, 2], [88, 96, 1.5], [130, 70, 2.5], [176, 92, 1.5], [214, 72, 2], [246, 104, 1.5], [70, 128, 1.5], [236, 134, 2],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#fff" opacity="0.85" />
      ))}
      <path d="M150 86l5 11 12 1.5-9 8 2.5 12-10.5-6-10.5 6 2.5-12-9-8 12-1.5z" fill="#ffd60a" />
      <rect x="112" y="128" width="76" height="8" rx="4" fill="#fff" opacity="0.85" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${26 + i * 86} 164)`}>
          <rect width="76" height="44" rx="10" fill="var(--bg)" />
          <rect x="10" y="10" width="22" height="22" rx="6" fill={accent} opacity={0.9 - i * 0.2} />
          <rect x="38" y="13" width="28" height="5" rx="2.5" fill={ink} opacity="0.7" />
          <rect x="38" y="23" width="20" height="5" rx="2.5" fill={dim} opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

function Todo() {
  return (
    <svg viewBox="0 0 300 240" aria-hidden="true" focusable="false">
      <rect x="40" y="40" width="220" height="160" rx="18" fill="none" stroke={dim} strokeWidth="2" strokeDasharray="8 8" />
      <path d="M150 96v48M126 120h48" stroke={dim} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function ProjectIllustration({ kind }: { kind: Illustration }) {
  switch (kind) {
    case "warung":
      return <Warung />;
    case "chat":
      return <Chat />;
    case "events":
      return <Events />;
    default:
      return <Todo />;
  }
}
