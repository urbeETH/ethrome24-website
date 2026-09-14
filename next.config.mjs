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
      {
        // The hacker manual absorbed the Rome guide: everything that was on
        // /hackerguide now lives at /hackermanual/rome.html, inside the wider
        // manual. The old URL was already sent to approved hackers, so it keeps
        // working and lands on the superset. Temporary on purpose: the guide
        // files are still in public/hackerguide, so reverting is one line.
        source: "/hackerguide",
        destination: "/hackermanual",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        // The hacker manual is a standalone static site under public/hackermanual.
        // Next serves files in public by exact path only, so /hackermanual would
        // 404 without this: it maps the clean URL onto the actual index.html.
        // /hackermanual/ works too, via the default trailing-slash redirect.
        // Every link and asset inside those pages is absolute (/hackermanual/...)
        // because a clean URL with no trailing slash resolves relative paths
        // against the site root, which would break all of them.
        source: "/hackermanual",
        destination: "/hackermanual/index.html",
      },
      {
        // The winners showcase is a standalone static page under public/winners,
        // same pattern as the hacker manual: Next serves public by exact path
        // only, so this maps the clean /winners URL onto its index.html. Every
        // link and asset inside the page is absolute (/winners/...) for the same
        // reason the manual's are.
        source: "/winners",
        destination: "/winners/index.html",
      },
      {
        // The confirmation-ticket app is a separate Vercel deployment
        // (ethrome-ticket). These proxy it under the official domain so the
        // URL stays ethrome.org/ticket instead of redirecting to vercel.app.
        // The app is prefix-aware: it computes its own /ticket base client-side.
        source: "/ticket",
        destination: "https://ethrome-ticket.vercel.app/index.html",
      },
      {
        source: "/ticket/:path*",
        destination: "https://ethrome-ticket.vercel.app/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        // The manual is unlisted: nothing on ethrome.org links to it, and it is
        // meant for approved hackers only. The meta robots tag inside each page
        // covers the HTML, this covers every asset served under the path too.
        // Deliberately NOT a robots.txt Disallow, which would publish the URL
        // to anyone reading it. The old /hackerguide paths keep the same header.
        source: "/hackermanual/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/hackermanual",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/hackerguide/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        // The winners showcase ships unlisted by default, same as the manual:
        // reachable at /winners for anyone with the link, kept out of search.
        // To make it public, delete these two /winners header blocks (the page
        // itself carries a meta robots noindex tag; remove that too).
        source: "/winners/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      {
        source: "/winners",
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
