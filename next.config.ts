import type { NextConfig } from "next";

// Fully static build for GitHub Pages (user site at the domain root, so no basePath).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
