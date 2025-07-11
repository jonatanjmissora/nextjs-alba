"use client"

import { Service } from "@/app/_lib/services";
import { Heart, MoveRight, ShoppingCart } from "lucide-react";

const IMG_WIDTH = ["100px", "120px", "250px"]
const IMG_HEIGHT = ["200px", "300px", "500px"]

export default function ServiceCard({service}: {service: Service}) {

    const handleService = () => {
		console.log("handleService")
	}

	return (
    <li
            key={service.id}
            className={`service-card relative z-50 flex flex-col gap-3 p-5 bg-[var(--background-two)] rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group`}
        >
            <div
                className={`relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tl-4xl rounded-br-4xl w-[180px] 2xl:w-[250px] h-[300px] 2xl:h-[500px]`}
            >
                <img
                    src={service.image}
                    alt=""
                    className={`w-full h-full group-hover:scale-120 transition-all duration-800 object-cover`}
                />
            </div>
            <h3 className="header text-[var(--primary-green)] my-">
                {service.title}
            </h3>
            <div className="">
                <div className="flex flex-col gap-2">
                    <p
                        className={`w-[180px] 2xl:w-[250px] text text-balnce`}
                    >
                        {service.subtitle}
                    </p>

                    <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                            <Heart
                                size={24}
                                color="var(--primary-green)"
                                className="icon"
                            />
                            <ShoppingCart
                                size={24}
                                color="var(--primary-green)"
                                className="icon"
                            />
                        </div>

                        <button onClick={handleService} className="mr-4 cursor-pointer">
                            <MoveRight size={30} color="var(--primary-green)" className="icon"/>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}
