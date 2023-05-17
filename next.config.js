/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
