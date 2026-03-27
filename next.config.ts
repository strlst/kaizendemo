import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/kaizendemo' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kaizendemo/' : '',
};

export default nextConfig;
