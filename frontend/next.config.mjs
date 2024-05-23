/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  redirects: async () => [
    {
      source: "/",
      destination: "/map",
      permanent: true,
    },
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
