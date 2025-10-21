export type Service = {
	id: string
	title: string
	category: string
	description: string
	image: string
	carousel: string[]
	price: number
}

export type ServicesCategory = {
	id: string
	title: string
	image: string
	subCategories: { id: string; title: string; pinned: boolean }[]
}

export const servicesCategories: ServicesCategory[] = [
	{
		id: "tratamientos-faciales",
		title: "Tratamientos faciales",
		image: "/servicio1.jpg",
		subCategories: [
			{
				id: "higiene-facial-profunda",
				title: "Higiene facial profunda",
				pinned: true,
			},
			{
				id: "higiene-facial-profunda-con-electroporacion",
				title: "Higiene facial profunda con electroporación",
				pinned: false,
			},
			{
				id: "higiene-facial-profunda-con-radiofrecuencia",
				title: "Higiene facial profunda con radiofrecuencia",
				pinned: false,
			},
			{
				id: "tratamiento-con-alquimias",
				title: "Tratamiento con Alquimias",
				pinned: false,
			},
			{
				id: "higiene-facial-profunda-con-dermaplaning",
				title: "Higiene facial profunda con Dermaplaning",
				pinned: false,
			},
			{
				id: "Dermapen-o-microneedling",
				title: "Dermapen o microneedling",
				pinned: false,
			},
			{ id: "peeling-quimico", title: "Peeling químico", pinned: false },
			{ id: "hollywood-peel", title: "Hollywood peel", pinned: false },
			{ id: "glow-up", title: "Glow up", pinned: true },
			{ id: "hifu-facial", title: "Hifu facial", pinned: true },
		],
	},
	{
		id: "tratamientos-corporales",
		title: "Tratamientos corporales",
		image: "/servicio2.jpg",
		subCategories: [
			{ id: "maderoterapia", title: "Maderoterapia", pinned: true },
			{ id: "liposonix-reductivo", title: "Liposonix reductivo", pinned: true },
			{
				id: "exfoliacion-corporal",
				title: "Exfoliación corporal",
				pinned: true,
			},
			{ id: "peeling-corporal", title: "Peeling corporal", pinned: true },
		],
	},
	{
		id: "depilacion-definitiva",
		title: "Depilación definitiva",
		image: "/servicio3.jpg",
		subCategories: [
			{ id: "lorem1", title: "Lorem 1", pinned: true },
			{ id: "lorem2", title: "Lorem 2", pinned: true },
			{ id: "lorem3", title: "Lorem 3", pinned: true },
			{ id: "lorem4", title: "Lorem 4", pinned: true },
		],
	},
]

