import Link from "next/link"
import RoundLeaf from "../../public/leaf/round-leaf"
import { servicesTree } from "@/_lib/services-mock"
import { productsTree } from "@/_lib/products-mock"
import { tipsMock } from "@/_lib/tips-mock"
import { setUrlCategoryName } from "@/_lib/utils"

export default function Footer() {
	const whatsappLink = `https://wa.me/5492914742802`
	const instagramLink = "https://www.instagram.com/albagarcia_estetica"
	const facebookLink = "https://www.facebook.com/albana.garcia.56"
	const mailLink =
		"https://mail.google.com/mail/u/0/?view=cm&fs=1&to=albanagarciapaillan@gmail.com"

	const mensajeSuscripcion = `Hola! Alba Garcia Estetica Integral
Quisiera suscribirme a las ultimas novedades y ofertas!!
Agendá mi telefono! Saludos 🖐
`

	return (
		<footer id="footer01" className="w-full flex flex-col relative">
			<WaveSVG className="w-full h-[140%] absolute -top-[110%] left-0 -z-10" />
			<div className="w-full px-32 relaive">
				<div className="grid grid-cols-4 min-h-[30dvh] pb-10">
					<div className="flex flex-col gap-4 w-full">
						<h3 className="py-2 font-semibold tracking-widest text-base 2xl:text-2xl text-[var(--primary-green)]">
							Servicios
						</h3>
						<ServicesNavComponent />
					</div>

					<div className="w-full flex flex-col gap-2">
						<h3 className="py-2 font-semibold tracking-widest text-base 2xl:text-2xl text-[var(--primary-green)]">
							Tienda
						</h3>
						<ProductsNavComponent />
					</div>

					<div className="w-full flex flex-col gap-2">
						<h3 className="py-2 font-semibold tracking-widest text-base 2xl:text-2xl text-[var(--primary-green)]">
							Tips
						</h3>
						<TipsNavComponent />
					</div>

					<div className="w-full flex flex-col gap-4">
						<h3 className="py-2 font-semibold text-base 2xl:text-2xl text-[var(--primary-green)]">
							Suscripción
						</h3>
						<div className="flex flex-col gap-6 2xl:gap-10 text-[#333] text-sm 2xl:text-base px-2">
							<p>
								Recibe las últimas novedades. Lorem ipsum dolor sit amet
								consectetur, adipisicing elit. Quisquam, reprehenderit.
							</p>
							<div>
								<div className="">
									<Link
										href={`${whatsappLink}?text=${encodeURIComponent(mensajeSuscripcion)}`}
										target="_blank"
										className="cta-button px-8 py-3"
									>
										Quiero suscribirme
									</Link>
								</div>
							</div>
							<nav className="flex gap-10">
								<Link href={whatsappLink} target="_blank">
									<WhatsApp className="size-[24px] 2xl:size-[32px] text-[var(--primary-green)] duration-300" />
								</Link>
								<Link href={instagramLink} target="_blank">
									<Instagram className="size-[24px] 2xl:size-[32px] text-[var(--primary-green)] duration-300" />
								</Link>
								<Link href={facebookLink} target="_blank">
									<Facebook className="size-[24px] 2xl:size-[32px] text-[var(--primary-green)] duration-300" />
								</Link>
								<Link href={mailLink} target="_blank">
									<Mail className="size-[24px] 2xl:size-[32px] text-[var(--primary-green)] duration-300" />
								</Link>
							</nav>
						</div>
					</div>
				</div>

				<div className="w-full border-t border-[var(--primary-green)] mt-12">
					<p className="py-2 w-full text-right text-sm text-[var(--primary-green)]">
						© {new Date().getFullYear()} ALBA
					</p>
				</div>
			</div>
			<RoundLeaf className="narnia absolute bottom-[0%] -right-[0%] size-[15rem] rotate-0 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
		</footer>
	)
}

const ServicesNavComponent = () => {
	const services = servicesTree
	return (
		<nav className="flex flex-col gap-4 text-[#333] text-sm 2xl:text-base px-2 overflow-hidden">
			{services.map(service => (
				<Link
					key={service.title}
					className="hover:text-[var(--primary-green)] hover:font-semibold tracking-widest"
					href={`/services/${setUrlCategoryName(service.title)}`}
				>
					{service.title}
				</Link>
			))}
		</nav>
	)
}

const ProductsNavComponent = () => {
	const products = productsTree
	return (
		<nav className="flex flex-col gap-4 text-[#333] text-sm 2xl:text-base px-2 overflow-hidden">
			{products.map(product => (
				<Link
					key={product.title}
					className="hover:text-[var(--primary-green)] hover:font-semibold tracking-widest"
					href={`/shop/${setUrlCategoryName(product.title)}`}
				>
					{product.title}
				</Link>
			))}
		</nav>
	)
}

const TipsNavComponent = () => {
	const tips = tipsMock
	return (
		<nav className="flex flex-col gap-4 text-[#333] text-sm 2xl:text-base px-2 overflow-hidden">
			{tips.map(tip => (
				<a
					key={tip.id}
					className="hover:text-[var(--primary-green)] hover:font-semibold tracking-widest"
					href={`/#${tip.id}`}
				>
					{tip.title}
				</a>
			))}
		</nav>
	)
}

const WhatsApp = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: no quiero poner un titulo
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
			<path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
		</svg>
	)
}

const Instagram = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: no quiero poner un titulo
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
			<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
			<path d="M16.5 7.5v.01" />
		</svg>
	)
}

const Facebook = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: no quiero poner un titulo
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
		</svg>
	)
}

const Mail = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: no quiero poner un titulo
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`${className} icon`}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
			<path d="M3 7l9 6l9 -6" />
		</svg>
	)
}

const WaveSVG = ({ className }: { className: string }) => {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: no quiero poner un titulo
		<svg
			width="100%"
			height="100%"
			id="svg"
			viewBox="0 0 1440 390"
			className={className}
		>
			<path
				d="M 0,400 L 0,150 C 127.67857142857142,180.07142857142856 255.35714285714283,210.14285714285714 368,224 C 480.64285714285717,237.85714285714286 578.2500000000001,235.49999999999997 707,215 C 835.7499999999999,194.50000000000003 995.6428571428571,155.85714285714286 1123,142 C 1250.357142857143,128.14285714285714 1345.1785714285716,139.07142857142856 1440,150 L 1440,400 L 0,400 Z"
				stroke="none"
				strokeWidth="0"
				fill="var(--primary-pink)"
				fillOpacity="1"
			></path>
		</svg>
	)
}
