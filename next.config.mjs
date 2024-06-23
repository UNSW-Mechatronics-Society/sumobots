/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.arduino.cc",
        port: "",
      },
    ],
  },
};

export default nextConfig;
