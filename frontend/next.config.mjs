/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  redirects: async () => [
    {
      source: "/",
      destination: "/map",
      permanent: true,
    },
  ],
};

export default nextConfig;
