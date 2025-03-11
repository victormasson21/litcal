import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV === "development";

const baseConfig: NextConfig = {};

const developmentConfig: NextConfig = {
  ...baseConfig,
};

const productionConfig: NextConfig = {
  ...baseConfig,
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || "",
};

const nextConfig: NextConfig = isDevelopment
  ? developmentConfig
  : productionConfig;

export default nextConfig;
