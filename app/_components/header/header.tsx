import HeaderSearch from "./header-search"
import HeaderHeartContainer from "./header-heart-container"
import HeaderCartContainer from "./header-cart-container"
import HeaderFixed from "./header-fixed"

export default function Header() {
	return (
		<header className="w-full h-full flex justify-between items-center">
			<a
				href="#home"
				className="2xl:text-2xl text-xl font-semibold text-[var(--primary-green)]"
			>
				ALBA GARCIA
			</a>

			<nav className="flex items-center gap-8 header-nav text">
				<HeaderSearch />
				<a href="#services">Servicios</a>
				<a href="#shop">Tienda</a>
				<a href="#about">Acerca de</a>
				<a href="#faqs">Tips</a>
				<a href="#contact">Contacto</a>
			</nav>

			<nav className="flex gap-8">
				<HeaderHeartContainer />
				<HeaderCartContainer />
			</nav>
			<HeaderFixed layout="home" />
		</header>
	)
}
