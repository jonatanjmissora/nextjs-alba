export default function page() {
	return (
		<div className="w-full border">
			<h2 className="w-full text-center text-2xl 2xl:text-4xl font-semibold py-16 2xl:py-30">
				Nuestros Servicios en el Centro de Belleza
			</h2>

			<div className="w-full h-[90dvh] flex justify-between pb-32">
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
			description: [
				"descripcion 1",
				"descripcion 2",
				"descripcion 3",
				"descripcion 4",
				"descripcion 5",
			],
			image: "./servicio1.jpg",
		},
		{
			id: 2,
			title: "Titulo del servicio",
			description: [
				"descripcion 1",
				"descripcion 2",
				"descripcion 3",
				"descripcion 4",
				"descripcion 5",
			],
			image: "./servicio2.jpg",
		},
		{
			id: 3,
			title: "Titulo del servicio",
			description: [
				"descripcion 1",
				"descripcion 2",
				"descripcion 3",
				"descripcion 4",
				"descripcion 5",
			],
			image: "./servicio3.jpg",
		},
		{
			id: 4,
			title: "Titulo del servicio",
			description: [
				"descripcion 1",
				"descripcion 2",
				"descripcion 3",
				"descripcion 4",
				"descripcion 5",
			],
			image: "./servicio4.jpg",
		},
	]

	return (
		<ul className="w-full flex justify-between items-start">
			{services.map(service => (
				<li
					key={service.id}
					className="service-card flex flex-col gap-3 p-4 pb-2 2xl:p-6 2xl:pb-4 bg-[var(--background-two)] rounded-tl-4xl rounded-br-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] group"
				>
					<div className="relative shadow-[5px_5px_5px_0_rgba(0,0,0,0.25)] overflow-hidden rounded-tl-4xl rounded-br-4xl">
						<img
							src={service.image}
							alt=""
							className="w-[200px] h-[300px] 2xl:w-[300px] 2xl:h-[500px] group-hover:scale-120 transition-all duration-800 object-cover"
						/>
					</div>
					<h3 className="font-semibold text-[var(--primary-green)] 2xl:text-2xl pt-2">
						{service.title}
					</h3>
					<div className="service-description">
						<div>
							<ul className="pb-4">
								{service.description.map((item, index) => (
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
