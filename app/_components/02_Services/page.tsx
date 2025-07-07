import { Heart, ShoppingCart } from "lucide-react"

export default function page() {
	return (
		<div className="w-full my-20 2xl:my-30 py-10 2xl:py-15 relative">
			<LeafImgs />
			<div className="flex items-end gap-3 header-border pb-10 mb-20 mt-20 relative">
				<img
					src="./leaf/round-leaf.svg"
					alt=""
					className="absolute top-[0%] -right-[1%] size-[10rem] rotate-0"
				/>
				<div className="flex flex-col gap-3">
					<h3 className="w-full text-xl 2xl:text-2xl font-semibold text-[var(--primary-green)]">
						Servicios
					</h3>
					<h2 className="w-full text-3xl 2xl:text-5xl font-bold text-balance">
						Nuestros servicios en gabinete
					</h2>
				</div>
				<p className="2xl:text-xl text-balance">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
					amet consectetur adipisicing elit.
				</p>
			</div>

			<div className="w-full h-[80dvh] 2xl:h-[70dvh] flex justify-between">
				<ServicesCard />
			</div>
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
					className="service-card w-[300px] 2xl:w-[400px] flex flex-col gap-3 p-4 pb-2 2xl:p-6 2xl:pb-4 bg-[var(--background-two)] rounded-tl-4xl rounded-br-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group"
				>
					<div className="relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tl-4xl rounded-br-4xl">
						<img
							src={service.image}
							alt=""
							className="w-full h-[400px] 2xl:h-[550px] group-hover:scale-120 transition-all duration-800 object-cover"
						/>
					</div>
					<div className="flex justify-between items-center my-2">
						<h3 className="font-semibold text-[var(--primary-green)] 2xl:text-2xl">
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
					<div className="service-description">
						<div className="flex flex-col gap-2">
							<span className="text-balance text-base 2xl:text-lg w-full">
								{service.description}
							</span>

							<button className="cta-button px-4 m-3 ml-auto">+Leer</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}

const LeafImgs = () => {
	return (
		<>
			<img
				src="./leaf/branch-leaf.svg"
				alt=""
				className="absolute -bottom-32 -left-40 size-[25rem] rotate-90"
			/>

			<img
				src="./leaf/leaf1.svg"
				alt=""
				className="absolute bottom-[15%] left-[45%] size-[10rem]"
			/>

			<img
				src="./leaf/leaf2.svg"
				alt=""
				className="absolute bottom-[0%] right-[0%] size-[15rem]"
			/>
		</>
	)
}
