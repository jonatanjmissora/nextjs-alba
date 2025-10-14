import type { ElementMockType, ElementsTreeType } from "./types"

export const productsHeader =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "

export const productsMock: ElementMockType[] = [
	{
		id: 111,
		title: "Categoria 1",
		subtitle: "Producto 1",
		price: 45000,
		description:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		description_admin: "Maderoterapia",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images: "/productos/producto01.webp",
	},
	{
		id: 121,
		title: "Categoria 2",
		subtitle: "Producto 2",
		price: 48000,
		description:
			"Ideal para pieles deslucidas, con puntos negros y engrosadas.",
		description_admin: "Limpieza facial profunda",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images: "/productos/producto02.webp",
	},
	{
		id: 131,
		title: "Categoria 3",
		subtitle: "Producto 3",
		price: 48000,
		description:
			"Ideal para pieles deslucidas, con puntos negros y engrosadas.",
		description_admin: "Limpieza facial profunda",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images: "/productos/producto03.webp",
	},
	{
		id: 141,
		title: "Categoria 4",
		subtitle: "Producto 4",
		price: 48000,
		description:
			"Ideal para pieles deslucidas, con puntos negros y engrosadas.",
		description_admin: "Limpieza facial profunda",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images: "/productos/producto04.webp",
	},
	{
		id: 151,
		title: "Categoria 5",
		subtitle: "Producto 5",
		price: 48000,
		description:
			"Ideal para pieles deslucidas, con puntos negros y engrosadas.",
		description_admin: "Limpieza facial profunda",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images: "/productos/producto05.webp",
	},
]

export const productsTree: ElementsTreeType[] = [
	{
		title: "Categoria 1",
		elements: [
			{
				id: 111,
				subtitle: "Producto 1",
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
		title: "Categoria 2",
		elements: [
			{
				id: 121,
				subtitle: "Producto 2",
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
		title: "Categoria 3",
		elements: [
			{
				id: 131,
				subtitle: "Producto 3",
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
		title: "Categoria 4",
		elements: [
			{
				id: 141,
				subtitle: "Producto 4",
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
		title: "Categoria 5",
		elements: [
			{
				id: 151,
				subtitle: "Producto 5",
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
