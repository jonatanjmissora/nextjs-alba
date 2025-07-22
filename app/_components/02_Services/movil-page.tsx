import { MovilServicesCard } from "../layout/movil/movil-service-card"
import { MovilSectionHeader } from "../layout/movil/movil-section-header"

export default function MovilServices() {
	return (
		<>
			<div className="absolute -z-10 -top-[21dvh] left-0 w-full h-[15dvh] bg-[var(--primary-pink)]"></div>
			<section id="services" className="w-full relative px-6 pt-12">
				<MovilSectionHeader
					title="Nuestros servicios en gabinete"
					subtitle="Servicios"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>

				<MovilServicesCard />

				<div className="w-full border-t-2 border-[var(--secondary-green)] text-right mt-12">
					<button className="header text-[var(--primary-green)] py-2 cursor-pointer icon">
						ver mas +
					</button>
				</div>
			</section>
			<div className="absolute -z-10 -bottom-[21dvh] left-0 w-full h-[15dvh] bg-[var(--primary-pink)]"></div>
		</>
	)
}
