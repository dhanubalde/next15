/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ["images.unsplash.com"],
  },
  redirects: async ()=> {
    return[
      {
        source: '/user',
        destination: '/',
        permanent: false,
      },
      {
        source: '/user/:userId',
        destination: '/',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/',
        permanent: false,
      }
    ]
  }
};

export default nextConfig;
