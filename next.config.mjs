/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	env: {
		API_URL: process.env.API_URL
	}
}

export default nextConfig
