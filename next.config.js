/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.hashnode.com'],
    },
    env: {
        NEXT_PUBLIC_YOUTUBE_API_KEY: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        NEXT_PUBLIC_YOUTUBE_CHANNEL_ID: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID,
    }
}

module.exports = nextConfig
