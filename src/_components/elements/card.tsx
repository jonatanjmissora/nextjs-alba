import { ElementsTreeType } from "@/_lib/types"
import Link from "next/link"
import { Image as ImageKit } from "@imagekit/next"
import "./card.css"

export const Card = ({
	type,
	category,
}: {
	type: string
	category: ElementsTreeType
}) => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	return (
		<div className="flex-1 flex custom-shadow element-card group rounded-br-xl cardImageReveal">
			<div className="h-full w-full flex flex-col">
				<div className="bg-(--background-one) sm:min-h-[70px] 2xl:min-h-[100px] flex justify-end items-center text-right header-card text-(--primary-green) leading-none font-normal px-8 rounded-tl-xl">
					{category.title}
				</div>
				<div className="text bg-(--background-green) h-full p-8 flex flex-col justify-between items-end">
					<p className="w-full text-right leading-relaxed">
						{category.description}
					</p>
					<Link
						href={`/${type}/${category.id.toString()}?from=${type}`}
						className="seguir-btn cta-button"
					>
						seguir leyendo
					</Link>
				</div>
			</div>

			<div className="h-full w-full relative rounded-br-xl overflow-hidden">
				<ImageKit
					urlEndpoint={`${urlEndp}`}
					src={category.image}
					priority={false}
					alt={category.image}
					fill
					loading="eager"
					className={`object-cover group-hover:scale-120 transition-all duration-800`}
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 40vw, 50vw"
				/>
			</div>
		</div>
	)
}
