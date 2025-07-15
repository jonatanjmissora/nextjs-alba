export type Service = {
	id: number
	title: string
	subtitle: string
	description: string
	image: string
	carousel: string[]
	price: string
}

export const servicesData: Service[] = [
	{
		id: 1,
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
		price: "100.99",
	},
	{
		id: 2,
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
		price: "100.99",
	},
	{
		id: 3,
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
		price: "100.99",
	},
	{
		id: 4,
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
		price: "100.99",
	},
]
