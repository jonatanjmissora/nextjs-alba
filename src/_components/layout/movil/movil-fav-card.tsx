import { ElementMockType } from "@/_lib/types"
import Image from "next/image"
import Link from "next/link"
import { formatPrice, setUrlCategoryName } from "@/_lib/utils"
import CartIconContainer from "../cart-icon-container"
import { Trash2 } from "lucide-react"
import { AlertDialogComponent } from "../alert-dialog-component"

export const MovilFavCard = ({ element }: { element: ElementMockType }) => {
	const urlCategoryName = setUrlCategoryName(element.title)
	return (
		<article className="w-full relative flex mb-30">
			<DataCard element={element} urlCategoryName={urlCategoryName} />
			<div className="w-3/4 aspect-video bg-slate-300 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.5)] rounded-lg relative overflow-hidden">
				<Image
					src={element.images.split("*")[0]}
					alt={element.title}
					priority
					fill
					className="object-cover hover:scale-110 duration-300"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
		</article>
	)
}

const DataCard = ({
	element,
	urlCategoryName,
}: {
	element: ElementMockType
	urlCategoryName: string
}) => {
	return (
		<div
			className={`p-3 flex flex-col gap-2 items-center header font-semibold tracking-wider absolute top-[90%] z-10 rounded-lg shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25)] text-[var(--primary-green)] bg-[var(--background-two)] left-[5%] right-0 overflow-hidden border border-[#444]/50`}
		>
			<div className="w-full flex justify-between items-center">
				<i className="scale-75 flex items-center">
					<CartIconContainer id={element.id.toString()} />
				</i>
				<AlertDialogComponent element={element}>
					<i className="cursor-pointer w-max">
						<Trash2 className="size-5 text-[#444]/50" />
					</i>
				</AlertDialogComponent>
			</div>
			<h3 className="text-[var(--primary-green)] text-pretty font-semibold whitespace-nowrap truncate w-full">
				{element.subtitle}
			</h3>

			<div className="w-full flex justify-between items-center">
				<span className="text-balance text-xl sm:text-lg 2xl:text-xl font-bold text-black">
					$ {formatPrice(Number(element.price))}
				</span>
				<Link
					href={`/services/${urlCategoryName}?from=favorites`}
					className="cursor-pointer text-xs text-[#444]/50"
				>
					<span className="border-b border-[#444]/50 py-[2px]">leer +</span>
				</Link>
			</div>
		</div>
	)
}
