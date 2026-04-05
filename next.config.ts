import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default nextConfig;
