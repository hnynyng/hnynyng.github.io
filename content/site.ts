// Every fact on the site lives here. Anything marked TODO is shown on the page
// as a visible TODO until it is filled in — nothing here is guessed.

export const profile = {
  name: "Hon Yen Yang",
  location: "Subang Jaya",
  status: "Open to software engineering internships",
  headline: "I build web and AI apps people can rely on.",
  intro:
    "Software Engineering and AI student at Sunway University. I manage requirements and build solutions that meet them.",
  email: "honyenyang22@gmail.com",
  linkedin: "https://linkedin.com/in/hon-yen-yang",
  github: "https://github.com/hnynyng",
  resume: "/Hon_Yen_Yang_Resume.pdf",
  siteUrl: "https://hnynyng.github.io",
};

export const highlights = [
  "One of the top 150 finalised builders at Codex Hackathon Malaysia, the only team from my university",
  "Vice President of Sunway Pool Club, 300+ members",
];

export const stats = [
  { value: "Top 150", label: "Finalised builders, Codex Hackathon Malaysia" },
  { value: "300+", label: "Vice President, Sunway Pool Club" },
  { value: "3.49", label: "CGPA out of 4.00" },
  { value: "Expanding", label: "Freelance clientele" },
];

export type Illustration = "warung" | "chat" | "events" | "mail" | "todo";

export type Project = {
  id: string;
  name: string;
  context: string;
  summary: string;
  note?: string;
  points: string[];
  tags: string[];
  links: { label: string; href: string }[];
  illustration: Illustration;
  todo?: boolean;
};

export const projects: Project[] = [
  {
    id: "warungai",
    name: "WarungAI",
    context: "Codex Hackathon Malaysia · Team project",
    summary:
      "Stock tracking, analytics, voice ordering and OCR, in 3 languages.",
    note: "The team leader built the base app and the OCR. My part is below.",
    points: [
      "Enhanced and refined the stock tracking and analytics features, and resolved functional gaps that had been overlooked.",
      "Implemented voice ordering in English, Malay and Chinese.",
      "Built a one-tap interface for faster data entry.",
      "Improved the OCR detection rate by 40%.",
    ],
    tags: ["React", "Vite", "Supabase", "PostgreSQL", "Vitest"],
    links: [{ label: "Source on GitHub", href: "https://github.com/clemedev/WarungAI" }],
    illustration: "warung",
  },
  {
    id: "clementgpt",
    name: "ClementGPT",
    context: "University team project",
    summary:
      "Turned a 3-reply assignment into a deployed Gemini API chatbot with chat sessions, history and file uploads.",
    points: [
      "Rate limiting, input validation, XSS prevention and secure session cookies.",
      "Automated security scans on every push.",
    ],
    tags: ["Gemini API", "Rate limiting", "Input validation", "XSS prevention", "CI security scans"],
    links: [{ label: "Source on GitHub", href: "https://github.com/clemedev/ClementGPT" }],
    illustration: "chat",
  },
  {
    id: "client-website",
    name: "Client website",
    context: "Freelance · Events industry",
    summary:
      "A website for an events-industry client, built in 2 weeks.",
    points: [
      "Independently managed requirements, design and delivery.",
      "Doubled the client's service bookings after their event.",
    ],
    tags: ["Freelance", "2-week build"],
    links: [
      { label: "Visit the live site", href: "https://starlight-events.vercel.app" },
      { label: "Source on GitHub", href: "https://github.com/hnynyng/JC_Website" },
    ],
    illustration: "events",
  },
  {
    id: "mailbot",
    name: "MailBot",
    context: "In progress · Personal project",
    summary: "Organizes your emails and prioritizes the important ones, tailored to you.",
    points: [
      "A WhatsApp bot that sends you your prioritized emails.",
      "You explain what matters to you, such as university course codes and names, news from clubs you follow, or topics you care about.",
    ],
    tags: ["WhatsApp bot", "Email triage", "Personalized priority"],
    links: [],
    illustration: "mail",
  },
];

export const leadership = {
  org: "Sunway Pool Club",
  role: "Vice President",
  timeline: [
    { when: "June 2025", what: "Joined the committee" },
    { when: "July 2026", what: "Elected Vice President" },
  ],
  summary:
    "I co-lead a 6-person committee. Membership grew from about 260 to over 300 after two Clubs and Societies showcases.",
  stories: [
    {
      title: "Club Activity",
      body: "Introduced bundle pricing for sessions.",
      results: [
        { value: "4 → 7–8", label: "Sessions a month, roughly" },
        { value: "+40%", label: "Margin, about" },
      ],
    },
    {
      title: "Picking up the slack",
      body: "Took over a task that had been dropped, finished it within a day, then audited the committee's other open tasks.",
      results: [{ value: "1 day", label: "To close it out" }],
    },
  ],
};

export const recognition = [
  {
    title: "Top 150 finalised builders",
    detail: "Codex Hackathon Malaysia. The only team from Sunway University.",
  },
  {
    title: "Dean's List",
    detail: "3 semesters at Sunway University.",
  },
];

export const education = [
  {
    degree: "Bachelor of Software Engineering and AI",
    school: "Sunway University",
    when: "Expected September 2027",
    details: ["CGPA 3.49 / 4.00", "Dean's List for 3 semesters"],
  },
  {
    degree: "Monash University Foundation Year",
    school: "Sunway College",
    when: "2023 to 2024",
    details: [],
  },
];

export const skillGroups = [
  { name: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "Java (basics)"] },
  { name: "Frontend", items: ["React", "Next.js", "Vite", "react-i18next"] },
  { name: "Backend and data", items: ["Flask", "RESTful APIs", "Supabase", "PostgreSQL"] },
  { name: "Testing and debugging", items: ["Vitest", "Debugging", "Root-cause analysis"] },
  {
    name: "Security",
    items: ["Rate limiting", "Input validation", "XSS prevention", "Secure session cookies", "Bandit", "pip-audit"],
  },
  { name: "Tools and AI", items: ["Git", "GitHub", "Docker", "CI/CD", "Gemini API", "Claude"] },
];

export const spokenLanguages = [
  { name: "English", level: "Fluent" },
  { name: "Malay", level: "Conversational" },
  { name: "Chinese", level: "Fluent" },
];
