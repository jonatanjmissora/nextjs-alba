import type { Metadata } from "next"
import "./../../globals.css"
import SinglePageHeader from "@/_components/elements/single-page-header"
import SinglePageFooter from "@/_components/elements/single-page-footer"
import SinglePageLeaf from "@/_components/elements/single-page-leaf"

export const metadata: Metadata = {
	title: "Alba Garcia",
	description: "Estetica Integral",
}

export default function ElementosLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<section className="w-full min-h-[100svh] sm:min-h-screen px-6 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] flex flex-col relative">
			<SinglePageHeader text="Volver" href={"services"} />
			{children}
			<SinglePageFooter />

			<SinglePageLeaf />
		</section>
	)
}
