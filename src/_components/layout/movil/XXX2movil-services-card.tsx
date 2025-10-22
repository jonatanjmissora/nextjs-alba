import { ElementsTreeType } from "@/_lib/types"
import { servicesTree } from "@/_lib/services-mock"
import { setUrlCategoryName } from "@/_lib/utils"
import Link from "next/link"
import Image from "next/image"

export const XXX2MovilServicesCard = () => {
	const services = servicesTree

	return (
		<>
			<div className="w-full h-4 bg-[var(--primary-green)] my-30"></div>
			<div className="w-full flex justify-between">
				<ul className="w-full flex justify-start items-start flex-wrap">
					{services.map((category: ElementsTreeType) => (
						<MovilSectionCard key={category.title} category={category} />
					))}
				</ul>
			</div>
		</>
	)
}

const MovilSectionCard = ({ category }: { category: ElementsTreeType }) => {
	const urlCategoryName = setUrlCategoryName(category.title)
	const customGap =
		category.elements.length > 2
			? "mb-34"
			: category.elements.length === 2
				? "mb-28"
				: "mb-22"

	return (
		<article className={`w-full relative ${customGap}`}>
			<Link
				href={`/services/${urlCategoryName}?from=services`}
				className={`w-3/4 flex items-center header font-semibold tracking-wider absolute top-[90%] right-0 z-10 rounded-lg shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25)] text-[var(--primary-green)] bg-[var(--background-two)] overflow-hidden border border-[#444]/50 p-3`}
			>
				<div className="w-full flex flex-col">
					<h2 className="w-full pb-1 text-right">{category.title}</h2>
					{category.elements.slice(0, 3).map(element => (
						<p
							key={element.id}
							className="w-full text-xs text-[#444] text-right py-1 whitespace-nowrap truncate"
						>
							{element.subtitle}
						</p>
					))}
				</div>
			</Link>
			<div className="w-3/4 h-[200px] bg-slate-300 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.5)] rounded-lg relative overflow-hidden">
				<Image
					src={category.elements[0].images.split("*")[0]}
					alt={category.title}
					priority
					fill
					className="object-cover hover:scale-110 duration-300"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
		</article>
	)
}
