import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";
console.log({ isDevelopment });

// TODO: separate local and production config
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
