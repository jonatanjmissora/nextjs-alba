import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import { SectionHeader } from "../section-header"
import Image from "next/image"
import { tipsData } from "@/_lib/tips"

export default function Tips() {
	const tips = tipsData

	return (
		<>
			<div className="w-full h-[20dvh] bg-transparent"></div>
			<div
				id="faqs"
				className="w-full my-32 relative border border-transparent"
			>
				<LeafImgs />
				<SectionHeader
					title="Nuestros tips del centro de belleza"
					subtitle="Tips"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>
				<div className="w-full flex justify-between items-center pb-6">
					<div className="w-1/2 p-12 pl-0 flex flex-col gap-20">
						<div className="flex flex-col gap-3 tip-border-up pl-8 pt-8">
							<h3 className="w-full header font-semibold text-[var(--primary-green)]">
								{tips[0].title}
							</h3>
							<span className="w-full text text-balance">
								{tips[0].description}
							</span>
						</div>
						<div className="relative overflow-hidden w-full h-[80dvh] 2xl:h-[70dvh] rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)]">
							<Image
								src={tips[0].img}
								alt={tips[0].title}
								quality={100}
								fill
								style={{
									objectFit: "cover",
								}}
							/>
						</div>
					</div>
					<div className="w-1/2 p-12 pr-0 flex flex-col gap-20">
						<div className="relative overflow-hidden w-full h-[80dvh] 2xl:h-[70dvh] rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)]">
							<Image
								src={tips[1].img}
								alt={tips[1].title}
								quality={100}
								fill
								style={{
									objectFit: "cover",
								}}
							/>
						</div>
						<div className="flex flex-col gap-3 tip-border-down pr-8 pb-8">
							<h3 className="w-full header font-semibold text-[var(--primary-green)]">
								{tips[1].title}
							</h3>
							<span className="w-full text text-balance">
								{tips[1].description}
							</span>
						</div>
					</div>
				</div>
				<div className="w-full border-t-2 border-[var(--secondary-green)] text-right">
					<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
						leer mas +
					</button>
				</div>
			</div>
			<div className="w-full h-[40dvh] 2xl:h-[20dvh] bg-transparent"></div>
		</>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -z-10 -bottom-[25%] 2xl:-bottom-[40%] -left-40 2xl:-left-[18%] size-[20rem] 2xl:size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute -z-10 -bottom-[10%] left-[47%] size-[4rem] 2xl:size-[6rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -z-10 -bottom-[20%] 2xl:-bottom-[30%] -right-[5%] size-[7rem] 2xl:size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
