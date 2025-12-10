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
			<div className="flex flex-col gap-6 relative">
				<div className="relative h-14 w-100 overflow-hidden">
					<p className="hero-title">Centro de estética</p>
				</div>
				<div className="absolute top-1/2 -translate-1/2 left-1/2 h-6">
					<p className="hero-title-y delay660 text-4xl leading-[25px]">&</p>
				</div>
				<div className="relative h-14 w-100 overflow-hidden">
					<p className="hero-title delay330">bienestar integral</p>
				</div>
			</div>
			<div>
				<p className="hero-subtitle">Al cuidado de tu piel.</p>
				<p className="hero-subtitle">Donde tu belleza se revela.</p>
			</div>
			<Link
				href="https://alba-estetica-turnos.netlify.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="cta-button text-center mt-4 delay660"
			>
				RESERVA TU TURNO
			</Link>
		</article>
	)
}

const Skills = () => {
	const skillData = [
		{ icon: "+5", content: "años de experiencia" },
		{ icon: "+120", content: "clientas atendidas" },
		{ icon: "99.9%", content: "clientas satisfechas" },
	]
	return (
		<article className="absolute sm:bottom-12 2xl:bottom-24 left-(--sm-layout-padding) 2xl:left-(--2xl-layout-padding) z-1 flex sm:gap-6 2xl:gap-10 items-center justify-center">
			{skillData.map(skill => (
				<div
					key={skill.icon}
					className="flex items-center justify-center gap-2 rounded-tl-xl rounded-br-xl bg-(--primary-pink) border border-[#444]/10 custom-shadow hero-skill delay1330"
				>
					<i>{skill.icon}</i>
					<span>{skill.content}</span>
				</div>
			))}
		</article>
	)
}
