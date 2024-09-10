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
                protocol: 'https',
                hostname: 'giftogether2.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            },
            // TODO: production 환경으로 갈 때 삭제 필요
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
