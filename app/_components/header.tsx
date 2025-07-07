import Link from "next/link"
import { Heart } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import HeaderSerch from "./header-search"

export default function Header() {
	return (
		<header className="w-full h-full flex justify-between items-center">
			<a
				href="#home"
				className="text-2xl font-semibold text-[var(--primary-green)]"
			>
				ALBA GARCIA
			</a>

			<nav className="flex items-center gap-8 header-nav">
				<HeaderSerch />
				<a href="#services">Servicios</a>
				<a href="#shop">Tienda</a>
				<a href="#faqs">Preguntas</a>
				<a href="#contact">Contacto</a>
			</nav>

			<nav className="flex gap-8">
				<Link href="/favorites">
					<Heart size={20} color="var(--primary-green)" className="icon" />
				</Link>
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
