import Link from "next/link"
import RoundLeaf from "../../public/leaf/round-leaf"
import { servicesTree } from "@/_lib/services-mock"
import { productsTree } from "@/_lib/products-mock"
import { tipsMock } from "@/_lib/tips-mock"
import {
	whatsappLinkData,
	instagramLinkData,
	facebookLinkData,
	mailLinkData,
	mensajeSuscripcionData,
} from "@/_lib/constant"
import { Image as ImageKit2 } from "@imagekit/next"
import Leaf1 from "../../public/leaf/leaf1"

export default function Footer() {
	const whatsappLink = whatsappLinkData
	const instagramLink = instagramLinkData
	const facebookLink = facebookLinkData
	const mailLink = mailLinkData

	const mensajeSuscripcion = mensajeSuscripcionData
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"

	return (
		<div className="w-full relative pb-6 overflow-hidden">
			<div>
				<div className="relative ml-auto right-0 sm:w-[70dvw] sm:h-[70dvh] 2xl:w-[50dvw] 2xl:h-[50dvh]">
					<ImageKit2
						urlEndpoint={`${urlEndp}`}
						src="Layout/footer-bg.webp"
						priority={false}
						alt={"Layout/footer-bg.webp"}
						fill
						loading="lazy"
						className={`object-cover`}
						sizes="(max-width: 768px) 33vw, (max-width: 1200px) 60vw, 60vw"
					/>
				</div>
			</div>
			<footer id="footer01" className="w-full flex flex-col relative pt-40">
				<div className="w-full px-32 relative z-2">
					<div className="grid grid-cols-4 min-h-[30dvh] pb-40">
						<div className="flex flex-col gap-4 w-full">
							<h3 className="py-2 font-semibold tracking-widest text-base 2xl:text-2xl text-(--primary-green)">
								Servicios
							</h3>
							<ServicesNavComponent />
						</div>

						<div className="w-full flex flex-col gap-2">
							<h3 className="py-2 font-semibold tracking-widest text-base 2xl:text-2xl text-(--primary-green)">
								Productos
							</h3>
							<ProductsNavComponent />
						</div>

						<div className="w-full flex flex-col gap-2">
							<h3 className="py-2 font-semibold tracking-widest text-base 2xl:text-2xl text-(--primary-green)">
								Tips
							</h3>
							<TipsNavComponent />
						</div>

						<div className="w-full flex flex-col gap-4">
							<h3 className="py-2 font-semibold text-base 2xl:text-2xl text-(--primary-green)">
								Suscripción
							</h3>
							<div className="flex flex-col gap-12 2xl:gap-16 text-[#333] text-sm 2xl:text-base">
								<p>
									Recibe las últimas novedades y suscribete para mas informacion
									y promociones.
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
										<WhatsApp className="size-[24px] 2xl:size-[32px] text-(--primary-green) duration-300" />
									</Link>
									<Link href={instagramLink} target="_blank">
										<Instagram className="size-[24px] 2xl:size-[32px] text-(--primary-green) duration-300" />
									</Link>
									<Link href={facebookLink} target="_blank">
										<Facebook className="size-[24px] 2xl:size-[32px] text-(--primary-green) duration-300" />
									</Link>
									<Link href={mailLink} target="_blank">
										<Mail className="size-[24px] 2xl:size-[32px] text-(--primary-green) duration-300" />
									</Link>
								</nav>
							</div>
						</div>
					</div>

					<div className="w-full border-t border-(--primary-green) mt-12">
						<p className="py-2 w-full text-right text-sm text-(--primary-green)">
							© {new Date().getFullYear()} ALBA
						</p>
					</div>
				</div>

				<Signature />
				<Leaf1 className="absolute top-0 left-[15dvw] size-24 sm:size-20 2xl:size-28 text-(--leaf-color) opacity-(--opacity-leaf)" />
				<RoundLeaf className="narnia absolute bottom-0 right-0 sm:size-40 2xl:size-60 rotate-0 text-(--leaf-color) opacity-(--opacity-leaf)" />
			</footer>
		</div>
	)
}

const ServicesNavComponent = () => {
	const services = servicesTree
	return (
		<nav className="flex flex-col gap-4 text-[#333] text-sm 2xl:text-base overflow-hidden">
			{services.map(service => (
				<a
					key={service.title}
					className="hover:text-(--primary-green) hover:font-semibold tracking-widest w-max"
					href={`/services/${service.id}`}
				>
					{service.title}
				</a>
			))}
		</nav>
	)
}

const ProductsNavComponent = () => {
	const products = productsTree
	return (
		<nav className="flex flex-col gap-4 text-[#333] text-sm 2xl:text-base overflow-hidden">
			{products.map(product => (
				<a
					key={product.title}
					className="hover:text-(--primary-green) hover:font-semibold tracking-widest w-max"
					href={`/shop/${product.id}`}
				>
					{product.title}
				</a>
			))}
		</nav>
	)
}

const TipsNavComponent = () => {
	const tips = tipsMock
	return (
		<nav className="flex flex-col gap-4 text-[#333] text-sm 2xl:text-base overflow-hidden">
			{tips.map(tip => (
				<a
					key={tip.id}
					className="hover:text-(--primary-green) hover:font-semibold tracking-widest w-max"
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

const Signature = () => {
	return (
		<div className="w-full h-1 relative">
			<p className="bonheur text-(--primary-green) sm:text-[12rem] 2xl:text-[17rem] text-center opacity-10 leading-[280px] absolute z-0 -top-[250px] left-0 w-full">
				Albana Garcia
			</p>
		</div>
	)
}
