import { SectionHeader } from "../section-header"
import Testimonials from "./testimonials"
import Certificates from "./certificates"
import { aboutHeader } from "@/_lib/about"
import { LeafImgs } from "../leaf-section"

export default function About() {
	return (
		<section className="w-full bg-[var(--primary-pink)] relative pt-20 pb-80 px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)]">
			<article id="about01" className="w-full my-32 border border-transparent">
				<SectionHeader
					title="Mi historia"
					subtitle="Acerca de"
					description={aboutHeader}
				/>
				<Certificates />
				<Testimonials />
			</article>
			<LeafImgs />
		</section>
	)
}
