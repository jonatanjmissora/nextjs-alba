import { ElementsTreeType } from "@/_lib/types"
import Image from "next/image"

export default function MovilElementCard({
	elements,
}: {
	elements: ElementsTreeType[]
}) {
	return (
		<div className="w-full flex justify-between">
			<ul className="w-full flex justify-start items-start flex-wrap gap-12">
				{elements.map((category: ElementsTreeType) => (
					<MovilSectionCard key={category.title} category={category} />
				))}
			</ul>
		</div>
	)
}

const MovilSectionCard = ({ category }: { category: ElementsTreeType }) => {
	return (
		<article className="w-full border border-black relative">
			<h2 className="text-[var(--primary-green)] header absolute bottom-0 right-0">
				{category.title}
			</h2>
			<div className="w-1/2 aspect-video bg-slate-300 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25)] relative overflow-hidden">
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
