"use client"

import { useEffect, useState } from "react"
import HeaderCartContainer from "./header-cart-container"
import HeaderHeartContainer from "./header-heart-container"
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
		<article>
			{layout === "single-page" ? (
				<a
					href={link || "/"}
					className={`fixed top-[1.5%] sm:top-[1dvh] 2xl:top-[3.5dvh] 2xl:left-[13dvw] left-[11.5%] z-100 py-4 flex items-center gap-3 cursor-pointer ${scrolled && "sm:-translate-x-30 2xl:-translate-x-50"} duration-500`}
				>
					<ArrowLeft size={24} color="var(--primary-green)" className="icon" />
					<span className="subtitle text-(--primary-green)">{text}</span>
				</a>
			) : (
				<Logo scrolled={scrolled} />
			)}

			<div
				className={`absolute sm:fixed z-50 ${scrolled && "sm:translate-x-26 2xl:translate-x-37"} duration-500 flex gap-4 header-icons`}
			>
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
		</article>
	)
}

const Logo = ({ scrolled }: { scrolled: boolean }) => {
	return (
		<div
			className={`fixed z-100 text-(--primary-green) bonheur ${scrolled && "sm:-translate-x-26 2xl:-translate-x-37"} duration-500 header-logo`}
		>
			<a href="#home01">Alba </a>
			<span className={`${scrolled && "opacity-0"} duration-500`}>Garcia</span>
		</div>
	)
}
