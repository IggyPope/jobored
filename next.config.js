/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/vacancies',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
