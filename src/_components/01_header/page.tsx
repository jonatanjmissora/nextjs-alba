import Image from "next/image"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import RoundLeaf from "../../../public/leaf/round-leaf"

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

			<div className="absolute right-[0dvw] bottom-[3dvh] 2xl:bottom-[5dvh] 2xl:right-[0dvw] -z-10 bg-[var(--primary-pink)] rounded-tl-[45%] pt-12">
				<HomeImg2 />
			</div>
		</>
	)
}

const HomeImg1 = () => {
	return (
		<div className="w-[200px] h-[300px] 2xl:w-[250px] 2xl:h-[400px] 2xl:translate-x-24 relative">
			<Image
				src="/avatar-alba.png"
				alt="Avatar Alba"
				quality={100}
				fill
				style={{ objectFit: "cover" }}
			/>
		</div>
	)
}

const HomeImg2 = () => {
	return (
		<div className="w-[350px] h-[450px] 2xl:w-[500px] 2xl:h-[700px] relative">
			<Image
				src="/alba-alpha.png"
				priority
				alt="Alba Alpha Logo"
				quality={100}
				fill
				style={{ objectFit: "cover" }}
			/>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute top-0 right-[19%] size-[16rem] 2xl:size-[20rem] rotate-x-180 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute top-[43%] 2xl:top-[45%] left-[55%] size-[4rem] 2xl:size-[5rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[0%] 2xl:bottom-[3%] right-[30%] size-[6rem] 2xl:size-[10rem] rotate-180 text-[var(--leaf-color)]" />
			<RoundLeaf className="absolute bottom-[22%] 2xl:bottom-[35%] -left-[2%] size-[9rem] 2xl:size-[14rem] rotate-180 text-[var(--leaf-color)] opacity-50" />
		</>
	)
}
