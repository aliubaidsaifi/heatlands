/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [360, 430, 640, 828, 1080, 1200, 1600, 1920, 2400],
},
};

export default nextConfig;
