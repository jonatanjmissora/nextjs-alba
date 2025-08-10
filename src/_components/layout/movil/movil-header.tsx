"use client"

import HeaderCartContainer from "../../header/header-cart-container"
import HeaderHeartContainer from "../../header/header-heart-container"
import HeaderSearch from "../../header/header-search"
import { useEffect, useState } from "react"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu, X } from "lucide-react"

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
			<DrawerComponent />

			<div className="flex items-center gap-6">
				<HeaderSearch />
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
		</header>
	)
}

const DrawerComponent = () => {
	return (
		<Drawer direction="left">
			<DrawerTrigger asChild>
				<Menu className="text-[var(--primary-green)]" />
			</DrawerTrigger>
			<DrawerContent>
				<div className="bg-[var(--background-two)]">
					<DrawerHeader>
						<DrawerTitle></DrawerTitle>
					</DrawerHeader>

					<DrawerFooter className="flex items-center justify-start h-[100dvh] flex-col gap-2 pt-30">
						<DrawerClose asChild className="absolute top-12 right-12">
							<X className="text-[var(--primary-green)]" />
						</DrawerClose>
						<DrawerClose asChild>
							<a
								href="/#home"
								className="subtitle text-[var(--primary-green)] font-semibold"
							>
								Inicio
							</a>
						</DrawerClose>
						<DrawerClose asChild>
							<a
								href="/#services"
								className="subtitle text-[var(--primary-green)] font-semibold"
							>
								Servicios
							</a>
						</DrawerClose>
						<DrawerClose asChild>
							<a
								href="/#shop"
								className="subtitle text-[var(--primary-green)] font-semibold"
							>
								Productos
							</a>
						</DrawerClose>
						<DrawerClose asChild>
							<a
								href="/#about"
								className="subtitle text-[var(--primary-green)] font-semibold"
							>
								Acerca de
							</a>
						</DrawerClose>
						<DrawerClose asChild>
							<a
								href="/#tips"
								className="subtitle text-[var(--primary-green)] font-semibold"
							>
								Tips
							</a>
						</DrawerClose>
						<DrawerClose asChild>
							<a
								href="/#contact"
								className="subtitle text-[var(--primary-green)] font-semibold"
							>
								Contacto
							</a>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
