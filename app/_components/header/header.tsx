import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import HeaderSerch from "./header-search"
import HeaderHeart from "./header.heart"

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
				<HeaderSerch />
				<a href="#services">Servicios</a>
				<a href="#shop">Tienda</a>
				<a href="#about">Acerca de</a>
				<a href="#faqs">Tips</a>
				<a href="#contact">Contacto</a>
			</nav>

			<nav className="flex gap-8">
				<HeaderHeart />
				<Link href="/cart">
					<ShoppingCart
						size={20}
						color="var(--primary-green)"
						className="icon"
					/>
				</Link>
			</nav>
		</header>
	)
}
