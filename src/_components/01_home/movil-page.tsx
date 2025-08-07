import BranchLeafMovil from "../../../public/leaf/branch-leaf-movil"
import Image from "next/image"
import Leaf1 from "../../../public/leaf/leaf1"
import RoundLeafMovil from "../../../public/leaf/round-leaf-movil"
import Leaf2Movil from "../../../public/leaf/leaf2-movil"

export default function MovilHome() {
	return (
		<>
			<LeafImgs />
			<div
				id="home"
				className="w-full h-[115dvh] flex flex-col gap-3 pt-[15dvh] sm:pt-[25dvh]"
			>
				<span className="title text-[var(--primary-green)]">
					SKIN AND BEAUTY CENTER
				</span>
				<span className="subtitle">in Bahia Blanca</span>
				<p className="text">Lorem ipsum dolor sit amet consectetur.</p>
				<a href="/turno" className="cta-button text mt-4 py-4 px-8">
					Reserva tu turno
				</a>
			</div>
			<div className="absolute right-0 bottom-0 -z-10 bg-[var(--primary-pink)] rounded-tl-[45%]">
				<HomeImg2 />
			</div>
		</>
	)
}

const HomeImg2 = () => {
	return (
		<div className="w-[350px] h-[450px] relative">
			<Image
				src="/alba-alpha.png"
				priority
				alt="Alba Alpha Logo"
				quality={100}
				fill
				sizes="(max-width: 640px) 100vw, 640px"
				style={{
					objectFit: "cover",
				}}
			/>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeafMovil className="absolute top-0 right-[19%] size-[13rem] rotate-x-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute top-[30%] left-[65%] size-[3rem] text-[var(--leaf-color)]" />
			<Leaf2Movil className="absolute -bottom-[15%] -right-[5%] size-[8rem] rotate-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<RoundLeafMovil className="absolute -bottom-[7%] -left-[2%] size-[6rem] rotate-180 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
		</>
	)
}