/*																																TRATAMIENTOS FACIALES			 */
const servicesTratamientosFaciales: Service[] = [
	{
		id: "higiene-facial-profunda",
		title: "Higiene facial profunda",
		category: "tratamientos-faciales",
		description:
			"Tratamiento ideal para afinar, hidratar e iluminar la piel. Extracción de puntos negros y quistes de millium. Preparamos la piel con doble limpieza ( aceite y agua). Exfoliación enzimática y queratolitica. Microdermoabrasion con punta de diamante. Extracciones. Máscara peel off negra. Descongestion con Alta Frecuencia y máscaras. Productos para finalizar. Protección solar.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491778/higiene-facial-profunda01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491778/higiene-facial-profunda01.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756572317/higiene-facial-profunda02.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756572318/higiene-facial-profunda03.jpg",
		],
		price: 55000,
	},
	{
		id: "higiene-facial-profunda-con-electroporacion",
		title: "Higiene facial profunda con electroporación",
		category: "tratamientos-faciales",
		description:
			"Este tratamiento facial incorpora activos a la piel de manera más profunda mediante la electroporacion o Mesoterapia virtual. Sin dolor y sin agujas. Higiene profunda. Luego de las extracciones se procede a realizar un shock de activos penetrados con electroporación. Finalizando con productos y protección solar.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491063/higiene-facial-profunda-con-electroporacion01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491063/higiene-facial-profunda-con-electroporacion01.jpg",
		],
		price: 58000,
	},
	{
		id: "higiene-facial-profunda-con-radiofrecuencia",
		title: "Higiene facial profunda con radiofrecuencia",
		category: "tratamientos-faciales",
		description:
			"El principal objetivo de esta tratamiento es la estimulación de colágeno a través de la radiofrecuencia. Higiene profunda con extracciónes. Sesión de radiofrecuencia. Aproximadamente entre 25 y 30 minutos, según tolerancia del paciente. Descongestión y productos de finalización. Protección solar.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491069/higiene-facial-profunda-con-radiofrecuencia01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491069/higiene-facial-profunda-con-radiofrecuencia01.jpg",
		],
		price: 62000,
	},
	{
		id: "tratamiento-con-alquimias",
		title: "Tratamiento con Alquimias",
		category: "tratamientos-faciales",
		description:
			"Es un tratamiento de microdermoabrasion y dermoinfusion. Esto quiere decir que mientras exfolia, introduce activos en profundidad ( seleccionados según necesidad) dejando un piel muy limpia. Ideal para pieles engrosadas, con poros dilatados. Aporta mucha luminosidad e hidratación. Se procede a realizar una higiene profunda y la aparatologia en cuestión. Luego se realizan extracciones, descongestión y productos de finalización. Protección solar.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491072/tratamiento-con-alquimias01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491072/tratamiento-con-alquimias01.jpg",
		],
		price: 60000,
	},
	{
		id: "higiene-facial-profunda-con-dermaplaning",
		title: "Higiene facial profunda con dermaplaning",
		category: "tratamientos-faciales",
		description:
			"Información importante: es una técnica de peeling con bisturí, indolora, que deja la piel suave y luminosa. El vello no crece más duro ni oscuro. Eso lo determinan factores hormonales y genéticos. Con esta técnica, retiramos células muerta y todo el vello fino del rostro. Higiene facial profunda. Dermaplaning. Extracciones. Descongestión. Productos de finalización. Protección solar ",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491078/higiene-facial-profunda-con-dermaplaning01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491078/higiene-facial-profunda-con-dermaplaning01.jpg",
		],
		price: 65000,
	},
	{
		id: "Dermapen-o-microneedling",
		title: "Dermapen o microneedling",
		category: "tratamientos-faciales",
		description:
			"Sesión de micro pinturas que abre canales en la piel, para que los activos penetren mas profundo. Se combina luego con electroporación para potenciar los resultados. Higiene facial profunda. Dermapen. Extracciones. Descongestión. Productos de finalización. Protección solar ",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491083/higiene-facial-profunda-dermapen01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491083/higiene-facial-profunda-dermapen01.jpg",
		],
		price: 65000,
	},
	{
		id: "peeling-quimico",
		title: "Peeling químico",
		category: "tratamientos-faciales",
		description:
			"Este Peelings es cosmiatrico. No médico. Trabajo con diferente técnicas y métodos de profundización que llegan a tener muy buenos resultados, pero siempre trabajo sobre mi campo. Lo epidérmico. Logramos hacer muy buenas descamaciones siemore acompañando al paciente. Los peeling descamativos, no son para todas las personas. Por lo que al evaluar la piel, si no considero necesario realizarlo, buscamos otro tratamiento que se adecué a esa piel.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491090/higiene-facial-profunda-quimico01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756491090/higiene-facial-profunda-quimico01.jpg",
		],
		price: 69000,
	},
	{
		id: "hollywood-peel",
		title: "Hollywood peel",
		category: "tratamientos-faciales",
		description:
			"Tratamiento ideal para pieles con manchas y secuelas de acné como poros dilatados y cicatrices. Luego de la higiene profunda se pincela una fina capa de carbon vegetal activado, se deja secar y se procede al tratamiento. Con este tratamiento conseguimos una Regeneración celular, mediante pulsos de láser muy cortos extraemos el carbón vegetal adherido a la capa más superficial de la piel. Luego se descongestiona y se termina el tratamiento con productos acordes y protección solar.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756492076/higiene-facial-profunda-hoolywood-peel01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756492076/higiene-facial-profunda-hoolywood-peel01.jpg",
		],
		price: 67000,
	},
	{
		id: "glow-up",
		title: "Glow up",
		category: "tratamientos-faciales",
		description:
			"Tratamiento anti age que combina Radiofrecuencia, Ems y electroporación. Incorpora activos en profundidad y con el calor de la radiofrecuencia stimulamos la producción de colágeno. Resultado una piel con mucha luminosidad y un efecto tensor que enamora.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756497213/tratamiento-facial-glow-up01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756497213/tratamiento-facial-glow-up01.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756497212/tratamiento-facial-glow-up02.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756497214/tratamiento-facial-glow-up03.jpg",
		],
		price: 67000,
	},
	{
		id: "hifu-facial",
		title: "Hifu facial",
		category: "tratamientos-faciales",
		description:
			"Tratamiento facial No invasivo que utiliza ultrasonido focalizado de alta intensidad para estimular la producción de colágeno en las capas más profundas de la piel. Sirve principalmente para mejorar la firmeza, reducir las arrugas y levantar áreas del rostro, como las mejillas, la mandíbula y el cuello. Es una alternativa al Lifting facial quirúrgico, con la ventaja que no requiere tiempo de recuperación y ofrece resultados duraderos.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756497620/tratamiento-facial-hifu01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756497620/tratamiento-facial-hifu01.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756575038/tratamiento-facial-hifu02.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756497626/tratamiento-facial-hifu03.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756497629/tratamiento-facial-hifu04.jpg",
		],
		price: 67000,
	},
]

