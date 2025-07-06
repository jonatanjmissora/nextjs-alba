export default function page() {
	return (
		<div className="w-full">
			<h2 className="w-full text-center text-2xl 2xl:text-4xl font-semibold py-16 2xl:py-30">
				Nuestros Productos en el Centro de Belleza
			</h2>

			<div className="w-full h-[90dvh] flex justify-between pb-32">
				<ProductsCard />
			</div>
		</div>
	)
}

const ProductsCard = () => {
	const products = [
		{
			id: 1,
			title: "Titulo del producto",
			description: [
				"descripcion 1",
				"descripcion 2",
				"descripcion 3",
				"descripcion 4",
				"descripcion 5",
			],
			image: "./producto1.jpg",
		},
		{
			id: 2,
			title: "Titulo del producto",
			description: [
				"descripcion 1",
				"descripcion 2",
				"descripcion 3",
				"descripcion 4",
				"descripcion 5",
			],
			image: "./producto2.jpg",
		},
		{
			id: 3,
			title: "Titulo del producto",
			description: [
				"descripcion 1",
				"descripcion 2",
				"descripcion 3",
				"descripcion 4",
				"descripcion 5",
			],
			image: "./producto3.jpg",
		},
		{
			id: 4,
			title: "Titulo del producto",
			description: [
				"descripcion 1",
				"descripcion 2",
				"descripcion 3",
				"descripcion 4",
				"descripcion 5",
			],
			image: "./producto4.jpg",
		},
	]

	return (
		<ul className="w-full flex justify-between items-start">
			{products.map(product => (
				<li
					key={product.id}
					className="product-card flex flex-col gap-3 p-4 pb-2 2xl:p-6 2xl:pb-4 bg-[var(--primary-pink)] rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group"
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
					<div className="product-description">
						<div>
							<ul className="pb-4">
								{product.description.map((item, index) => (
									<div key={index} className="flex items-center gap-2 py-1">
										<span className="text-[var(--primary-green)]">•</span>
										<li className="text-base 2xl:text-lg">{item}</li>
									</div>
								))}
							</ul>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}

