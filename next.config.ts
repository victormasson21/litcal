import type { NextConfig } from "next";

// TODO: separate local and production config
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
