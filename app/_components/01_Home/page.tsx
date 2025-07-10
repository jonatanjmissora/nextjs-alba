import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import RoundLeaf from "@/public/leaf/round-leaf"
import Image from "next/image"

export default function Home() {
	return (
		<>
			<LeafImgs />

			<div className="absolute top-0 left-0 -z-10 bg-[var(--primary-pink)] pt-24 pl-32 2xl:pr-40 pr-12 rounded-br-[45%] overflow-hidden">
				<HomeImg1 />
			</div>

			<div className="w-1/4 flex flex-col gap-3">
				<span className="title text-[var(--primary-green)]">
					SKIN AND BEAUTY CENTER
				</span>
				<span className="subtitle">in Bahia Blanca</span>
				<p className="text">Lorem ipsum dolor sit amet consectetur.</p>
				<button className="cta-button text mt-4 py-4 px-8">
					Reserva tu turno
				</button>
			</div>

			<div className="absolute -bottom-[3dvh] -right-[5dvw] -z-10 bg-[var(--primary-pink)] rounded-tl-[45%] pt-12 2xl:right-[0dvw] 2xl:bottom-[8dvh]">
				<HomeImg2 />
			</div>
		</>
	)
}

const HomeImg1 = () => {
	return (
		<img
			src="./avatar-alba.png"
			alt=""
			className="w-[200px] h-[300px] 2xl:w-[250px] 2xl:h-[400px] 2xl:translate-x-24"
		/>
	)
}

const HomeImg2 = () => {
	return (
		<Image
			src="/alba-alpha.png"
			alt="Alba Alpha Logo"
			width={500}
			height={700}
			className="w-[400px] h-[500px] 2xl:w-[500px] 2xl:h-[700px]"
		/>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute top-0 right-[15%] size-[18rem] 2xl:size-[25rem] rotate-x-180 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute top-[43%] 2xl:top-[45%] left-[55%] size-[6rem] 2xl:size-[7rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute bottom-[5%] 2xl:bottom-[3%] right-[30%] size-[8rem] 2xl:size-[15rem] rotate-180 text-[var(--leaf-color)]" />
			<RoundLeaf className="absolute bottom-[28%] 2xl:bottom-[32%] -left-[5%] size-[10rem] 2xl:size-[15rem] rotate-180 text-[var(--leaf-color)] opacity-50" />
		</>
	)
}
