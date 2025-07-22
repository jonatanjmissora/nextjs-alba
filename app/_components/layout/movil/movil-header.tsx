import HeaderCartContainer from "../../header/header-cart-container"
import HeaderHeartContainer from "../../header/header-heart-container"
import HeaderSearch from "../../header/header-search"

export default function MovilHeader() {
	return (
		<header className="fixed top-0 left-0 py-4 px-6 z-50 w-full flex items-center justify-between shadow-[0_0_5px_0_rgba(0,0,0,0.05)] bg-[var(--background-three)]">
			<a
				href="/#home"
				className="subtitle text-[var(--primary-green)] font-semibold"
			>
				ALBA
			</a>

			<div className="flex items-center gap-6">
				<HeaderSearch />
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</div>
		</header>
	)
}
