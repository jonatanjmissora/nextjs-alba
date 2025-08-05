export type Service = {
	id: string
	title: string
	subtitle: string
	description: string
	image: string
	carousel: string[]
	price: number
}

export const servicesData: Service[] = [
	{
		id: "service-titulo-del-servicio-1",
		title: "Titulo del servicio",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "/servicio1.jpg",
		carousel: [
			"/servicio1.jpg",
			"/servicio2.jpg",
			"/servicio3.jpg",
			"/servicio4.jpg",
		],
		price: 100.99,
	},
	{
		id: "service-titulo-del-servicio-2",
		title: "Titulo del servicio",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "/servicio2.jpg",
		carousel: [
			"/servicio1.jpg",
			"/servicio2.jpg",
			"/servicio3.jpg",
			"/servicio4.jpg",
		],
		price: 100.99,
	},
	{
		id: "service-titulo-del-servicio-3",
		title: "Titulo del servicio",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "/servicio3.jpg",
		carousel: [
			"/servicio1.jpg",
			"/servicio2.jpg",
			"/servicio3.jpg",
			"/servicio4.jpg",
		],
		price: 100.99,
	},
	{
		id: "service-titulo-del-servicio-4",
		title: "Titulo del servicio",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		image: "/servicio4.jpg",
		carousel: [
			"/servicio1.jpg",
			"/servicio2.jpg",
			"/servicio3.jpg",
			"/servicio4.jpg",
		],
		price: 100.99,
	},
]
