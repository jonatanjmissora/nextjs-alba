import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import { SectionHeader } from "../section-header"

export default function page() {
	return (
		<div className="w-full my-20 2xl:my-30 py-10 2xl:py-15 relative">
			<LeafImgs />
			<SectionHeader
				title="Nuestros tips del centro de belleza"
				subtitle="Tips"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>
			<div className="w-full flex justify-between items-center pb-32">
				<div className="w-1/2 border">
					<div className="flex flex-col gap-3">
						<h3 className="w-full text-xl 2xl:text-2xl font-semibold text-[var(--primary-green)]">
							Tips
						</h3>
						<h2 className="w-full text-3xl 2xl:text-5xl font-bold text-balance">
							Nuestros tips del centro de belleza
						</h2>
					</div>
				</div>
				<div className="w-1/2 border">
					<div className="flex flex-col gap-3">
						<h3 className="w-full text-xl 2xl:text-2xl font-semibold text-[var(--primary-green)]">
							Tips
						</h3>
						<h2 className="w-full text-3xl 2xl:text-5xl font-bold text-balance">
							Nuestros tips del centro de belleza
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[5%] -left-40 size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute bottom-[20%] left-[47%] size-[7rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute bottom-[0%] -right-[5%] size-[15rem] text-[var(--leaf-color)]" />
		</>
	)
}
