import { servicesHeader } from "@/_lib/services"
import { SectionHeader } from "../section-header"
import BranchLeaf from "../../../public/leaf/branch-leaf"
import Leaf1 from "../../../public/leaf/leaf1"
import Leaf2 from "../../../public/leaf/leaf2"
import { servicesTree } from "@/_lib/services-mock"
import { ServicesTreeType } from "@/_lib/types"
import Image from "next/image"
import { Dot } from "lucide-react"
import Link from "next/link"
import { setUrlCategoryName } from "@/_lib/utils"

export default function ServicesSection() {
	return (
		<section
			id="services"
			className="w-full my-32 relative border border-transparent"
		>
			<LeafImgs />

			<SectionHeader
				title="Nuestros servicios en gabinete"
				subtitle="Servicios"
				description={servicesHeader}
			/>

			<ServiceCategoriesComponent />
		</section>
	)
}

const ServiceCategoriesComponent = () => {
	return (
		<div className="flex flex-wrap gap-6 w-full">
			{servicesTree.map((category: ServicesTreeType) => (
				<CategoryCard key={category.title} category={category} />
			))}
		</div>
	)
}

const CategoryCard = ({ category }: { category: ServicesTreeType }) => {
	const dummyIndex = 3 - category.services.length
	const urlCategoryName = setUrlCategoryName(category.title)

	return (
		<div className="min-w-[30%] flex-1 flex flex-wrap justify-start items-start bg-pink-100 shadow-[3px_3px_5px_0px_rgba(0,0,0,0.25)] border border-[#444]/20 rounded-lg overflow-hidden relative">
			<div className="w-[100%] max-w-[37dvw] h-[300px] bg-slate-300 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25)] relative overflow-hidden">
				<Image
					src={category.services[0].images.split("*")[0]}
					alt={category.title}
					priority
					fill
					className="object-cover hover:scale-110 duration-300"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex flex-col justify-between gap-2 p-3 pt-5 w-full flex-1">
				<h2 className="tracking-wider font-semibold text-lg w-full text-left">
					{category.title}
				</h2>
				<div className="flex flex-col justify-between flex-1 gap-2 p-2 w-full">
					{category.services.map(service => (
						<div key={service.id} className="flex items-center gap-1">
							<span>
								<Dot size={26} />
							</span>
							<span className="w-full text-left">{service.subtitle}</span>
						</div>
					))}
					{Array.from({ length: dummyIndex }, (_, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <no puedo hacerlo de otra forma>
						<div key={index} className="w-full text-transparent">
							.
						</div>
					))}
					<Link
						href={`/services/${urlCategoryName}`}
						className="text-[#444]/70 cursor-pointer text-xs w-full text-right absolute bottom-3 right-3"
					>
						leer mas +
					</Link>
				</div>
			</div>
		</div>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-[35%] 2xl:-bottom-[30%] 2xl:-left-[18%] -left-[18%] size-[20rem] 2xl:size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-[var(--opacity-leaf)]" />
			<Leaf1 className="absolute -bottom-[10%] 2xl:-bottom-[5%] left-[47%] size-[5rem] 2xl:size-[6rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[25%] 2xl:-bottom-[20%] 2xl:-right-[10%] -right-[5%] size-[7rem] 2xl:size-[10rem] text-[var(--leaf-color)]" />
		</>
	)
}
