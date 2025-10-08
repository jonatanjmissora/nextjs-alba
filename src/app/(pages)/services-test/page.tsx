import { servicesTree } from "@/_lib/services-mock"
import { ServicesTreeType } from "@/_lib/types"
import { Dot } from "lucide-react"

export default function ServicesTest() {
	return (
		<div className="flex flex-col items-center justify-center w-screen p-12">
			<div className="grid grid-cols-2 gap-4">
				{servicesTree.map((category: ServicesTreeType) => (
					<CategoryCard key={category.title} category={category} />
				))}
			</div>
		</div>
	)
}

const CategoryCard = ({ category }: { category: ServicesTreeType }) => {
	return (
		<div className="flex flex-col items-center justify-start w-full bg-pink-100 p-4 shadow-[3px_3px_5px_0px_rgba(0,0,0,0.25)] border border-[#444]/20 rounded-lg">
			<div className="size-[400px] rounded-lg border border-[#444]/20 bg-slate-300 shadow-[3px_3px_5px_0px_rgba(0,0,0,0.25)]"></div>
			<h2 className="tracking-wider font-semibold text-lg p-2 w-full text-left">
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
				<span className="text-[#444]/70 cursor-pointer text-xs w-full text-right">
					leer mas +
				</span>
			</div>
		</div>
	)
}
