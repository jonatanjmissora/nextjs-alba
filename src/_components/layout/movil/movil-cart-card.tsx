import { ElementMockType } from "@/_lib/types"
import Image from "next/image"
import Link from "next/link"
import { formatPrice, setUrlCategoryName } from "@/_lib/utils"
import HeartIconContainer from "../heart-icon-container"
import { Trash2 } from "lucide-react"
import { AlertDialogComponent } from "../alert-dialog-component"
import { CartCount } from "@/_components/elements/cart-count"
import { useStore } from "@/_lib/store"

export const MovilCartCard = ({
	element,
	type,
	from,
}: {
	element: ElementMockType
	type: "services" | "shop"
	from: "favorites" | "cart"
}) => {
	const urlCategoryName = setUrlCategoryName(element.title)
	return (
		<article className="w-full relative flex mb-70">
			<DataCard
				element={element}
				urlCategoryName={urlCategoryName}
				type={type}
				from={from}
			/>
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
	type,
	from,
}: {
	element: ElementMockType
	urlCategoryName: string
	type: "services" | "shop"
	from: "favorites" | "cart"
}) => {
	const { cartStore } = useStore()
	const cartElementQuantity = cartStore.find(
		cart => cart.id === element.id.toString()
	)?.quantity

	return (
		<div
			className={`p-3 flex flex-col gap-2 items-center header font-semibold tracking-wider absolute top-[90%] z-10 rounded-lg shadow-[0px_3px_5px_0px_rgba(0,0,0,0.25)] text-[var(--primary-green)] bg-[var(--background-two)] left-[5%] right-0 overflow-hidden border border-[#444]/50`}
		>
			<div className="w-full flex justify-between items-center">
				<i className="scale-75 flex items-center">
					<HeartIconContainer id={element.id.toString()} />
				</i>
				<AlertDialogComponent element={element} from={from}>
					<i className="cursor-pointer w-max">
						<Trash2 className="size-5 text-[#444]/50" />
					</i>
				</AlertDialogComponent>
			</div>
			<div className="flex flex-col gap-0 w-full">
				<span className="text-xs font-semibold text-[#444]/50 tracking-wider">
					{element.title}
				</span>
				<h3 className="text-[var(--primary-green)] text-pretty font-semibold whitespace-nowrap truncate w-full">
					{element.subtitle}
				</h3>
			</div>

			<div className="w-full flex justify-between items-center">
				<span className="text-balance font-semibold text-[#444]">
					$ {formatPrice(Number(element.price * (cartElementQuantity ?? 1)))}
				</span>
				<CartCount element={element} />
				<Link
					href={`/${type}/${urlCategoryName}?from=${from}`}
					className="cursor-pointer text-xs text-[#444]/50"
				>
					<span className="border-b border-[#444]/50 py-[2px]">leer +</span>
				</Link>
			</div>
		</div>
	)
}
