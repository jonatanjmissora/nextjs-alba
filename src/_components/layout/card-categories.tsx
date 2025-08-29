"use client"

import { ServicesCategory } from "@/_lib/services"
import Image from "next/image"
import Link from "next/link"

export default function Card({
	type,
	element,
	from,
}: {
	type: "shop" | "service" | "favorites" | "cart"
	element: ServicesCategory
	from: "shop" | "services" | "favorites" | "cart"
}) {

	const pinnedCategories = element.subCategories.filter(subCategory => subCategory.pinned)

	return (
		<li
			key={element.id}
			className={`w-full sm:w-[220px] 2xl:w-[295px] flex flex-col gap-5 p-4 2xl:p-6 ${type === "shop" ? "bg-[var(--primary-pink)]" : "bg-[var(--background-one)]"} rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group border border-[#d685922a]`}
		>
			<div className="relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tr-4xl rounded-bl-4xl w-full h-[280px] 2xl:h-[480px]">
				<Image
					src={element.image}
					alt={element.title}
					quality={100}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{
						objectFit: "cover",
					}}
					className={`group-hover:scale-120 transition-all duration-800`}
				/>
			</div>

			<h3 className="font-semibold text-[var(--primary-green)] text-2xl sm:text-xl pt-2">
				{element.title}
			</h3>
			<div className="flex flex-col gap-2 px-4">
				<ul className="flex flex-col gap-2">
					{pinnedCategories.map(subCategory => (
						<li key={subCategory.id} className="list-disc list-inside">
							<Link
								href={`/${type}s/${element.id}/?scrollTo=${subCategory.id}&from=${from}`}
								className="text w-[180px] 2xl:w-[250px] cursor-pointer hover:text-[var(--primary-green)] hover:underline"
							>
								{subCategory.title}
							</Link>
						</li>
					))}
				</ul>
				<Link
					href={`/${type}/${setLink(element)}?from=${from}`}
					className="mr-2 ml-auto cursor-pointer mt-2"
				>
					<span className="text-[var(--primary-green)] hover:font-semibold">
						ver mas +
					</span>
				</Link>
			</div>
		</li>
	)
}

function setLink(element: ServicesCategory) {
	let prefix = ""
	if (element.title.includes("corporal")) prefix = "tratamientos-corporales"
	if (element.title.includes("facial")) prefix = "tratamientos-faciales"
	if (element.title.includes("depilacion")) prefix = "depilacion"

	return prefix
}
