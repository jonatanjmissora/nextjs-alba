import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import LenisProvider from "@/_lib/lenis-provider"

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
		<html lang="es" className={cormorant.variable}>
			<body className="antialiased">
				<LenisProvider>{children}</LenisProvider>
			</body>
		</html>
	)
}
