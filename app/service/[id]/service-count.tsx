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
							size={30}
							color="var(--primary-green)"
							className="icon cursor-pointer"
						/>
					</button>
					<span className="header">{count}</span>
					<button onClick={handlePlus} type="button">
						<PlusCircle
							size={30}
							color="var(--primary-green)"
							className="icon cursor-pointer"
						/>
					</button>
				</div>
			</div>

			<div className="flex gap-4">
				<button className="cta-button flex justify-center items-center gap-4 py-2 px-6 w-1/2">
					<ShoppingCart size={30} className="icon cursor-pointer" />
					<span>Agregar {count > 1 ? `(x${count})` : ""}</span>
				</button>

				<button className="cta-button-inv flex justify-center items-center gap-4 py-2 px-6 w-1/2">
					<CircleDollarSign size={30} className="icon cursor-pointer" />
					<span>Comprar {count > 1 ? `(x${count})` : ""}</span>
				</button>
			</div>
		</>
	)
}
