"use client"

import { Service } from "@/app/_lib/services"
import { useState } from "react"
import { Product } from "@/app/_lib/products"
import { MinusCircle, PlusCircle } from "lucide-react"

export const CartCount = ({
	element,
	total,
	setTotal,
}: {
	element: Service | Product
	total: number
	setTotal: (total: number) => void
}) => {
	const [count, setCount] = useState<number>(1)

	const handlePlus = () => {
		setCount(count + 1)
		setTotal(total + Number(element.price))
	}

	const handleMinus = () => {
		if (count > 1) {
			setCount(count - 1)
			setTotal(total - Number(element.price))
		}
	}

	return (
		<div className="flex justify-end gap-2 mr-2">
			<button onClick={handleMinus} type="button">
				<MinusCircle
					color="var(--primary-green)"
					className="size-4 2xl:size-6 icon cursor-pointer"
				/>
			</button>
			<span className="text">{count}</span>
			<button onClick={handlePlus} type="button">
				<PlusCircle
					color="var(--primary-green)"
					className="size-4 2xl:size-6 icon cursor-pointer"
				/>
			</button>
		</div>
	)
}
