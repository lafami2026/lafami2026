import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "81813.pixieset.com",
      },
    ],
  },
};

export default nextConfig;
