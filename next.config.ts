import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  webpack(config) {
    // Find the existing rule handling SVG imports
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    // Add new rules: use SVGR for SVG imports without '?url' query
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // SVGs imported with ?url use file loader
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not ?? []), /url/] },
        use: ["@svgr/webpack"], // SVGs without ?url are transformed into React components
      }
    );

    // Exclude SVG files from the original file loader rule to prevent double handling
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;

module.exports = {
  env: {
    yandex_api_key: "key"
  }
}