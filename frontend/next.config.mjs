/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/map",
      permanent: true,
    },
    {
      source: "/map",
      destination: "/vehicles",
      permanent: false,
    },
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
