/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "asdygmjoxmcsbtbeomkr.supabase.co",
      },
      {
        hostname: "www.dummyimage.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "asset.brandfetch.io",
      },
    ],
  },
};

module.exports = nextConfig;
