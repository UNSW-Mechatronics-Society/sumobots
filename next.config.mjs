/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  distDir: "dist",
  output: isProd ? "export" : "standalone",
  basePath: isProd ? "/sumobots" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
