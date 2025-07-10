"use client"

import { Product } from "@/app/_lib/products";
import { Heart, ShoppingCart, MoveRight } from "lucide-react";

const IMG_WIDTH = ["100px", "120px", "250px"]
const IMG_HEIGHT = ["200px", "300px", "500px"]

export default function ProductCard({ product }: { product: Product }) {

    const handleProduct = () => {
		console.log("handleProduct")
	}

  return (
    <li
            key={product.id}
            className="product-card flex flex-col gap-3 p-4 pb-6 2xl:p-6 2xl:pb-8 bg-[var(--primary-pink)] rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group"
        >
            <div className="relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tr-4xl rounded-bl-4xl">
                <img
                    src={product.image}
                    alt=""
                    className={`group-hover:scale-120 transition-all duration-800 object-cover w-[180px] 2xl:w-[${IMG_WIDTH[2]}] h-[${IMG_HEIGHT[1]}] 2xl:h-[${IMG_HEIGHT[2]}]`}
                />
            </div>
            <h3 className="font-semibold text-[var(--primary-green)] 2xl:text-2xl pt-2">
                {product.title}
            </h3>
            <div className="flex justify-between items-center">
                <span className="text-balance 2xl:text-xl font-bold text-black">
                    ${product.price}
                </span>

                <div className="flex gap-4">
                    <Heart size={20} color="var(--primary-green)" className="icon" />
                    <ShoppingCart
                        size={20}
                        color="var(--primary-green)"
                        className="icon"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 ">
                <span className="2xl:text-xl w-[180px] 2xl:w-[${IMG_WIDTH[2]}]">
                    {product.description}
                </span>
                <button onClick={handleProduct} className="mr-2 ml-auto cursor-pointer">
                    <MoveRight size={30} color="var(--primary-green)" className="icon"/>
                </button>
            </div>
            <div className="flex justify-between">
            </div>
        </li>
  )
}
