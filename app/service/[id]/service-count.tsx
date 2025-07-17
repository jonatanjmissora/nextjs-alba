"use client"

import { Service } from "@/app/_lib/services"
import {
	CircleDollarSign,
	MinusCircle,
	PlusCircle,
	ShoppingCart,
} from "lucide-react"
import { useState } from "react"

export const ServiceCountAndCart = ({ service }: { service: Service }) => {
	const [count, setCount] = useState<number>(1)

	const handlePlus = () => {
		setCount(count + 1)
	}

	const handleMinus = () => {
		if (count > 1) {
			setCount(count - 1)
		}
	}

	return (
		<>
			<div className="flex justify-between items-center">
				<p className="subtitle font-semibold">
					${(Number(service.price) * count).toFixed(2)}
				</p>
				<div className="flex gap-4">
					<button onClick={handleMinus} type="button">
						<MinusCircle
							color="var(--primary-green)"
							className="size-6 2xl:size-8 icon cursor-pointer"
						/>
					</button>
					<span className="header">{count}</span>
					<button onClick={handlePlus} type="button">
						<PlusCircle
							color="var(--primary-green)"
							className="size-6 2xl:size-8 icon cursor-pointer"
						/>
					</button>
				</div>
			</div>

			<div className="flex gap-4">
				<button className="cta-button flex justify-center items-center gap-4 py-2 px-6 w-1/2">
					<ShoppingCart className="size-4 2xl:size-8 icon cursor-pointer" />
					<span className="text 2xl:text-normal">Agregar {count > 1 ? `(x${count})` : ""}</span>
				</button>

				<button className="cta-button-inv flex justify-center items-center gap-4 py-2 px-6 w-1/2">
					<CircleDollarSign className="size-4 2xl:size-8 icon cursor-pointer" />
					<span className="text 2xl:text-normal">Comprar {count > 1 ? `(x${count})` : ""}</span>
				</button>
			</div>
		</>
	)
}
