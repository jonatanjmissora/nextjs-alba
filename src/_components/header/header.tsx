import HeaderFixed from "./header-fixed"

export default function Header() {
	return (
		<header className="w-full h-full flex justify-center items-center relative">
			<nav className="flex items-center gap-8 header-nav text">
				<a href={`/#services01`}>Servicios</a>
				<a href="/#shop01">Tienda</a>
				<a href="/#about01">Acerca de</a>
				<a href="/#tips01">Tips</a>
				<a href="/#footer01">Contacto</a>
			</nav>

			<HeaderFixed layout="home" />
		</header>
	)
}
