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
		<div className="w-full h-[10dvh] border-b-2 border-[var(--secondary-green)] flex group relative">
			<HeaderFixed layout="single-page" link={link} text={text} />
		</div>
	)
}
