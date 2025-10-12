export type Product = {
	id: string
	title: string
	subtitle: string
	description: string
	image: string
	carousel: string[]
	price: number
}

export const productsHeader =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "

export const productsData = [
	{
		id: "product-titulo-del-producto-1",
		title: "Titulo del producto",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable",
		image: "/producto1.jpg",
		carousel: [
			"/producto1.jpg",
			"/producto2.jpg",
			"/producto3.jpg",
			"/producto4.jpg",
		],
		price: 100.99,
	},
	{
		id: "product-titulo-del-producto-2",
		title: "Titulo del producto",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable",
		image: "/producto2.jpg",
		carousel: [
			"/producto1.jpg",
			"/producto2.jpg",
			"/producto3.jpg",
			"/producto4.jpg",
		],
		price: 100.99,
	},
	{
		id: "product-titulo-del-producto-3",
		title: "Titulo del producto",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.",
		image: "/producto3.jpg",
		carousel: [
			"/producto1.jpg",
			"/producto2.jpg",
			"/producto3.jpg",
			"/producto4.jpg",
		],
		price: 100.99,
	},
	{
		id: "product-titulo-del-producto-4",
		title: "Titulo del producto",
		subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable",
		image: "/producto4.jpg",
		carousel: [
			"/producto1.jpg",
			"/producto2.jpg",
			"/producto3.jpg",
			"/producto4.jpg",
		],
		price: 100.99,
	},
]
