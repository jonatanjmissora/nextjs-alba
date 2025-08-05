import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import { SectionHeader } from "../section-header"
import Testimonials from "./testimonials"
import Certificates from "./certificates"

export default function About() {
	return (
		<div id="about" className="w-full my-32 relative border border-transparent">
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
			<BranchLeaf className="absolute -bottom-[35%] 2xl:-bottom-[25%] 2xl:-left-[18%] -left-40 size-[20rem] 2xl:size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute -bottom-[15%] 2xl:-bottom-[7%] left-[47%] size-[4rem] 2xl:size-[6rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[30%] 2xl:-bottom-[20%] -right-[5%] size-[7rem] 2xl:size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
