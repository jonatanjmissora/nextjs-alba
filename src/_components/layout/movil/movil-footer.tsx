import Link from "next/link"
import RoundLeafMovil from "../../../../public/leaf/round-leaf-movil"
import {
	whatsappLinkData,
	instagramLinkData,
	facebookLinkData,
	mailLinkData,
	mensajeSuscripcionData,
} from "@/_lib/constant"
import { WhatsApp } from "../../../../public/socials/whatsapp"
import { Instagram } from "../../../../public/socials/instagram"
import { Facebook } from "../../../../public/socials/facebook"
import { Mail } from "../../../../public/socials/mail"

export default function MovilFooter() {
	const whatsappLink = whatsappLinkData
	const instagramLink = instagramLinkData
	const facebookLink = facebookLinkData
	const mailLink = mailLinkData

	const mensajeSuscripcion = mensajeSuscripcionData

	return (
		<section className="w-full bg-[var(--primary-pink)] relative mt-[14px] px-6">
			<WaveSVG className="w-full absolute -top-[55%] left-0 -z-10" />
			<footer
				id="contact"
				className="w-full flex flex-col gap-12 items-center pt-20"
			>
				<div className="flex flex-col gap-2 min-w-3/4">
					<h2 className="w-full text-center header font-semibold text-[var(--primary-green)] border-b border-[var(--primary-green)] py-2 my-3">
						Mapa del sitio
					</h2>
					<nav>
						<ul className="w-full flex flex-col items-center justify-center gap-2 text-black">
							<li>
								<Link href="/#services">Servicios</Link>
							</li>
							<li>
								<Link href="/#shop">Tienda</Link>
							</li>
							<li>
								<Link href="/#about">Acerca de</Link>
							</li>
							<li>
								<Link href="/#faqs">Tips</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="flex flex-col gap-2 text-[#333] text-sm">
					<p>{mensajeSuscripcion}</p>
					<div className="w-full flex justify-center">
						<Link
							href={`${whatsappLink}?text=${encodeURIComponent(mensajeSuscripcion)}`}
							target="_blank"
							className="cta-button px-8 py-3"
						>
							Quiero suscribirme
						</Link>
					</div>
				</div>

				<nav className="w-full flex justify-around items-center gap-2 relative z-10">
					<Link href={whatsappLink} target="_blank">
						<WhatsApp className="size-[30px] text-[var(--primary-green)] duration-300" />
					</Link>
					<Link href={instagramLink} target="_blank">
						<Instagram className="size-[30px] text-[var(--primary-green)] duration-300" />
					</Link>
					<Link href={facebookLink} target="_blank">
						<Facebook className="size-[30px] text-[var(--primary-green)] duration-300" />
					</Link>
					<Link href={mailLink} target="_blank">
						<Mail className="size-[30px] text-[var(--primary-green)] duration-300" />
					</Link>
				</nav>

				<div className="w-full border-t border-[var(--primary-green)] py-4">
					<p className="py-2 text-sm text-[var(--primary-green)] w-full text-right">
						© {new Date().getFullYear()} ALBA
					</p>
				</div>
				<RoundLeafMovil className="absolute -z-0 bottom-[00%] -right-[2%] size-[10rem] rotate-0 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			</footer>
		</section>
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
