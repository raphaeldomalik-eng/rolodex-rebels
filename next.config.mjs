/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rolodexrebels.co.uk" }],
        destination: "https://rolodexrebels.co.uk/:path*",
        permanent: true,
      },
      { source: "/contact", destination: "/start-a-project", permanent: true },
      { source: "/services/digital-and-creative", destination: "/services/digital-creative", permanent: true },
      { source: "/who-we-help/live-music", destination: "/who-we-help/promoters-venues-festivals", permanent: true },
    ];
  },
};

export default nextConfig;
