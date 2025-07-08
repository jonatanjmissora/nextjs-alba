import { BranchLeaf } from "@/public/leaf/branch-leaf";
import { Leaf1 } from "@/public/leaf/leaf1";

export default function Home() {
	return (
		<>
			<LeafImgs />

			<div className="absolute top-0 left-0 -z-10 bg-[var(--primary-pink)] pt-24 pl-32 2xl:pr-40 pr-12 rounded-br-[45%] overflow-hidden">
				{/** biome-ignore lint/performance/noImgElement: <explanation> */}
				<img
					src="./avatar-alba.png"
					alt=""
					className="w-[200px] h-[300px] 2xl:w-[300px] 2xl:h-[500px] 2xl:translate-x-8"
				/>
			</div>

			<div className="w-1/4 flex flex-col gap-3">
				<span className="text-4xl 2xl:text-6xl font-medium text-[var(--primary-green)]">
					SKIN AND BEAUTY
				</span>
				<span className="text-4xl 2xl:text-6xl font-medium text-[var(--primary-green)]">
					CENTER
				</span>
				<span className="text-2xl 2xl:text-xl mt-4">in Bahia Blanca</span>
				<p className="2xl:text-xl">Lorem ipsum dolor sit amet consectetur.</p>
				<button className="cta-button 2xl:text-xl mt-4 py-4 px-8">
					Reserva tu turno
				</button>
			</div>

			<div className="absolute bottom-[5dvh] -right-[5dvw] -z-10 bg-[var(--primary-pink)] rounded-tl-[45%] pt-12 2xl:right-[0dvw]">
				<img
					src="./alba-alpha.png"
					alt=""
					className="w-[400px] h-[500px] 2xl:w-[600px] 2xl:h-[800px]"
				/>
			</div>
		</>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute top-0 right-[15%] size-[20rem] 2xl:size-[30rem] rotate-x-180 text-[var(--leaf-color)]" />
			<Leaf1 className="absolute z-50 2xl:top-[50%] 2xl:left-[50%] left-[53%] bottom-[50%] size-[5rem] 2xl:size-[10rem] rotate-180" />
			<LeafImg src="./leaf/round-leaf.svg" alt="" className="absolute bottom-[28%] -left-[5%] size-[12rem] 2xl:size-[18rem] rotate-180" />
			{/* <LeafImg src="./leaf/leaf1.svg" alt="" className="absolute 2xl:top-[50%] 2xl:left-[50%] left-[53%] bottom-[50%] size-[5rem] 2xl:size-[10rem] rotate-180" /> */}
			<LeafImg src="./leaf/leaf2.svg" alt="" className="absolute bottom-[0%] right-[30%] size-[10rem] 2xl:size-[15rem] rotate-180" />
		</>
	)
}

const LeafImg = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
	return (
		<img
			src={src}
			alt={alt}
			className={`absolute ${className}`}
		/>
	)
}

