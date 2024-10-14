/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://api.giftogether.co.kr/:path*",
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
