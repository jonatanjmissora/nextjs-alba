import RoundLeaf from "@/public/leaf/round-leaf"
import Link from "next/link"

export default function MovilFooter() {
	return (
		<>
			<WaveSVG className="w-full absolute -top-[55%] left-0 -z-10" />
			<footer id="contact" className="w-full flex flex-col items-center">
				<h2 className="header font-semibold text-[var(--primary-green)] mt-12">
					Mapa del sitio
				</h2>
				<nav>
					<ul className="flex flex-col gap-1 my-4 text-black">
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

				<div className="flex flex-col gap-4 text-[#333] text-sm pt-8">
					<p>
						Recibe las últimas novedades. Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Quisquam, reprehenderit.
					</p>
					<div>
						<div className="flex flex-col gap-2">
							<input
								type="email"
								placeholder="Correo electrónico"
								className="p-2 px-6 bg-[var(--background-one)] rounded-lg w-full text-base rounded-tl-lg rounded-br-lg shadow-[2px_2px_3px_rgba(138,184,168,0.75)]"
							/>
							<button className="cta-button w-full py-3">Enviar</button>
						</div>
					</div>
					<nav className="flex justify-around items-center gap-6 mt-8">
						<Link href="/social01">
							<WhatsApp className="size-[30px] text-[var(--primary-green)] duration-300" />
						</Link>
						<Link href="/social02">
							<Instagram className="size-[30px] text-[var(--primary-green)] duration-300" />
						</Link>
						<Link href="/social03">
							<Facebook className="size-[30px] text-[var(--primary-green)] duration-300" />
						</Link>
						<Link href="/social04">
							<Mail className="size-[30px] text-[var(--primary-green)] duration-300" />
						</Link>
					</nav>
				</div>

				<div className="w-full border-t border-[var(--primary-green)] mt-8">
					<p className="py-2 text-sm text-[var(--primary-green)]">
						© {new Date().getFullYear()} ALBA
					</p>
				</div>
				<RoundLeaf className="absolute bottom-[50%] -right-[2%] size-[8rem] rotate-0 text-[var(--leaf-color)] opacity-50" />
			</footer>
		</>
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
