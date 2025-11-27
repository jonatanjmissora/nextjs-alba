import type { Metadata } from "next"
import { Cormorant_Garamond, Jost, Bonheur_Royale } from "next/font/google"
import "./globals.css"
import LenisProvider from "@/_lib/lenis-provider"

// Configuración de Cormorant Garamond
const cormorant = Cormorant_Garamond({
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-cormorant",
	fallback: ["serif"],
	preload: true,
	adjustFontFallback: true,
})

// Configuración de Jost
const jost = Jost({
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-jost",
	fallback: ["sans-serif"],
	preload: true,
	adjustFontFallback: true,
})

// Configuración de Bonheur Royale
const bonheurRoyale = Bonheur_Royale({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-bonheur-royale",
	fallback: ["cursive"],
	preload: true,
	adjustFontFallback: true,
})

export const metadata: Metadata = {
	title: "Alba Garcia",
	description: "Estetica Integral",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="es"
			className={`${cormorant.variable} ${jost.variable} ${bonheurRoyale.variable}`}
		>
			<body className="antialiased font-sans">
				<LenisProvider>{children}</LenisProvider>
			</body>
		</html>
	)
}
