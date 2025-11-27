import Link from "next/link"
import HeaderFixed from "./header-fixed"

export default function Header() {
	return (
		<header className="w-full h-full flex justify-center items-center relative">
			<nav className="flex items-center gap-12 header-nav font-normal text-(--primary-green)">
				<Link href={`/#services01`}>SERVICIOS</Link>
				<Link href="/#shop01">TIENDA</Link>
				<Link href="/#about01">ACERCA DE</Link>
				<Link href="/#tips01">TIPS</Link>
				<Link href="/#footer01">CONTACTO</Link>
			</nav>

			<HeaderFixed layout="home" />
		</header>
	)
}
