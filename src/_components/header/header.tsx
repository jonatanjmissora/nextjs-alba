import HeaderFixed from "./header-fixed"
import "./header.css"

export default function Header() {
	return (
		<header
			id="home01"
			className="absolute top-0 left-0 z-50 w-full header-container delay2000"
		>
			<div className="w-full h-full flex justify-center items-center relative">
				<nav className="flex items-center gap-12 font-normal text-(--primary-green) header-nav">
					<a href={`/#services01`}>SERVICIOS</a>
					<a href="/#shop01">TIENDA</a>
					<a href="/#about01">ACERCA DE</a>
					<a href="/#tips01">TIPS</a>
					<a href="/#footer01">CONTACTO</a>
				</nav>

				<HeaderFixed layout="home" />
			</div>
		</header>
	)
}
