import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import HeaderFixed from "../header/header-fixed"

export default function SinglePageHeader({
	text,
	href,
}: {
	text: string
	href: "services" | "shop" | "favorites" | "cart"
}) {
	const link =
		href === "services" ? "/#services" : href === "shop" ? "/#shop" : `/${href}`

	return (
		<div className="w-full h-[10dvh] border-b-2 border-[var(--secondary-green)] flex flex-col justify-end group relative">
			<Link href={link} className="py-4 flex items-center gap-6 cursor-pointer">
				<ArrowLeft size={24} color="var(--primary-green)" className="icon" />
				<span className="header text-[var(--primary-green)]">{text}</span>
			</Link>
			<HeaderFixed layout="single-page" />
		</div>
	)
}
