import type { ElementsTreeType } from "./types"

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

export const productsTree: ElementsTreeType[] = [
	{
		title: "Productos 1",
		elements: [
			{
				id: 11,
				subtitle: "Categoria 1",
				price: 45000,
				description:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				description_admin: "Maderoterapia",
				description_long:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				images: "/productos/producto01.webp",
			},
		],
	},
	{
		title: "Productos 2",
		elements: [
			{
				id: 11,
				subtitle: "Categoria 1",
				price: 45000,
				description:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				description_admin: "Maderoterapia",
				description_long:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				images: "/productos/producto02.webp",
			},
		],
	},
	{
		title: "Productos 3",
		elements: [
			{
				id: 11,
				subtitle: "Categoria 1",
				price: 45000,
				description:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				description_admin: "Maderoterapia",
				description_long:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				images: "/productos/producto03.webp",
			},
		],
	},
	{
		title: "Productos 4",
		elements: [
			{
				id: 11,
				subtitle: "Categoria 1",
				price: 45000,
				description:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				description_admin: "Maderoterapia",
				description_long:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				images: "/productos/producto04.webp",
			},
		],
	},
	{
		title: "Productos 5",
		elements: [
			{
				id: 11,
				subtitle: "Categoria 1",
				price: 45000,
				description:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				description_admin: "Maderoterapia",
				description_long:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				images: "/productos/producto05.webp",
			},
		],
	},
]
