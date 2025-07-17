"use client"

import { Service } from "@/app/_lib/services"
import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeartIconContainer from "../layout/heart-icon-container"
import CartIconContainer from "../layout/cart-icon-container"

export default function ServiceCard({ service }: { service: Service }) {
	return (
		<li
			key={service.id}
			className={`relative z-50 flex flex-col gap-5 p-5 bg-[var(--background-two)] rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group`}
		>
			<div
				className={`relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tl-4xl rounded-br-4xl w-[180px] 2xl:w-[250px] h-[300px] 2xl:h-[500px]`}
			>
				<Image
					src={service.image}
					alt={service.title}
					quality={100}
					layout="fill"
					objectFit="cover"
					className={`w-full h-full group-hover:scale-120 transition-all duration-800`}
				/>
			</div>
			<h3 className="header text-[var(--primary-green)] my-">
				{service.title}
			</h3>
			<div className="">
				<div className="flex flex-col gap-2">
					<p className={`w-[180px] 2xl:w-[250px] text text-balnce`}>
						{service.subtitle}
					</p>

					<div className="flex justify-between items-center mt-5">
						<div className="flex gap-4">
							<HeartIconContainer id={service.id} />
							<CartIconContainer id={service.id} />
						</div>

						<Link
							href={`/service/${service.id}`}
							className="mr-4 cursor-pointer"
						>
							<MoveRight
								size={30}
								color="var(--primary-green)"
								className="icon"
							/>
						</Link>
					</div>
				</div>
			</div>
		</li>
	)
}
