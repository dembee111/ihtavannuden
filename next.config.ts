import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.ctfassets.net"], // Contentful-ийн домэйн
  },
};

export default nextConfig;
