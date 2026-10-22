import type { Metadata, Viewport } from "next";
import { profile } from "@/content/site";
import "./globals.css";

const title = `${profile.name} | Software Engineering and AI student`;
const description = `${profile.headline} ${profile.intro} ${profile.status}.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.name,
    title,
    description,
    locale: "en_MY",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// Runs before first paint: apply a saved light/dark choice so there is no flash.
// With no saved choice, CSS follows the visitor's system setting.
// The js class lets scroll reveals hide content only when JS is running.
const themeInit = `document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
