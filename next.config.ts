import type { NextConfig } from "next";

const repo: string = "/kaizendemo";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  basePath: repo,
  assetPrefix: repo,
};

export default nextConfig;
