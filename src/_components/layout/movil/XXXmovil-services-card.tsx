import { ElementsTreeType } from "@/_lib/types"
import { servicesTree } from "@/_lib/services-mock"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { ImageKit } from "@/_components/image-kit"

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
	return (
		<article className="w-full relative flex odd:justify-end">
			<Link
				href={`/services/${category.id}?from=services`}
				className={`h-13 flex items-center header font-semibold tracking-wider absolute -bottom-8 z-10 rounded-lg custom-shadow text-[var(--primary-green)] bg-[var(--background-two)] ${isEven ? "left-0" : "right-0"} overflow-hidden border border-[#444]/50`}
			>
				<h2 className="py-3 px-6 pr-4">{category.title}</h2>
				<ChevronRightIcon className="w-7 h-full p-0 bg-[var(--primary-green)]/50 text-[var(--background-one)]" />
			</Link>
			<div className="w-3/4 aspect-video bg-slate-300 custom-shadow rounded-lg relative overflow-hidden">
				<ImageKit
					imageID={category.elements[0].images.split("*")[0]}
					className="hover:scale-110 duration-300"
				/>
			</div>
		</article>
	)
}
