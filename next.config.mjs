/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['example.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
