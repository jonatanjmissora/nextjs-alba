import Link from "next/link"
import { Heart, Search } from "lucide-react"
import { ShoppingCart } from "lucide-react"

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
				<div className="relative">
					<input
						type="search"
						name="search"
						id="search"
						placeholder=""
						className="bg-transparent rounded-2xl p-2 text-right w-[10ch]"
					/>
					<Search
						size={20}
						className="absolute right-2 top-1/2 -translate-y-1/2"
					/>
				</div>
				<a href="#services">Servicios</a>
				<a href="#shop">Tienda</a>
				<a href="#faqs">Preguntas</a>
				<a href="#contact">Contacto</a>
			</nav>

			<nav className="flex gap-8">
				<Link href="/favorites">
					<Heart size={24} />
				</Link>
				<Link href="/cart">
					<ShoppingCart size={24} />
				</Link>
			</nav>
		</header>
	)
}