/*																																TRATAMIENTOS CORPORALES			 */
const servicesTratamientosCorporales: Service[] = [
	{
		id: "maderoterapia",
		title: "Maderoterapia",
		category: "tratamientos-corporales",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756577717/tratamiento-corporal-maderoterapia01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756577717/tratamiento-corporal-maderoterapia01.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756577721/tratamiento-corporal-maderoterapia02.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756577728/tratamiento-corporal-maderoterapia03.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756579495/tratamiento-corporal-maderoterapia04.jpg",
		],
		price: 0,
	},
	{
		id: "liposonix-reductivo",
		title: "Liposonix reductivo",
		category: "tratamientos-corporales",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578225/tratamiento-corporal-liposonix01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578225/tratamiento-corporal-liposonix01.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578274/tratamiento-corporal-liposonix02.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578303/tratamiento-corporal-liposonix03.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578327/tratamiento-corporal-liposonix04.jpg",
		],
		price: 0,
	},
	{
		id: "exfoliacion-corporal",
		title: "Exfoliación corporal",
		category: "tratamientos-corporales",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756577958/tratamiento-corporal-pulido01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756577958/tratamiento-corporal-pulido01.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578039/tratamiento-corporal-pulido02.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578053/tratamiento-corporal-pulido03.jpg",
		],
		price: 0,
	},
	{
		id: "peeling-corporal",
		title: "Peeling corporal",
		category: "tratamientos-corporales",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		image:
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578150/tratamiento-corporal-pelling01.jpg",
		carousel: [
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578150/tratamiento-corporal-pelling01.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578176/tratamiento-corporal-pelling02.jpg",
			"https://res.cloudinary.com/dfvzvdpfa/image/upload/v1756578201/tratamiento-corporal-pelling03.jpg",
		],
		price: 0,
	},
]

/*																																DEPILACIÓN DEFINITIVA			 */
const servicesDepilacionDefinitiva: Service[] = []

export const servicesData: Service[] = [
	...servicesTratamientosFaciales,
	...servicesTratamientosCorporales,
	...servicesDepilacionDefinitiva,
]
