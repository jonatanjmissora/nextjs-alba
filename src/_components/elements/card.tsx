import { ElementsTreeType } from "@/_lib/types"
import { setUrlCategoryName } from "@/_lib/utils"
import Image from "next/image"
import Link from "next/link"

export const Card = ({
	type,
	category,
	children,
}: {
	type: "services" | "shop"
	category: ElementsTreeType
	children: React.ReactNode
}) => {
	const urlCategoryName = setUrlCategoryName(category.title)

	return (
		<div className="w-full flex-col sm:flex-row sm:min-w-[30%] sm:flex-1 flex sm:flex-wrap justify-start items-start bg-pink-100 shadow-[3px_3px_5px_0px_rgba(0,0,0,0.25)] border border-[#444]/20 rounded-lg overflow-hidden relative">
			<div className="w-full sm:max-w-[37dvw] h-[300px] bg-slate-300 shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25)] relative overflow-hidden">
				<Image
					src={category.elements[0].images.split("*")[0]}
					alt={category.title}
					priority
					fill
					className="object-cover hover:scale-110 duration-300"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex flex-col justify-between gap-2 p-3 pt-5 w-full flex-1">
				<h2 className="tracking-wider font-semibold text-lg w-full text-left text-[var(--primary-green)]">
					{category.title}
				</h2>
				<div className="flex flex-col justify-between flex-1 gap-2 p-2 w-full">
					{children}
					<Link
						href={`/${type}/${urlCategoryName}`}
						className="text-[#444]/70 cursor-pointer text-sm w-full text-right absolute bottom-3 right-3 hover:text-[var(--primary-green)] duration-300 hover:font-semibold"
					>
						leer mas +
					</Link>
				</div>
			</div>
		</div>
	)
}
