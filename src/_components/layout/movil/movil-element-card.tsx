import { ElementsTreeType } from "@/_lib/types"
import { Card } from "@/_components/elements/card"
import { Dot } from "lucide-react"

export default function MovilElementCard({
	elements,
}: {
	elements: ElementsTreeType[]
}) {
	return (
		<div className="w-full flex justify-between">
			<ul className="w-full flex justify-start items-start flex-wrap gap-12">
				{elements.map((category: ElementsTreeType) => (
					<Card key={category.title} type="services" category={category}>
						{category.elements.slice(0, 3).map(element => (
							<div key={element.id} className="flex items-center gap-1">
								<span>
									<Dot size={26} />
								</span>
								<span className="w-full text-left text-base">
									{element.subtitle}
								</span>
							</div>
						))}
						{Array.from(
							{ length: 3 - category.elements.length },
							(_, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <no puedo hacerlo de otra forma>
								<div key={index} className="w-full text-transparent">
									.
								</div>
							)
						)}
					</Card>
				))}
			</ul>
		</div>
	)
}
