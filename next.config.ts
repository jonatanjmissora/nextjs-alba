import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			new URL("https://res.cloudinary.com/dfvzvdpfa/image/upload/**"),
		],
	},
}

export default nextConfig
