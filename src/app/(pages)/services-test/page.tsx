import { servicesTree } from "@/_lib/services-mock"
import { ServicesTreeType } from "@/_lib/types"
import { Dot } from "lucide-react"
import Image from "next/image"

export default function ServicesTest() {
	return (
		<div className="flex flex-col w-full px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] my-20">
			<div className="flex flex-wrap gap-6 w-full">
				{servicesTree.map((category: ServicesTreeType) => (
					<CategoryCard key={category.title} category={category} />
				))}
			</div>
		</div>
	)
}

const CategoryCard = ({ category }: { category: ServicesTreeType }) => {
	const dummyIndex = 3 - category.services.length

	return (
		<div className="min-w-[30%] flex-1 flex flex-wrap justify-start items-start bg-pink-100 shadow-[3px_3px_5px_0px_rgba(0,0,0,0.25)] border border-[#444]/20 rounded-lg overflow-hidden relative">
			<div className="w-[100%] max-w-[37dvw] h-[300px] bg-slate-300 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25)] relative">
				<Image
					src={category.services[0].images.split("*")[0]}
					alt={category.title}
					priority
					fill
					className="object-cover"
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
					<span className="text-[#444]/70 cursor-pointer text-xs w-full text-right absolute bottom-3 right-3">
						leer mas +
					</span>
				</div>
			</div>
		</div>
	)
}
