import MovilTestimonials from "../layout/movil/movil-about-testimonials"
import { MovilSectionHeader } from "../layout/movil/movil-section-header"
import Certificates from "./certificates"

export default function MovilAbout() {
	return (
		<>
			<div className="absolute -z-10 -top-[15dvh] left-0 w-full h-[25dvh] bg-[var(--primary-pink)]"></div>
			<div
				id="about"
				className="w-full relative px-6 bg-[var(--primary-pink)] pt-12"
			>
				<MovilSectionHeader
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
