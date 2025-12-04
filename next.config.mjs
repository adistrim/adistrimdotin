/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.hashnode.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
