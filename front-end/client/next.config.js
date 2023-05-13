/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dpgxpnhtt/**",
      },
      {
        protocol: "http",
        hostname: "undesten.mn",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.davestravelpages.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {},
};

module.exports = nextConfig;
