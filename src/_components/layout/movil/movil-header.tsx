"use client"

import HeaderCartContainer from "../../header/header-cart-container"
import HeaderHeartContainer from "../../header/header-heart-container"
import HeaderSearch from "../../header/header-search"
import { useEffect, useState } from "react"

export default function MovilHeader() {
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
		<header
			className={`fixed top-0 left-0 right-0 py-4 px-6 z-50 flex items-center justify-between ${scrolled && "shadow-[0_0_5px_0_rgba(0,0,0,0.05)] bg-[var(--background-one)]"}`}
		>
			<a
				href="/#home"
				className="subtitle text-[var(--primary-green)] font-semibold"
			>
				ALBA
			</a>

			<div className="flex items-center gap-6 border border-green-500">
				<HeaderSearch />
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
		</header>
	)
}
