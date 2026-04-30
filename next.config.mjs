/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    turbo: {
      root: './my-portfolio',
    },
  },
};

export default nextConfig;
