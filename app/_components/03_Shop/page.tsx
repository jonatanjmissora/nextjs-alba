import { BranchLeaf } from "@/public/leaf/branch-leaf"
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
						Productos
					</h3>
					<h2 className="w-full text-3xl 2xl:text-5xl font-bold text-balance">
						Nuestros productos en el centro de belleza
					</h2>
				</div>
				<p className="2xl:text-xl text-balance">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
					amet consectetur adipisicing elit.
				</p>
			</div>

			<div className="w-full h-[90dvh] 2xl:h-[75dvh] flex flex-col justify-between items-center mb-60">
				<ProductsCard />

				<div className="w-full border-t-3 border-[var(--primary-green)] text-right">
					<button className="text-xl font-semibold text-[var(--primary-green)] py-2 cursor-pointer">
						+ mas productos
					</button>
				</div>
			</div>
		</div>
	)
}

const ProductsCard = () => {
	const products = [
		{
			id: 1,
			title: "Titulo del producto",
			description: "Lorem ipsum dolor.",
			image: "./producto1.jpg",
			price: "100.99",
		},
		{
			id: 2,
			title: "Titulo del producto",
			description: "Lorem ipsum dolor.",
			image: "./producto2.jpg",
			price: "100.99",
		},
		{
			id: 3,
			title: "Titulo del producto",
			description: "Lorem ipsum dolor.",
			image: "./producto3.jpg",
			price: "100.99",
		},
		{
			id: 4,
			title: "Titulo del producto",
			description: "Lorem ipsum dolor.",
			image: "./producto4.jpg",
			price: "100.99",
		},
	]

	return (
		<ul className="w-full flex justify-between items-start">
			{products.map(product => (
				<li
					key={product.id}
					className="product-card flex flex-col gap-3 p-4 pb-6 2xl:p-6 2xl:pb-8 bg-[var(--primary-pink)] rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group"
				>
					<div className="relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tr-4xl rounded-bl-4xl">
						<img
							src={product.image}
							alt=""
							className="w-[200px] h-[300px] 2xl:w-[300px] 2xl:h-[500px] group-hover:scale-120 transition-all duration-800 object-cover"
						/>
					</div>
					<h3 className="font-semibold text-[var(--primary-green)] 2xl:text-2xl pt-2">
						{product.title}
					</h3>
					<div className="flex justify-between py-2 pb-4">
						<span className="text-balance 2xl:text-xl">
							{product.description}
						</span>
						<button className="cta-button px-4">+Leer</button>
					</div>
					<div className="flex justify-between">
						<p className="text-balance 2xl:text-xl font-bold text-black">
							${product.price}
						</p>
						<div className="flex gap-4">
							<Heart size={20} color="var(--primary-green)" className="icon" />
							<ShoppingCart
								size={20}
								color="var(--primary-green)"
								className="icon"
							/>
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
			<BranchLeaf className="absolute -bottom-32 -left-40 size-[25rem] rotate-90 text" />

			<img
				src="./leaf/leaf1.svg"
				alt=""
				className="absolute bottom-[10%] left-[45%] size-[10rem]"
			/>

			<img
				src="./leaf/leaf2.svg"
				alt=""
				className="absolute bottom-[0%] right-[0%] size-[15rem]"
			/>
		</>
	)
}
