import MovilTestimonials from "../layout/movil/movil-about-testimonials"
import { SectionHeader } from "../section-header"
import Certificates from "./certificates"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf2 from "../../../public/leaf/leaf2"

export default function MovilAbout() {
	return (
		<>
			<LeafImgs />
			<div className="absolute -z-10 -top-[15dvh] left-0 w-full h-[25dvh] bg-[var(--primary-pink)]"></div>
			<div
				id="about"
				className="w-full relative px-6 bg-[var(--primary-pink)] pt-12"
			>
				<SectionHeader
					title="Mi historia"
					subtitle="Acerca de"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>

				<Certificates />
				<MovilTestimonials />
			</div>
			<div className="absolute -z-10 -bottom-[15dvh] left-0 w-full h-[20dvh] bg-[var(--primary-pink)]"></div>
		</>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[9%] -left-[5%] size-[15rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf2 className="absolute -bottom-[8%] right-[5%] size-[4rem] text-[var(--leaf-color)]" />
		</>
	)
}
