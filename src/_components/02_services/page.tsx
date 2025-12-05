import { servicesHeader } from "@/_lib/constant"
import { SectionHeader } from "../section-header"
import { servicesTree } from "@/_lib/services-mock"
import { ElementsTreeType } from "@/_lib/types"
import { Card } from "../elements/card"
import { LeafImgs } from "../leaf-section"
import { Image as ImageKit } from "@imagekit/next"

export default function ServicesSection() {
	return (
		<section className="w-full bg-(--background-two) relative z-0 sm:pt-10 2xl:pt-20 sm:pb-100 2xl:pb-150 sm:px-(--sm-layout-padding) 2xl:px-(--2xl-layout-padding)">
			<article
				id="services01"
				className="w-full my-32 border border-transparent"
			>
				<SectionHeader
					title="Nuestros servicios en gabinete"
					description={servicesHeader}
				/>
				<ServiceCategoriesComponent />
			</article>
			<LeafImgs />
			<BgImage />
		</section>
	)
}

const ServiceCategoriesComponent = () => {
	return (
		<div className="flex flex-wrap sm:gap-8 2xl:gap-12 w-full">
			{servicesTree.map((category: ElementsTreeType) => (
				<Card key={category.title} type="services" category={category} />
			))}
		</div>
	)
}

const BgImage = () => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"

	return (
		<div className="absolute -bottom-24 right-0 z-1">
			<div className="w-[70dvw] h-[50dvh] relative">
				<ImageKit
					urlEndpoint={`${urlEndp}`}
					src="/Layout/services-bg.webp"
					priority={false}
					alt={"/Layout/services-bg.webp"}
					fill
					loading="lazy"
					className={`object-cover opacity-75`}
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 60vw, 100vw"
				/>
			</div>
		</div>
	)
}
