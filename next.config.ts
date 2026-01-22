// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     formats: ["image/avif", "image/webp"],
//     domains: ["images.ctfassets.net"], // Contentful-ийн домэйн
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["images.ctfassets.net"],
  },
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_INPUT_TOKEN: process.env.CONTENTFUL_INPUT_TOKEN,
    NEXT_PUBLIC_INPUT_TOKEN: process.env.NEXT_PUBLIC_INPUT_TOKEN,
  },
};

export default nextConfig;
