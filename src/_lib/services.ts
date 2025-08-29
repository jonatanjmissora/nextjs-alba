export type Service = {
	id: string
	title: string
	subtitle: string
	description: string
	image: string
	carousel: string[]
	price: number
}

export type ServiceCategory = {
	id: string
	title: string
	image: string
	subCategories: string[]
}

export const serviceHeader =
	"En mi gabinete cada sesión está pensada para vos, con cuidado, con respeto y con resultados reales. Acá te presento mis servicios."

export const serviceCategories: ServiceCategory[] = [
	{
		id: "01",
		title: "Tratamientos faciales",
		image: "/servicio1.jpg",
		subCategories: ["Higiene profunda", "Dermapen", "Glow up", "Hify facial"],
	},
	{
		id: "02",
		title: "Tratamientos corporales",
		image: "/servicio2.jpg",
		subCategories: [
			"Maderoterapia",
			"Liposonix reductivo",
			"Exfoliación corporal",
			"Hifu facial",
		],
	},
	{
		id: "03",
		title: "Depilación definitiva",
		image: "/servicio3.jpg",
		subCategories: [],
	},
]

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
]
