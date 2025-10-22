import { ElementsTreeType } from "@/_lib/types"
import { servicesTree } from "@/_lib/services-mock"
import Image from "next/image"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { setUrlCategoryName } from "@/_lib/utils"

export const MovilServicesCard = () => {
	const services = servicesTree

	return (
		<div className="w-full flex justify-between">
			<ul className="w-full flex justify-start items-start flex-wrap gap-20">
				{services.map((category: ElementsTreeType, index: number) => (
					<MovilSectionCard
						key={category.title}
						category={category}
						isEven={index % 2 === 0}
					/>
				))}
			</ul>
		</div>
	)
}

const MovilSectionCard = ({
	category,
	isEven,
}: {
	category: ElementsTreeType
	isEven: boolean
}) => {
	const urlCategoryName = setUrlCategoryName(category.title)

	return (
		<article className="w-full relative flex odd:justify-end">
			<Link
				href={`/services/${urlCategoryName}?from=services`}
				className={`h-13 flex items-center header font-semibold tracking-wider absolute -bottom-8 z-10 rounded-lg shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25)] text-[var(--primary-green)] bg-[var(--background-two)] ${isEven ? "left-0" : "right-0"} overflow-hidden border border-[#444]/50`}
			>
				<h2 className="py-3 px-6 pr-4">{category.title}</h2>
				<ChevronRightIcon className="w-7 h-full p-0 bg-[var(--primary-green)]/50 text-[var(--background-one)]" />
			</Link>
			<div className="w-3/4 aspect-video bg-slate-300 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.5)] rounded-lg relative overflow-hidden">
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
