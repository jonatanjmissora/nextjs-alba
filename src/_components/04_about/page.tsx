import { SectionHeader } from "../section-header"
import Testimonials from "./testimonials"
import Certificates from "./certificates"
import { aboutHeader } from "@/_lib/about"

export default function About() {
	return (
		<div id="about01" className="w-full my-32 border border-transparent">
			<SectionHeader
				title="Mi historia"
				subtitle="Acerca de"
				description={aboutHeader}
			/>
			<Certificates />
			<Testimonials />
		</div>
	)
}
