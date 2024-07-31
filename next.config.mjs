/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "special-enigma-xvgrwx9v553646r-3000.app.github.dev",
        "localhost:3000",
      ],
    },
  },
};

export default nextConfig;
