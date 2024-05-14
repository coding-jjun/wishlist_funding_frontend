/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://api.giftogether.co.kr/:path*",
            },
        ];
    },
};

export default nextConfig;
