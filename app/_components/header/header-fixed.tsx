"use client"

import { useEffect, useState } from "react"
import HeaderCartContainer from "./header-cart-container"
import HeaderHeartContainer from "./header-heart-container"

export default function HeaderFixed({
	layout,
}: {
	layout: "single-page" | "home"
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

	if (layout === "single-page") {
		return (
			<div className="top-[55%] absolute right-[5%] flex gap-4">
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
		)
	} else {
		return (
			<>
				<Logo scrolled={scrolled} />

				<div
					className={`absolute sm:fixed 2xl:top-[4%] top-[3.5%] right-[15%] z-50 ${scrolled && "translate-x-37"} duration-500 flex gap-4`}
				>
					<HeaderHeartContainer />
					<HeaderCartContainer />
				</div>
			</>
		)
	}
}

const Logo = ({ scrolled }: { scrolled: boolean }) => {
	return (
		<>
			<a
				href="#home"
				className={`fixed top-[3.3%] 2xl:top-[3.6%] left-[12.2%] z-100 header font-semibold text-[var(--primary-green)] ${scrolled && "-translate-x-37"} duration-500`}
			>
				ALBA
			</a>
			<a
				href="#home"
				className={`absolute top-[3.3%] 2xl:-top-[22.5%] left-[5%] 2xl:left-[4.75%] z-100 header font-semibold text-[var(--primary-green)]`}
			>
				GARCIA
			</a>
		</>
	)
}
