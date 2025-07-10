import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import { SectionHeader } from "../section-header"
import Testimonials from "./testimonials"
import Certificates from "./certificates"

export default function About() {
	return (
		<div id="about" className="w-full relative">
			<LeafImgs />
			<SectionHeader
				title="Mi historia"
				subtitle="Acerca de"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>

			<Certificates />
			<Testimonials />
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[5%] 2xl:-bottom-[20%] 2xl:-left-[18%] -left-40 size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute bottom-[10%] 2xl:-bottom-[0%] left-[47%] size-[7rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[10%] 2xl:-bottom-[15%] -right-[5%] size-[15rem] text-[var(--leaf-color)]" />
		</>
	)
}
