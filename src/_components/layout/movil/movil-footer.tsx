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
import { Image as ImageKit2 } from "@imagekit/next"

export default function MovilFooter() {
	const whatsappLink = whatsappLinkData
	const instagramLink = instagramLinkData
	const facebookLink = facebookLinkData
	const mailLink = mailLinkData

	const mensajeSuscripcion = mensajeSuscripcionData
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"

	return (
		<section className="w-full bg-(--primary-pink) relative mt-[14px] px-6">
			<div className="relative w-dvw h-[40dvh]">
				<ImageKit2
					urlEndpoint={`${urlEndp}`}
					src="Layout/footer-bg.webp"
					priority={false}
					alt={"Layout/footer-bg.webp"}
					fill
					loading="lazy"
					className={`object-cover`}
					sizes="(max-width: 768px) 100vw"
				/>
			</div>
			<footer
				id="contact"
				className="w-full flex flex-col gap-12 items-center pt-20"
			>
				<div className="flex flex-col gap-2 min-w-3/4">
					<h2 className="w-full text-center header font-semibold text-(--primary-green) border-b border-(--primary-green) py-2 my-3">
						Mapa del sitio
					</h2>
					<nav>
						<ul className="w-full flex flex-col items-center justify-center gap-6 text-black">
							<li>
								<Link href="/#services">Servicios</Link>
							</li>
							<li>
								<Link href="/#shop">Productos</Link>
							</li>
							<li>
								<Link href="/#about">Acerca de</Link>
							</li>
							<li>
								<Link href="/#tips">Tips</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="flex flex-col gap-2 text-[#333] text-sm">
					<p className="text-center text-pretty">{mensajeSuscripcion}</p>
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
						<WhatsApp className="size-[30px] text-(--primary-green) duration-300" />
					</Link>
					<Link href={instagramLink} target="_blank">
						<Instagram className="size-[30px] text-(--primary-green) duration-300" />
					</Link>
					<Link href={facebookLink} target="_blank">
						<Facebook className="size-[30px] text-(--primary-green) duration-300" />
					</Link>
					<Link href={mailLink} target="_blank">
						<Mail className="size-[30px] text-(--primary-green) duration-300" />
					</Link>
				</nav>

				<Signature />

				<div className="w-full border-t border-(--primary-green) py-4">
					<p className="py-2 text-sm text-(--primary-green) w-full text-right">
						© {new Date().getFullYear()}
					</p>
				</div>
				<RoundLeafMovil className="absolute z-0 bottom-0 -left-[2%] size-20 rotate-180 text-(--leaf-color) opacity-(--opacity-leaf)" />
			</footer>
		</section>
	)
}

const Signature = () => {
	return (
		<div className="w-full h-0 relative">
			<p className="bonheur text-(--primary-green) text-[4.5rem] text-center opacity-20 leading-none absolute -top-6 left-0 w-full">
				Albana Garcia
			</p>
		</div>
	)
}
