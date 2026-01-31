import { Image as ImageKit } from "@imagekit/next"
import Link from "next/link"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import RoundLeaf from "../../../public/leaf/round-leaf"
import "./home.css"

export default function Home() {
	return (
		<section className="w-full min-h-dvh flex justify-center items-center relative bg-(--background-one)">
			<HomeImg1 />
			<LeafImgs />
			<Hero />
			<Skills />
		</section>
	)
}

const HomeImg1 = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"

	return (
		<div className="absolute bottom-0 z-0 overflow-hidden hero-bg home-img-container hero-img">
			<div className="relative home-img">
				<ImageKit
					urlEndpoint={`${urlEndp}`}
					src="/Layout/hero-bg.webp"
					priority={true}
					alt={"/Layout/hero-bg.webp"}
					fill
					loading="eager"
					className={`object-cover hero-img`}
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 60vw, 100vw"
				/>
			</div>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute top-0 right-0 z-1 size-60 2xl:size-80 rotate-x-180 text-(--primary-green)" />
			<Leaf1 className="absolute top-[60%] 2xl:top-[65%] left-[10%] z-1 size-16 2xl:size-24 text-(--primary-green) opacity-95" />
			<Leaf2 className="absolute top-[43%] 2xl:top-[20%] left-[40%] z-1 size-20 2xl:size-32 rotate-180 text-(--primary-green) opacity-95" />
			<RoundLeaf className="absolute top-0 -left-[2%] z-1 size-28 2xl:size-40 rotate-180 text-(--primary-green) opacity-95" />
		</>
	)
}

const Hero = () => {
	return (
		<article className="absolute z-1 flex flex-col justify-center items-center hero-container">
			<HeroTitle />
			<div className="flex flex-col gap-0 items-center justify-center revealfrom0 delay800">
				<p className="hero-subtitle">Al cuidado de tu piel.</p>
				<p className="hero-subtitle">Donde tu belleza se revela.</p>
			</div>
			<Link
				href="https://alba-estetica-turnos.netlify.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="cta-button text-center mt-4 delay1000"
			>
				RESERVA TU TURNO
			</Link>
		</article>
	)
}

const Skills = () => {
	return (
		<article className="absolute sm:bottom-12 2xl:bottom-24 left-(--sm-layout-padding) 2xl:left-(--2xl-layout-padding) z-1 flex sm:gap-6 2xl:gap-10 items-center justify-center">
			<div className="flex items-center justify-center gap-2 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow hero-skill">
				<i>+5</i>

				<span>años de experiencia</span>
			</div>
			<div className="flex items-center justify-center gap-2 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow hero-skill">
				<i>+120</i>

				<span>clientas atendidas</span>
			</div>
			<div className="flex items-center justify-center gap-2 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow hero-skill">
				<i>99.9%</i>

				<span>clientas satisfechas</span>
			</div>
		</article>
	)
}

const HeroTitle = () => {
	return (
		// <div className="hero-title">
		// 	<p>Centro cosmiátrico</p>
		// 	<p>de belleza</p>
		// </div>

		<div className="flex flex-col sm:gap-3 2xl:gap-1 items-center justify-center relative">
			<div className="relative px-1 overflow-hidden">
				<p className="hero-title revealFromDown absolute inset-0 top-[105%]">
					<span className="revealFromDown absolute top-[105%] left-1">
						Centro
					</span>
					<span className="revealFromDown absolute top-[105%] sm:left-42 2xl:left-57 delay100">
						de
					</span>
					<span className="revealFromDown absolute top-[105%] sm:left-58 2xl:left-78 delay200">
						estética
					</span>
				</p>
				<p className="hero-title opacity-0">Centro de estética</p>
			</div>
			<div className="absolute sm:top-[50%] 2xl:top-[57%] left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p className="cormorant opacity-0 text-4xl leading-[25px]">&</p>
				<p className="cormorant font-medium text-(--primary-green) sm:text-4xl 2xl:text-5xl leading-[30px] revealFromDown absolute top-[105%] left-0 delay300">
					&
				</p>
			</div>
			<div className="relative px-1 overflow-hidden">
				<p className="hero-title revealFromDown absolute inset-0 top-[105%]">
					<span className="revealFromDown absolute top-[105%] left-1 delay400">
						bienestar
					</span>
					<span className="revealFromDown absolute top-[105%] sm:left-53 2xl:left-72 delay500">
						integral
					</span>
				</p>
				<p className="hero-title opacity-0">bienestar integral</p>
			</div>
		</div>
	)
}
