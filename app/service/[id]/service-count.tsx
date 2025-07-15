"use client"

import { Service } from "@/app/_lib/services"
import { MinusCircle, PlusCircle, ShoppingCart } from "lucide-react"
import { useState } from "react"

export const ServiceCountAndCart = ({service}: {service: Service}) => {
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
            <p className="subtitle font-semibold">${(Number(service.price) * count).toFixed(2)}</p>
            <div className="flex items-center gap-4">
                <div className="flex gap-4">
                    <button onClick={handleMinus}><MinusCircle size={30} color="var(--primary-green)" className="icon"/></button>
                    <span className="header">{count}</span>
                    <button onClick={handlePlus}><PlusCircle size={30} color="var(--primary-green)" className="icon"/></button>
                </div>
                <button className="ml-12 cta-button flex items-center gap-4 py-2 px-6">
                <ShoppingCart
                    size={30}
                    className="icon"
                    />
                <span>Agregar {(count > 1) ? `(x${count})` : "al carrito"}</span>
                </button>
            </div>
        </>
	)
}