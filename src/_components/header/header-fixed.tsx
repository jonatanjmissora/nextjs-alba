"use client"

import { useEffect, useState } from "react"
import HeaderCartContainer from "./header-cart-container"
import HeaderHeartContainer from "./header-heart-container"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HeaderFixed({
	link,
	layout,
	text,
}: {
	link?: string
	layout: "single-page" | "home"
	text?: string
}) {
	const [scrolled, setScrolled] = useState<boolean>(false)

	useEffect(() => {
		if (window.scrollY) setScrolled(true)

		const handleScrolled = () => {
			if (window.scrollY > 100) {
				setScrolled(true)
			} else setScrolled(false)
		}

		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	}, [])

	return (
		<>
			{layout === "single-page" ? (
				<Link
					href={link || "/"}
					className={`fixed top-[1.5%] sm:top-[0.5dvh] 2xl:top-[2dvh] 2xl:left-[13dvw] left-[11.5%] z-100 py-4 flex items-center gap-3 cursor-pointer ${scrolled && "sm:-translate-x-30 2xl:-translate-x-50"} duration-500`}
				>
					<ArrowLeft size={24} color="var(--primary-green)" className="icon" />
					<span className="header text-[var(--primary-green)]">{text}</span>
				</Link>
			) : (
				<Logo scrolled={scrolled} />
			)}

			<div
				className={`absolute sm:fixed 2xl:top-[5%] top-[3.5%] right-[15%] z-50 ${scrolled && "translate-x-37"} duration-500 flex gap-4`}
			>
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
		</>
	)
}

const Logo = ({ scrolled }: { scrolled: boolean }) => {
	return (
		<div
			className={`fixed top-[3.3%] sm:top-[3.75dvh] 2xl:top-[4dvh] 2xl:left-[13dvw] left-[11.5%] z-100 text-5xl text-(--primary-green) bonheur ${scrolled && "sm:-translate-x-26 2xl:-translate-x-37"} duration-500`}
		>
			<a href="#home01">Alba </a>
			<span className={`${scrolled && "opacity-0"} duration-500`}>Garcia</span>
		</div>
	)
}
