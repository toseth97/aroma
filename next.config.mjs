/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "elementor.zozothemes.com",
            },
            {
                protocol: "https",
                hostname: "i.imgur.com",
            },
        ],
    },
};

export default nextConfig;
