/** @type {import('next').NextConfig} */
const nextConfig = {
	// Deshabilitar el uso de SWC para CSS ya que está causando problemas con lightningcss
	experimental: {
		forceSwcTransforms: false,
	},

	// Configuración de webpack para manejar módulos nativos
	webpack: (config, { isServer }) => {
		// Asegurarse de que los módulos nativos se resuelvan correctamente
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				path: false,
				os: false,
			}
		}
		return config
	},

	// Configuración de imágenes
	images: {
		domains: ["ik.imagekit.io"],
	},
}

// Forzar el uso de Babel para la transformación de fuentes
if (process.env.NODE_ENV === "production") {
	nextConfig.compiler = {
		styledComponents: true,
	}
}

module.exports = nextConfig
