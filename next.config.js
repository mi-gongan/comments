/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["p.kakaocdn.net", "k.kakaocdn.net"],
  },
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
