// Serves the static export in out/ the way GitHub Pages does:
// "/x" resolves to x.html or x/index.html, and unknown paths get 404.html.
// Usage: npm run build && npm run preview
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(import.meta.dirname, "..", "out");
const port = Number(process.env.PORT) || 4173;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json",
  ".woff2": "font/woff2",
};

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const base = normalize(join(root, pathname));
  if (!base.startsWith(root)) {
    res.writeHead(400).end();
    return;
  }
  for (const candidate of [base, `${base}.html`, join(base, "index.html")]) {
    if (await isFile(candidate)) {
      res.writeHead(200, { "Content-Type": types[extname(candidate)] ?? "application/octet-stream" });
      res.end(await readFile(candidate));
      return;
    }
  }
  res.writeHead(404, { "Content-Type": types[".html"] });
  res.end(await readFile(join(root, "404.html")));
}).listen(port, () => console.log(`Serving out/ at http://localhost:${port}`));
