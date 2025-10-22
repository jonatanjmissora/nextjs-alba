"use client"

import HeaderCartContainer from "../../header/header-cart-container"
import HeaderHeartContainer from "../../header/header-heart-container"
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
import Image from "next/image"
import Link from "next/link"
import {
	whatsappLinkData,
	instagramLinkData,
	facebookLinkData,
	mailLinkData,
} from "@/_lib/constant"
import { WhatsApp } from "../../../../public/socials/whatsapp"
import { Instagram } from "../../../../public/socials/instagram"
import { Facebook } from "../../../../public/socials/facebook"
import { Mail } from "../../../../public/socials/mail"
import { usePathname } from "next/navigation"

export default function MovilHeader() {
	const [scrolled, setScrolled] = useState<boolean>(false)
	const pathname = usePathname()

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

	const from = pathname.split("/")[1]
	const link =
		from === "services" ? "/#services" : from === "shop" ? "/#shop" : `/#home`

	return (
		<header
			className={`fixed top-0 left-0 right-0 py-4 px-6 z-50 flex items-center justify-between ${scrolled && "shadow-[0_0_5px_0_rgba(0,0,0,0.05)] bg-[var(--background-one)]"}`}
		>
			<a
				href={link}
				className="font-semibold text-[var(--primary-green)] tracking-wider"
			>
				{from !== "" ? "VOLVER" : "ALBA"}
			</a>
			<div className="flex items-center gap-6">
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
			<DrawerComponent />
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
				<div
					className={`h-[100dvh] from-[var(--background-two)] to-pink-400 bg-gradient-to-b`}
					id="hamb"
				>
					<DrawerHeader>
						<DrawerTitle></DrawerTitle>
					</DrawerHeader>

					<DrawerFooter className="flex justify-between h-[92dvh] flex-col px-6">
						<div className="w-full relative">
							<DrawerClose asChild className="absolute top-0 right-0">
								<X className="text-[var(--primary-green)] size-8" />
							</DrawerClose>
							<div className="shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)] rounded-full overflow-hidden size-40 relative">
								<Image
									src={"/logo.webp"}
									alt={"logo"}
									fill
									priority
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						</div>

						<MobilMenuNav />

						<MobilMenuSocials />
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

const MobilMenuNav = () => {
	return (
		<ul
			className={`w-3/4 flex flex-col justify-around gap-4 mobil-menu pl-6 pb-15 pt-6 flex-1`}
		>
			<DrawerClose asChild>
				<li style={{ "--i": "0" } as React.CSSProperties}>
					<a
						href="/#home"
						className="subtitle text-[var(--primary-green)] font-semibold"
					>
						Inicio
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "1" } as React.CSSProperties}>
					<a
						href="/#services"
						className="subtitle text-[var(--primary-green)] font-semibold"
					>
						Servicios
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "2" } as React.CSSProperties}>
					<a
						href="/#shop"
						className="subtitle text-[var(--primary-green)] font-semibold"
					>
						Productos
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "3" } as React.CSSProperties}>
					<a
						href="/#about"
						className="subtitle text-[var(--primary-green)] font-semibold"
					>
						Acerca de
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "4" } as React.CSSProperties}>
					<a
						href="/#tips"
						className="subtitle text-[var(--primary-green)] font-semibold"
					>
						Tips
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "5" } as React.CSSProperties}>
					<a
						href="/#contact"
						className="subtitle text-[var(--primary-green)] font-semibold"
					>
						Contacto
					</a>
				</li>
			</DrawerClose>
		</ul>
	)
}

const MobilMenuSocials = () => {
	const whatsappLink = whatsappLinkData
	const instagramLink = instagramLinkData
	const facebookLink = facebookLinkData
	const mailLink = mailLinkData
	return (
		<nav className="w-full flex justify-around items-center gap-2 relative z-10">
			<Link href={whatsappLink} target="_blank">
				<WhatsApp className="size-[30px] text-[var(--primary-green)] duration-300" />
			</Link>
			<Link href={instagramLink} target="_blank">
				<Instagram className="size-[30px] text-[var(--primary-green)] duration-300" />
			</Link>
			<Link href={facebookLink} target="_blank">
				<Facebook className="size-[30px] text-[var(--primary-green)] duration-300" />
			</Link>
			<Link href={mailLink} target="_blank">
				<Mail className="size-[30px] text-[var(--primary-green)] duration-300" />
			</Link>
		</nav>
	)
}
