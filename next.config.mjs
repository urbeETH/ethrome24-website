/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // /apply is the short link used in posts. A page-level redirect() to an
        // external URL fails on a statically prerendered route (it renders the
        // Next error shell with a 200), so the redirect lives here instead.
        // Temporary on purpose: the destination changes every edition.
        source: "/apply",
        destination: "https://luma.com/huhelf53",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
