import HeaderSearch from "./header-search"
import HeaderFixed from "./header-fixed"

export default function Header() {
	return (
		<header className="w-full h-full flex justify-center items-center relative text-sm 2xl:text-base shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
			<nav className="flex items-center gap-8 header-nav text">
				<HeaderSearch />
				<a href="#services">Servicios</a>
				<a href="#shop">Tienda</a>
				<a href="#about">Acerca de</a>
				<a href="#faqs">Tips</a>
				<a href="#contact">Contacto</a>
			</nav>

			<HeaderFixed layout="home" />
		</header>
	)
}
