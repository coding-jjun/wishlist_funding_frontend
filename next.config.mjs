/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://43.201.66.126:3000/api/:path*",
            },
        ];
    },
};

export default nextConfig;
