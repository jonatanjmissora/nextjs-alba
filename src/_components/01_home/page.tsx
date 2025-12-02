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
		<div className="absolute bottom-0 z-0 overflow-hidden hero-bg home-img-container">
			<div className="relative home-img">
				<ImageKit
					urlEndpoint={`${urlEndp}`}
					src="/Layout/hero-bg.webp"
					priority={true}
					alt={"/Layout/hero-bg.webp"}
					fill
					loading="eager"
					className={`object-cover`}
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 60vw, 100vw"
				/>
			</div>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute top-0 right-0 z-1 size-[16rem] 2xl:size-[20rem] rotate-x-180 text-(--primary-green)" />
			<Leaf1 className="absolute top-[60%] 2xl:top-[65%] left-[10%] z-1 size-[4rem] 2xl:size-[6rem] text-(--primary-green) opacity-95" />
			<Leaf2 className="absolute top-[43%] 2xl:top-[20%] left-[40%] z-1 size-[5rem] 2xl:size-[8rem] rotate-180 text-(--primary-green) opacity-95" />
			<RoundLeaf className="absolute top-0 -left-[2%] z-1 size-[7rem] 2xl:size-[10rem] rotate-180 text-(--primary-green) opacity-95" />
		</>
	)
}

const Hero = () => {
	return (
		<article className="absolute z-1 flex flex-col justify-center items-center hero-container border border-black">
			<div className="hero-title">
				<p>Centro cosmiátrico</p>
				<p>de belleza</p>
			</div>
			<div>
				<p className="hero-subtitle">Al cuidado de tu piel.</p>
				<p className="hero-subtitle">Donde tu belleza se revela.</p>
			</div>
			<Link
				href="https://alba-estetica-turnos.netlify.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="cta-button btn-text text-center mt-4 py-4 px-14"
			>
				RESERVA TU TURNO
			</Link>
		</article>
	)
}

const Skills = () => {
	return (
		<article className="absolute bottom-24 left-(--2xl-layout-padding) z-1 flex gap-12 items-center justify-center">
			<div className="flex items-center justify-center gap-2 px-6 py-3 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow">
				<span className="text-xl text-(--primary-green)">+5</span>
				<span className="">años de experiencia</span>
			</div>

			<div className="flex items-center justify-center gap-2 px-6 py-3 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow">
				<span className="text-xl text-(--primary-green)">+120</span>
				<span className="">clientas atendidas</span>
			</div>

			<div className="flex items-center justify-center gap-2 px-6 py-3 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow">
				<span className="text-xl text-(--primary-green)">99.9%</span>
				<span className="">clientas satisfechas</span>
			</div>
		</article>
	)
}
