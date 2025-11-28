import { ElementsTreeType } from "@/_lib/types"
import Link from "next/link"
import { Image as ImageKit } from "@imagekit/next"

export const Card = ({
	type,
	category,
}: {
	type: string
	category: ElementsTreeType
}) => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	return (
		<div className="h-[310px] min-w-[calc(50%-24px)] flex-1 flex custom-shadow rounded-tl-xl rounded-br-xl overflow-hidden">
			<div className="h-full w-full flex flex-col">
				<div className="bg-(--background-one) h-[150px] flex justify-end items-center text-right header text-(--primary-green) leading-none font-normal px-8">
					{category.title}
				</div>
				<div className="text bg-(--background-green) h-full p-8 flex flex-col gap-6 justify-between items-end">
					<p className="w-full text-right text-[16px] leading-relaxed">
						{category.description}
					</p>
					<Link
						href={`/${type}/${category.id.toString()}?from=${type}`}
						className="cta-button text-center py-2 px-4 text-xs w-max"
					>
						seguir leyendo
					</Link>
				</div>
			</div>

			<div className="h-full w-full relative">
				<ImageKit
					urlEndpoint={`${urlEndp}`}
					src={category.image}
					priority={false}
					alt={category.image}
					fill
					loading="eager"
					className={`object-cover`}
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 40vw, 50vw"
				/>
			</div>
		</div>
	)
}
