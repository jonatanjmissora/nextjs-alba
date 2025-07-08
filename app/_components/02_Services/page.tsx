import { BranchLeaf } from "@/public/leaf/branch-leaf"
import { Leaf1 } from "@/public/leaf/leaf1"
import Leaf2 from "@/public/leaf/leaf2"
import RoundLeaf from "@/public/leaf/round-leaf"
import { Heart, ShoppingCart } from "lucide-react"

const IMG_WITH = ["100px", "200px", "300px"]
const IMG_HEIGHT = ["200px", "400px", "500px"]

export default function page() {
	return (
		<div className="w-full my-20 2xl:my-30 py-10 2xl:py-15 relative">
			<LeafImgs />
			<SectionHeader
				title="Nuestros servicios en gabinete"
				subtitle="Servicios"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>

			<div className="w-full h-[80dvh] 2xl:h-[70dvh] flex justify-between">
				<ServicesCard />
			</div>
		</div>
	)
}

const SectionHeader = ({
	title,
	subtitle,
	description,
}: {
	title: string
	subtitle: string
	description: string
}) => {
	return (
		<div className="flex items-end gap-3 header-border pb-10 mb-20 mt-20 relative">
			<RoundLeaf className="absolute top-[0%] -right-[1%] size-[10rem] rotate-0 text-[var(--leaf-color)] opacity-50" />
			<div className="flex flex-col">
				<h3 className="w-full text text-[var(--primary-green)]">{subtitle}</h3>
				<h2 className="w-full title font-bold text-balance">{title}</h2>
			</div>
			<p className="2xl:text-xl text-balance">{description}</p>
		</div>
	)
}

const ServicesCard = () => {
	const services = [
		{
			id: 1,
			title: "Titulo del servicio",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			image: "./servicio1.jpg",
		},
		{
			id: 2,
			title: "Titulo del servicio",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			image: "./servicio2.jpg",
		},
		{
			id: 3,
			title: "Titulo del servicio",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			image: "./servicio3.jpg",
		},
		{
			id: 4,
			title: "Titulo del servicio",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			image: "./servicio4.jpg",
		},
	]

	return (
		<ul className="w-full flex justify-between items-start">
			{services.map(service => (
				<li
					key={service.id}
					className={`service-card flex flex-col gap-3 p-5 bg-[var(--background-two)] rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group`}
				>
					<div
						className={`relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tl-4xl rounded-br-4xl bg-500-green w-[${IMG_WITH[1]}] 2xl:w-[${IMG_WITH[2]}] h-[${IMG_HEIGHT[1]}] 2xl:h-[${IMG_HEIGHT[2]}]`}
					>
						<img
							src={service.image}
							alt=""
							className={`w-full h-full group-hover:scale-120 transition-all duration-800 object-cover`}
						/>
					</div>
					<div className="relative z-50 flex justify-between items-center my-2">
						<h3 className="font-semibold text-[var(--primary-green)] text-lg 2xl:text-xl">
							{service.title}
						</h3>
						<div className="flex gap-4">
							<Heart size={24} color="var(--primary-green)" className="icon" />
							<ShoppingCart
								size={24}
								color="var(--primary-green)"
								className="icon"
							/>
						</div>
					</div>
					{/* <div className="w-full"> */}
					{/* <div className="flex flex-col gap-2 w-full border"> */}
					<p
						className={`text-balance text-base 2xl:text-lg w-[${IMG_WITH[1]}] 2xl:w-[${IMG_WITH[2]}]`}
					>
						{service.description}
					</p>

					{/* <button className="cta-button px-4 m-3 ml-auto">+Leer</button> */}
					{/* </div> */}
					{/* </div> */}
				</li>
			))}
		</ul>
	)
}

const LeafImgs = () => {
	return (
		<>
			<BranchLeaf className="absolute -bottom-32 -left-40 size-[25rem] rotate-90 text-[var(--leaf-color)] opacity-50" />
			<Leaf1 className="absolute bottom-[10%] left-[47%] size-[7rem] text-[var(--leaf-color)]" />
			<Leaf2 className="absolute -bottom-[5%] -right-[5%] size-[15rem] text-[var(--leaf-color)]" />
		</>
	)
}
