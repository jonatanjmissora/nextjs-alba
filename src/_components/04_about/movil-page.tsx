import MovilTestimonials from "../layout/movil/movil-about-testimonials"
import { SectionHeader } from "../section-header"
import Certificates from "./certificates"
import { aboutHeader } from "@/_lib/about"
import { MovilLeafImgs } from "../layout/movil/movil-leaf-imgs"

export default function MovilAbout() {
	return (
		<section className="w-full bg-[var(--primary-pink)] flex justify-center items-start relative pb-[300px]">
			<MovilLeafImgs />
			<div
				id="about"
				className="w-full relative px-6 bg-[var(--primary-pink)] pt-12"
			>
				<SectionHeader
					title="Mi historia"
					subtitle="Acerca de"
					description={aboutHeader}
				/>

				<Certificates />
				<MovilTestimonials />
			</div>
		</section>
	)
}
