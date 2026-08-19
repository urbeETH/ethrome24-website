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
  async rewrites() {
    return [
      {
        // The hacker guide is a standalone static page under public/hackerguide.
        // Next serves files in public by exact path only, so /hackerguide would
        // 404 without this: it maps the clean URL onto the actual index.html.
        // /hackerguide/ works too, via the default trailing-slash redirect.
        source: "/hackerguide",
        destination: "/hackerguide/index.html",
      },
    ];
  },
  async headers() {
    return [
      {
        // The guide is unlisted: nothing on ethrome.org links to it, and it is
        // meant for approved hackers only. The meta robots tag inside the page
        // covers the HTML, this covers every asset served under the path too.
        // Deliberately NOT a robots.txt Disallow, which would publish the URL
        // to anyone reading it.
        source: "/hackerguide/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/hackerguide",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
