import Link from "next/link"
import BranchLeafMovil from "../../../public/leaf/branch-leaf-movil"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2Movil from "../../../public/leaf/leaf2-movil"
import { Image as ImageKit } from "@imagekit/next"
import "./home.css"

export default function MovilHome() {
	return (
		<section className="w-full min-h-[950px] flex justify-center items-start relative px-(--xs-layout-padding) bg-(--background-one) pb-40">
			<HomeImg2 />
			<LeafImgs />
			<Hero />
			<Skills />
		</section>
	)
}

const HomeImg2 = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	return (
		<div className="absolute z-0 -right-[30dvw] bottom-40 movil-bg movil-home-image">
			<div className="w-[180dvw] aspect-video relative ">
				<ImageKit
					urlEndpoint={`${urlEndp}`}
					src="/Layout/hero-bg.webp"
					priority={true}
					alt={"/Layout/hero-bg.webp"}
					fill
					loading="eager"
					className="object-cover"
					sizes="(max-width: 768px) 100vw"
				/>
			</div>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeafMovil className="absolute top-0 -right-[5dvw] size-52 rotate-x-180 text-(--primary-green) opacity-50" />
			<Leaf1 className="absolute top-[30%] left-[65%] size-12 text-(--primary-green)" />
			<Leaf2Movil className="absolute z-1 bottom-[5%] -left-[5%] size-32 text-(--primary-green) opacity-(--opacity-leaf)" />
		</>
	)
}

const Hero = () => {
	return (
		<div id="home" className="w-full pt-40 relative z-1">
			<article className="flex flex-col items-center gap-6">
				<HeroTitle />
				<div className="flex flex-col gap-0 items-center justify-center revealfrom0 delay800">
					<p className="hero-subtitle">Al cuidado de tu piel.</p>
					<p className="hero-subtitle">Donde tu belleza se revela.</p>
				</div>
				<Link
					href="https://alba-estetica-turnos.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					className="cta-button text-center mt-4"
				>
					RESERVA TU TURNO
				</Link>
			</article>
		</div>
	)
}

const Skills = () => {
	return (
		<article className="absolute z-2 bottom-0 left-0 w-full flex flex-col items-center justify-center gap-2">
			<div className="flex items-center justify-center gap-2 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow hero-skill place-self-start mx-6">
				<i>+5</i>
				<span>años de experiencia</span>
			</div>

			<div className="flex items-center justify-center gap-2 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow hero-skill">
				<i>+120</i>
				<span>clientas atendidas</span>
			</div>

			<div className="flex items-center justify-center gap-2 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow hero-skill place-self-end mx-6">
				<i>99.9%</i>
				<span>clientas satisfechas</span>
			</div>
		</article>
	)
}

const HeroTitle = () => {
	return (
		<div className="flex flex-col gap-1 items-center justify-center relative">
			<div className="relative px-1 overflow-hidden">
				<p className="hero-title revealFromDown absolute inset-0 top-[105%]">
					<span className="revealFromDown absolute top-[105%] left-1">
						Centro
					</span>
					<span className="revealFromDown absolute top-[105%] left-33 delay100">
						de
					</span>
					<span className="revealFromDown absolute top-[105%] left-45 delay200">
						estética
					</span>
				</p>
				<p className="hero-title opacity-0">Centro de estética</p>
			</div>
			<div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p className="cormorant opacity-0 text-2xl leading-[20px]">&</p>
				<p className="cormorant font-medium text-(--primary-green) text-2xl leading-[24px] revealFromDown absolute top-[105%] left-0 delay300">
					&
				</p>
			</div>
			<div className="relative px-1 overflow-hidden">
				<p className="hero-title revealFromDown absolute inset-0 top-[105%]">
					<span className="revealFromDown absolute top-[105%] left-1 delay400">
						bienestar
					</span>
					<span className="revealFromDown absolute top-[105%] left-42 delay500">
						integral
					</span>
				</p>
				<p className="hero-title opacity-0">bienestar integral</p>
			</div>
		</div>
	)
}
