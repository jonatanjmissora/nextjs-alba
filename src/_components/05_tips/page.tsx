import { SectionHeader } from "../section-header"
import Image from "next/image"
import { tipsMock } from "@/_lib/tips-mock"
import { LeafImgs } from "../leaf-section"

export default function Tips() {
	const tips = tipsMock

	return (
		<section className="w-full min-h-[280dvh] 2xl:min-h-[250dvh] px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] pt-20 pb-20 mb-[10dvh] relative">
			<div className="w-full h-[20dvh] bg-transparent"></div>
			<div id="tips01" className="w-full my-32 border border-transparent">
				<SectionHeader
					title="Nuestros tips del centro de belleza"
					subtitle="Tips"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>
				<div className="w-full flex justify-between items-center pb-6">
					<div id={tips[0].id} className="w-1/2 p-12 pl-0 flex flex-col gap-20">
						<div className="flex flex-col gap-3 tip-border-up pl-8 pt-8">
							<h3 className="w-full header font-semibold text-[var(--primary-green)]">
								{tips[0].title}
							</h3>
							<span className="w-full text text-balance">
								{tips[0].content}
							</span>
						</div>
						<div className="relative overflow-hidden w-full h-[80dvh] 2xl:h-[70dvh] rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)]">
							<Image
								src={tips[0].image}
								alt={tips[0].title}
								quality={100}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
					</div>

					<div id={tips[1].id} className="w-1/2 p-12 pr-0 flex flex-col gap-20">
						<div className="relative overflow-hidden w-full h-[80dvh] 2xl:h-[70dvh] rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)]">
							<Image
								src={tips[1].image}
								alt={tips[1].title}
								quality={100}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<div className="flex flex-col gap-3 tip-border-down pr-8 pb-8">
							<h3 className="w-full header font-semibold text-[var(--primary-green)]">
								{tips[1].title}
							</h3>
							<span className="w-full text text-balance">
								{tips[1].content}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-[40dvh] 2xl:h-[20dvh] bg-transparent"></div>
			<LeafImgs />
		</section>
	)
}
