/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Old pages that Google still has indexed — 301 permanent redirect to closest new page
      { source: '/who-we-are',      destination: '/about',        permanent: true },
      { source: '/contact-us',      destination: '/contact',      permanent: true },
      { source: '/vacancies',       destination: '/team',         permanent: true },
      { source: '/management-team', destination: '/team',         permanent: true },
      { source: '/our-services',    destination: '/services',     permanent: true },
      { source: '/about-us',        destination: '/about',        permanent: true },
      // Catch any other old-style slug patterns
      { source: '/pages/:slug',     destination: '/',             permanent: true },
    ];
  },
};

module.exports = nextConfig;
