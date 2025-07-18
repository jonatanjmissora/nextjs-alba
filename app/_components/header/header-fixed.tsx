"use client"

import { useEffect, useState } from "react"
import HeaderCartContainer from "./header-cart-container"
import HeaderHeartContainer from "./header-heart-container"

export default function HeaderFixed() {
	const [scrolled, setScrolled] = useState<boolean>(false)

	useEffect(() => {
		if (window.scrollY) setScrolled(true)

		const handleScrolled = () => {
			if (window.scrollY > 100) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	}, [])

	return (
		<>
			<a
				href="/#home"
				className={`${scrolled ? "top-[4.25%]" : "-top-[4.25%]"} 2xl:text-2xl text-xl font-semibold text-[var(--primary-green)] fixed left-[3%]`}
			>
				{scrolled ? "true" : "false"}
				ALBA
			</a>
			<div
				className={`${scrolled ? "top-[4.25%]" : "-top-[4.25%]"} fixed right-[3%] flex gap-8`}
			>
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
		</>
	)
}
