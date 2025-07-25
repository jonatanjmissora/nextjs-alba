import Image from "next/image"
import { tipsData } from "@/app/_lib/tips"
import { SectionHeader } from "../section-header"
import BranchLeaf from "@/public/leaf/branch-leaf"
import Leaf2 from "@/public/leaf/leaf2"

export default function MovilFaqs() {
	const tips = tipsData

	return (
		<div id="faqs" className="w-full relative pt-12">
			<LeafImgs />
			<SectionHeader
				title="Nuestros tips del centro de belleza"
				subtitle="Tips"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>
			<div className="w-full flex flex-col gap-20 justify-between items-center pb-6">
				<div className="w-full flex flex-col gap-12">
					<div className="flex flex-col gap-3">
						<h3 className="w-full header font-semibold text-[var(--primary-green)]">
							{tips[0].title}
						</h3>
						<span className="w-full text text-balance">
							{tips[0].description}
						</span>
					</div>
					<div className="relative overflow-hidden w-full h-[80dvh] rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)]">
						<Image
							src={tips[0].img}
							alt={tips[0].title}
							quality={100}
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</div>
				<div className="w-full flex flex-col gap-12">
					<div className="flex flex-col gap-3">
						<h3 className="w-full header font-semibold text-[var(--primary-green)]">
							{tips[1].title}
						</h3>
						<span className="w-full text text-balance">
							{tips[1].description}
						</span>
					</div>
					<div className="relative overflow-hidden w-full h-[80dvh] rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)]">
						<Image
							src={tips[1].img}
							alt={tips[1].title}
							quality={100}
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</div>
			</div>
			<div className="w-full border-t-2 border-[var(--secondary-green)] text-right mt-8">
				<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
					leer mas +
				</button>
			</div>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[7.5%] -left-[10%] size-[15rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf2 className="absolute -bottom-[6%] right-[5%] size-[4rem] text-[var(--leaf-color)]" />
		</>
	)
}
