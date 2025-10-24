import type { ElementMockType, ElementsTreeType } from "./types"

export const productsMock: ElementMockType[] = [
	{
		id: 101,
		category_title: "Categoria 1",
		category_id: 1,
		title: "Producto 1",
		price: 45000,
		description:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		description_admin: "Maderoterapia",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images: "/productos/producto01.webp",
	},
	{
		id: 111,
		category_title: "Categoria 2",
		category_id: 2,
		title: "Producto 2",
		price: 48000,
		description:
			"Ideal para pieles deslucidas, con puntos negros y engrosadas.",
		description_admin: "Limpieza facial profunda",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images: "/productos/producto02.webp",
	},
	{
		id: 121,
		category_title: "Categoria 3",
		category_id: 3,
		title: "Producto 3",
		price: 48000,
		description:
			"Ideal para pieles deslucidas, con puntos negros y engrosadas.",
		description_admin: "Limpieza facial profunda",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images: "/productos/producto03.webp",
	},
	{
		id: 131,
		category_title: "Categoria 4",
		category_id: 4,
		title: "Producto 4",
		price: 48000,
		description:
			"Ideal para pieles deslucidas, con puntos negros y engrosadas.",
		description_admin: "Limpieza facial profunda",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images: "/productos/producto04.webp",
	},
	{
		id: 141,
		category_title: "Categoria 5",
		category_id: 5,
		title: "Producto 5",
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
		id: 101,
		title: "Categoria 1",
		elements: [
			{
				id: 111,
				category_title: "Categoria 1",
				category_id: 101,
				title: "Producto 1",
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
		id: 102,
		title: "Categoria 2",
		elements: [
			{
				id: 121,
				category_title: "Categoria 2",
				category_id: 102,
				title: "Producto 2",
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
		id: 103,
		title: "Categoria 3",
		elements: [
			{
				id: 131,
				category_title: "Categoria 3",
				category_id: 103,
				title: "Producto 3",
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
		id: 104,
		title: "Categoria 4",
		elements: [
			{
				id: 141,
				category_title: "Categoria 4",
				category_id: 104,
				title: "Producto 4",
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
		id: 105,
		title: "Categoria 5",
		elements: [
			{
				id: 151,
				category_title: "Categoria 5",
				category_id: 105,
				title: "Producto 5",
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
