/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/map",
      permanent: true,
    },
  ],
  staticPageGenerationTimeout: 0,
};

export default nextConfig;
