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
import { useSearchParams } from "next/navigation"
import { ImageKit } from "@/_components/image-kit"

export default function MovilHeader() {
	const [scrolled, setScrolled] = useState<boolean>(false)
	const searchParams = useSearchParams()

	useEffect(() => {
		if (window.scrollY) setScrolled(true)

		const handleScrolled = () => {
			if (window.scrollY > 20) {
				setScrolled(true)
			} else setScrolled(false)
		}

		window.addEventListener("scroll", handleScrolled)
		return () => window.removeEventListener("scroll", handleScrolled)
	}, [])

	const from = searchParams.get("from") ?? ""

	return (
		<header
			className={`fixed top-0 left-0 right-0 py-4 px-6 z-50 flex items-center justify-between ${scrolled && "custom-shadow bg-(--background-one)"}`}
		>
			<a
				href={
					from === ""
						? "/#home"
						: from === "services"
							? "/#services"
							: from === "shop"
								? "/#shop"
								: `/${from}`
				}
				className="font-medium text-(--primary-green) tracking-wider bonheur text-3xl leading-1.5"
			>
				{from !== "" ? "Volver" : "Alba Garcia"}
			</a>
			<div className="flex items-center gap-10">
				<HeaderHeartContainer />
				<HeaderCartContainer />
				<DrawerComponent />
			</div>
		</header>
	)
}

const DrawerComponent = () => {
	return (
		<Drawer direction="left">
			<DrawerTrigger asChild>
				<Menu className="text-(--primary-green)" />
			</DrawerTrigger>
			<DrawerContent>
				<div
					className={`h-dvh from-(--background-two) to-pink-300 bg-linear-to-b`}
					id="hamb"
				>
					<DrawerHeader>
						<DrawerTitle></DrawerTitle>
					</DrawerHeader>

					<DrawerFooter className="flex justify-between h-[92dvh] flex-col px-6">
						<div className="w-full relative">
							<DrawerClose asChild className="absolute top-0 right-0">
								<X className="text-(--primary-green) size-8" />
							</DrawerClose>
							<div className="custom-shadow rounded-full overflow-hidden size-40 relative">
								<ImageKit imageID={"logo.webp"} />
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
						className="text-2xl text-(--primary-green) tracking-widest"
					>
						INICIO
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "1" } as React.CSSProperties}>
					<a
						href="/#services"
						className="text-2xl text-(--primary-green) tracking-widest"
					>
						SERVICIOS
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "2" } as React.CSSProperties}>
					<a
						href="/#shop"
						className="text-2xl text-(--primary-green) tracking-widest"
					>
						PRODUCTOS
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "3" } as React.CSSProperties}>
					<a
						href="/#about"
						className="text-2xl text-(--primary-green) tracking-widest"
					>
						ACERCA DE
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "4" } as React.CSSProperties}>
					<a
						href="/#tips"
						className="text-2xl text-(--primary-green) tracking-widest"
					>
						TIPS
					</a>
				</li>
			</DrawerClose>
			<DrawerClose asChild>
				<li style={{ "--i": "5" } as React.CSSProperties}>
					<a
						href="/#contact"
						className="text-2xl text-(--primary-green) tracking-widest"
					>
						CONTACTO
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
				<WhatsApp className="size-[30px] text-(--primary-green) duration-300" />
			</Link>
			<Link href={instagramLink} target="_blank">
				<Instagram className="size-[30px] text-(--primary-green) duration-300" />
			</Link>
			<Link href={facebookLink} target="_blank">
				<Facebook className="size-[30px] text-(--primary-green) duration-300" />
			</Link>
			<Link href={mailLink} target="_blank">
				<Mail className="size-[30px] text-(--primary-green) duration-300" />
			</Link>
		</nav>
	)
}
