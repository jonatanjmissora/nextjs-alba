import type { ElementsTreeType, ElementMockType } from "./types"

export const servicesMock: ElementMockType[] = [
	{
		id: 11,
		title: "Maderoterapia",
		subtitle: "Cuerpo entero",
		price: 45000,
		description:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		description_admin: "Maderoterapia",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo. Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo. Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo. Reduce el estrés y la ansiedad.",
		images:
			"/maderoterapia/maderoterapia01.webp*/maderoterapia/maderoterapia02.webp*/maderoterapia/maderoterapia03.webp*/maderoterapia/maderoterapia04.webp*/maderoterapia/maderoterapia05.webp",
	},
	{
		id: 21,
		title: "Limpieza Facial",
		subtitle: "Limpieza facial prof. con extracciónes",
		price: 48000,
		description:
			"Ideal para pieles deslucidas, con puntos negros y engrosadas.",
		description_admin: "Limpieza facial profunda",
		description_long:
			"Tratamiento ideal para afinar, hidratar e iluminar la piel. Extracción de puntos negros y quistes de millium. Preparamos la piel con doble limpieza ( aceite y agua). Exfoliación enzimática y queratolitica. Microdermoabrasion con punta de diamante. Extracciones. Máscara peel off negra. Descongestion con Alta Frecuencia y máscaras. Productos para finalizar. Protección solar.",
		images:
			"/facial/higiene-facial-profunda01.webp*/facial/higiene-facial-profunda02.webp*/facial/higiene-facial-profunda03.webp*/facial/higiene-facial-profunda04.webp*/facial/higiene-facial-profunda05.webp",
	},
	{
		id: 22,
		title: "Limpieza Facial",
		subtitle: "Tratamiento Antioxidante Glow Up",
		price: 65000,
		description:
			"Lucí una piel radiante con mucho Glow. Aporte de activos y vitaminas según cada tipo de piel.",
		description_admin: "Glow Up",
		description_long:
			"Lucí una piel radiante con mucho Glow. Aporte de activos y vitaminas según cada tipo de piel. Tratamiento anti age que combina Radiofrecuencia, Ems y electroporación. Incorpora activos en profundidad y con el calor de a radiofrecuencia estimulamos la producción de colágeno. Resultado una piel con mucha luminosidad y un efecto tensor que namora.",
		images:
			"/facial/higiene-facial-profunda-glowup01.webp*/facial/higiene-facial-profunda-glowup02.webp*/facial/higiene-facial-profunda-glowup03.webp*/facial/higiene-facial-profunda-glowup04.webp*/facial/higiene-facial-profunda-glowup05.webp",
	},
	{
		id: 23,
		title: "Limpieza Facial",
		subtitle: "Tratamiento tensor",
		price: 60000,
		description:
			"Tratamiento de higiene profunda con Radiofrecuencia. Con aporte de activos tensores. Ideal para pieles desvitalizadas y con flacidez.",
		description_admin: "Tratamiento tensor",
		description_long: "BLA BLA BLA",
		images:
			"/facial/higiene-facial-tratamiento-tensor01.webp*/facial/higiene-facial-tratamiento-tensor02.webp*/facial/higiene-facial-tratamiento-tensor03.webp*/facial/higiene-facial-tratamiento-tensor04.webp*/facial/higiene-facial-tratamiento-tensor05.webp",
	},
	{
		id: 24,
		title: "Limpieza Facial",
		subtitle: "Higiene facial prof. con electroporación",
		price: 58000,
		description:
			"Este tratamiento facial incorpora activos a la piel de manera más profunda mediante la electroporacion o Mesoterapia virtual.",
		description_admin: "Facial electroporación",
		description_long:
			"Este tratamiento facial incorpora activos a la piel de manera más profunda mediante la electroporacion o Mesoterapia virtual. Sin dolor y sin agujas. Higiene profunda. Luego de las extracciones se procede a realizar un shock de activos penetrados con electroporación. Finalizando con productos y protección solar.",
		images:
			"/facial/higiene-facial-electroporacion01.webp*/facial/higiene-facial-electroporacion02.webp*/facial/higiene-facial-electroporacion03.webp*/facial/higiene-facial-electroporacion04.webp*/facial/higiene-facial-electroporacion05.webp",
	},
	{
		id: 25,
		title: "Limpieza Facial",
		subtitle: "Higiene facial prof. con radiofrecuencia",
		price: 62000,
		description:
			"El principal objetivo de esta tratamiento es la estimulación de colágeno a través de la radiofrecuencia. ",
		description_admin: "Facial radiofrecuencia",
		description_long:
			"El principal objetivo de esta tratamiento es la estimulación de colágeno a través de la radiofrecuencia. Higiene profunda con extracciónes. Sesión de radiofrecuencia. Aproximadamente entre 25 y 30 minutos, según tolerancia del paciente. Descongestión y productos de finalización. Protección solar.",
		images:
			"/facial/higiene-facial-radiofrecuencia01.webp*/facial/higiene-facial-radiofrecuencia02.webp*/facial/higiene-facial-radiofrecuencia03.webp*/facial/higiene-facial-radiofrecuencia04.webp*/facial/higiene-facial-radiofrecuencia05.webp",
	},
	{
		id: 26,
		title: "Limpieza Facial",
		subtitle: "Tratamiento con Alquimias",
		price: 60000,
		description: "Es un tratamiento de microdermoabrasion y dermoinfusion.",
		description_admin: "Facial Alquimias",
		description_long:
			"Es un tratamiento de microdermoabrasion y dermoinfusion. Esto quiere decir que mientras exfolia, introduce activos en profundidad ( seleccionados según necesidad) dejando un piel muy limpia. Ideal para pieles engrosadas, con poros dilatados. Aporta mucha luminosidad e hidratación. Se procede a realizar una higiene profunda y la aparatologia en cuestión. Luego se realizan extracciones, descongestión y productos de finalización. Protección solar.",
		images:
			"/facial/higiene-facial-alquimia01.webp*/facial/higiene-facial-alquimia02.webp*/facial/higiene-facial-alquimia03.webp*/facial/higiene-facial-alquimia04.webp*/facial/higiene-facial-alquimia05.webp",
	},
	{
		id: 27,
		title: "Limpieza Facial",
		subtitle: "Higiene facial prof. con dermaplaning",
		price: 65000,
		description:
			"Información importante: es una técnica de peeling con bisturí, indolora, que deja la piel suave y luminosa.",
		description_admin: "Facial dermaplaning",
		description_long:
			"Información importante: es una técnica de peeling con bisturí, indolora, que deja la piel suave y luminosa. El vello no crece más duro ni oscuro. Eso lo determinan factores hormonales y genéticos. Con esta técnica, retiramos células muerta y todo el vello fino del rostro. Higiene facial profunda. Dermaplaning. Extracciones. Descongestión. Productos de finalización. Protección solar.",
		images:
			"/facial/higiene-facial-dermaplaning01.webp*/facial/higiene-facial-dermaplaning02.webp*/facial/higiene-facial-dermaplaning03.webp*/facial/higiene-facial-dermaplaning04.webp*/facial/higiene-facial-dermaplaning05.webp",
	},
	{
		id: 28,
		title: "Limpieza Facial",
		subtitle: "Dermapen o microneedling",
		price: 65000,
		description:
			"Sesión de micro pinturas que abre canales en la piel, para que los activos penetren mas profundo.",
		description_admin: "Facial dermapen",
		description_long:
			"Sesión de micro pinturas que abre canales en la piel, para que los activos penetren mas profundo. Se combina luego con electroporación para potenciar los resultados. Higiene facial profunda. Dermapen. Extracciones. Descongestión. Productos de finalización. Protección solar.",
		images:
			"/facial/higiene-facial-microneedling01.webp*/facial/higiene-facial-microneedling02.webp*/facial/higiene-facial-microneedling03.webp*/facial/higiene-facial-microneedling04.webp*/facial/higiene-facial-microneedling05.webp",
	},
	{
		id: 29,
		title: "Limpieza Facial",
		subtitle: "Peeling químico",
		price: 69000,
		description: "Este Peelings es cosmiatrico. No médico.",
		description_admin: "Facial químico",
		description_long:
			"Este Peelings es cosmiatrico. No médico. Trabajo con diferente técnicas y métodos de profundización que llegan a tener muy buenos resultados, pero siempre trabajo sobre mi campo. Lo epidérmico. Logramos hacer muy buenas descamaciones siemore acompañando al paciente. Los peeling descamativos, no son para todas las personas. Por lo que al evaluar la piel, si no considero necesario realizarlo, buscamos otro tratamiento que se adecué a esa piel.",
		images:
			"/facial/higiene-facial-quimico01.webp*/facial/higiene-facial-quimico02.webp*/facial/higiene-facial-quimico03.webp*/facial/higiene-facial-quimico04.webp*/facial/higiene-facial-quimico05.webp",
	},
	{
		id: 30,
		title: "Limpieza Facial",
		subtitle: "Hollywood peel",
		price: 67000,
		description:
			"Tratamiento ideal para pieles con manchas y secuelas de acné como poros dilatados y cicatrices.",
		description_admin: "Facial Hollywood",
		description_long:
			"Tratamiento ideal para pieles con manchas y secuelas de acné como poros dilatados y cicatrices. Luego de la higiene profunda se pincela una fina capa de carbon vegetal activado, se deja secar y se procede al tratamiento. Con este tratamiento conseguimos una Regeneración celular, mediante pulsos de láser muy cortos extraemos el carbón vegetal adherido a la capa más superficial de la piel. Luego se descongestiona y se termina el tratamiento con productos acordes y protección solar.",
		images:
			"/facial/higiene-facial-hollywood01.webp*/facial/higiene-facial-hollywood02.webp*/facial/higiene-facial-hollywood03.webp*/facial/higiene-facial-hollywood04.webp*/facial/higiene-facial-hollywood05.webp",
	},
	{
		id: 31,
		title: "Tratamientos corporales",
		subtitle: "Higiene corporal profunda",
		price: 50000,
		description:
			"Higiene profunda en espalda, glúteos, brazos o piernas. Se realizan extracciones y se tratan manchas o foliculitis. El valor es por zona.",
		description_admin: "Higiene corporal profunda",
		description_long: "BLA BLA BLA",
		images:
			"/corporal/tratamiento-corporal-pelling01.webp*/corporal/tratamiento-corporal-pelling02.webp*/corporal/tratamiento-corporal-pelling03.webp",
	},
	{
		id: 32,
		title: "Tratamientos corporales",
		subtitle: "Pulido corporal",
		price: 48000,
		description:
			"Pulido corporal con exfoliante. Se hace un prepeeling y un masaje circulatorio en todo el cuerpo.",
		description_admin: "Pulido corporal",
		description_long: "BLA BLA BLA",
		images:
			"/corporal/tratamiento-corporal-pulido01.webp*/corporal/tratamiento-corporal-pulido02.webp*/corporal/tratamiento-corporal-pulido03.webp",
	},
	{
		id: 33,
		title: "Tratamientos corporales",
		subtitle: "Corporal Liposonix",
		price: 58000,
		description:
			"Liposonix con exfoliante. Se hace un prepeeling y un masaje circulatorio en todo el cuerpo.",
		description_admin: "Corporal Liposonix",
		description_long: "BLA BLA BLA",
		images:
			"/corporal/tratamiento-corporal-liposonix01.webp*/corporal/tratamiento-corporal-liposonix02.webp*/corporal/tratamiento-corporal-liposonix03.webp*/corporal/tratamiento-corporal-liposonix04.webp",
	},
	{
		id: 41,
		title: "Bronceado sin sol",
		subtitle: "Bronceado sin sol",
		price: 45000,
		description:
			"Es un bronceado orgánico que se aplica en forma de bruma con un compresor. En una sola sesión logras el color ideal, natural sin tonos naranjas, ni manchas ni olor.",
		description_admin: "Bronceado sin sol",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images:
			"/bronceado/bronceado-sin-sol01.webp*/bronceado/bronceado-sin-sol02.webp*/bronceado/bronceado-sin-sol03.webp",
	},
	{
		id: 51,
		title: "Hifu y liposonix",
		subtitle: "Hifu",
		price: 85000,
		description:
			"Lifting sin cirugía, tratamiento rejuvenecedor sin dolor. Reduce arrugas y líneas de expresión. Mejora la firmeza del rostro. El valor incluye Higiene facial. Rostro, cuello y escote.",
		description_admin: "Hifu",
		description_long:
			"Tratamiento facial No invasivo que utiliza ultrasonido focalizado de alta intensidad para estimular la producción de colágeno en las capas más profundas de la piel. Sirve principalmente para mejorar la firmeza, reducir las arrugas y levantar áreas del rostro, como las mejillas, la mandíbula y el cuello. Es una alternativa al Lifting facial quirúrgico, con la ventaja que no requiere tiempo de recuperación y ofrece resultados duraderos.",
		images:
			"/hifu-liposonix/hifu01.webp*/hifu-liposonix/hifu02.webp*/hifu-liposonix/hifu03.webp*/hifu-liposonix/hifu04.webp*/hifu-liposonix/hifu05.webp",
	},
	{
		id: 52,
		title: "Hifu y liposonix",
		subtitle: "Liposonix",
		price: 75000,
		description:
			"Deshace permanentemente la grasa localizada, mejora la firmeza y la elasticidad de la piel. Reduce cm, mejora piel con celulitis, sin dolor y sin tiempo de recuperación. Zonas a tratar: abdomen, brazos, pantalón de montar, muslos, espalda, entrepierna. Valor por zona. Y con drenaje en cuerpo completo.",
		description_admin: "Liposonix",
		description_long:
			"Deshace permanentemente la grasa localizada, mejora la firmeza y la elasticidad de la piel. Reduce cm, mejora piel con celulitis, sin dolor y sin tiempo de recuperación. Zonas a tratar: abdomen, brazos, pantalón de montar, muslos, espalda, entrepierna. Valor por zona. Y con drenaje en cuerpo completo.",
		images:
			"/hifu-liposonix/liposonix01.webp*/hifu-liposonix/liposonix02.webp*/hifu-liposonix/liposonix03.webp*/hifu-liposonix/liposonix04.webp*/hifu-liposonix/liposonix05.webp",
	},
	{
		id: 61,
		title: "Depilacion laser",
		subtitle: "Promo: axilas, cavado con tiro y bozo",
		price: 20000,
		description:
			"Amamos lo rápido que funciona el tratamiento en todo tipo de piel. Ahorra tiempo y esfuerzo, despedite de la irritación y sobre pigmentación en zonas delicadas.",
		description_admin: "Depilación láser",
		description_long:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		images:
			"/depilacion/depilacion-laser01.webp*/depilacion/depilacion-laser02.webp",
	},
	{
		id: 71,
		title: "Pestanias y cejas",
		subtitle: "Pestañas",
		price: 25000,
		description:
			"Lifting. Técnica de arqueado en pestañas naturales. técnica tradicional y coreana",
		description_admin: "Pestañas",
		description_long: "BLA BLA BLA",
		images:
			"/pestanias-cejas/pestanias-cejas01.webp*/pestanias-cejas/pestanias-cejas02.webp",
	},
	{
		id: 72,
		title: "Pestanias y cejas",
		subtitle: "Laminado de cejas + lifting",
		price: 45000,
		description: "Promos laminado de cejas y Lifting tradicional.",
		description_admin: "Laminado + lifting",
		description_long: "BLA BLA BLA",
		images:
			"/pestanias-cejas/pestanias-cejas01.webp*/pestanias-cejas/pestanias-cejas02.webp",
	},
]

export const servicesTree: ElementsTreeType[] = [
	{
		title: "Maderoterapia",
		elements: [
			{
				id: 11,
				subtitle: "Cuerpo entero",
				price: 45000,
				description:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				description_admin: "Maderoterapia",
				description_long:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				images:
					"/maderoterapia/maderoterapia01.webp*/maderoterapia/maderoterapia02.webp*/maderoterapia/maderoterapia03.webp*/maderoterapia/maderoterapia04.webp*/maderoterapia/maderoterapia05.webp",
			},
		],
	},
	{
		title: "Limpieza facial",
		elements: [
			{
				id: 21,
				subtitle: "Limpieza facial profunda con extracciónes",
				price: 48000,
				description:
					"Ideal para pieles deslucidas, con puntos negros y engrosadas.",
				description_admin: "Limpieza facial profunda",
				description_long:
					"Tratamiento ideal para afinar, hidratar e iluminar la piel. Extracción de puntos negros y quistes de millium. Preparamos la piel con doble limpieza ( aceite y agua). Exfoliación enzimática y queratolitica. Microdermoabrasion con punta de diamante. Extracciones. Máscara peel off negra. Descongestion con Alta Frecuencia y máscaras. Productos para finalizar. Protección solar.",
				images:
					"/facial/higiene-facial-profunda01.webp*/facial/higiene-facial-profunda02.webp*/facial/higiene-facial-profunda03.webp*/facial/higiene-facial-profunda04.webp*/facial/higiene-facial-profunda05.webp",
			},
			{
				id: 22,
				subtitle: "Tratamiento Antioxidante Glow Up",
				price: 65000,
				description:
					"Lucí una piel radiante con mucho Glow. Aporte de activos y vitaminas según cada tipo de piel.",
				description_admin: "Glow Up",
				description_long:
					"Lucí una piel radiante con mucho Glow. Aporte de activos y vitaminas según cada tipo de piel. Tratamiento anti age que combina Radiofrecuencia, Ems y electroporación. Incorpora activos en profundidad y con el calor de a radiofrecuencia estimulamos la producción de colágeno. Resultado una piel con mucha luminosidad y un efecto tensor que namora.",
				images:
					"/facial/higiene-facial-profunda-glowup01.webp*/facial/higiene-facial-profunda-glowup02.webp*/facial/higiene-facial-profunda-glowup03.webp*/facial/higiene-facial-profunda-glowup04.webp*/facial/higiene-facial-profunda-glowup05.webp",
			},
			{
				id: 23,
				subtitle: "Tratamiento tensor",
				price: 60000,
				description:
					"Tratamiento de higiene profunda con Radiofrecuencia. Con aporte de activos tensores. Ideal para pieles desvitalizadas y con flacidez.",
				description_admin: "Tratamiento tensor",
				description_long: "BLA BLA BLA",
				images:
					"/facial/higiene-facial-tratamiento-tensor01.webp*/facial/higiene-facial-tratamiento-tensor02.webp*/facial/higiene-facial-tratamiento-tensor03.webp*/facial/higiene-facial-tratamiento-tensor04.webp*/facial/higiene-facial-tratamiento-tensor05.webp",
			},
			{
				id: 24,
				subtitle: "Higiene facial profunda con electroporación",
				price: 58000,
				description:
					"Este tratamiento facial incorpora activos a la piel de manera más profunda mediante la electroporacion o Mesoterapia virtual.",
				description_admin: "Facial electroporación",
				description_long:
					"Este tratamiento facial incorpora activos a la piel de manera más profunda mediante la electroporacion o Mesoterapia virtual. Sin dolor y sin agujas. Higiene profunda. Luego de las extracciones se procede a realizar un shock de activos penetrados con electroporación. Finalizando con productos y protección solar.",
				images:
					"/facial/higiene-facial-electroporacion01.webp*/facial/higiene-facial-electroporacion02.webp*/facial/higiene-facial-electroporacion03.webp*/facial/higiene-facial-electroporacion04.webp*/facial/higiene-facial-electroporacion05.webp",
			},
			{
				id: 25,
				subtitle: "Higiene facial profunda con radiofrecuencia",
				price: 62000,
				description:
					"El principal objetivo de esta tratamiento es la estimulación de colágeno a través de la radiofrecuencia. ",
				description_admin: "Facial radiofrecuencia",
				description_long:
					"El principal objetivo de esta tratamiento es la estimulación de colágeno a través de la radiofrecuencia. Higiene profunda con extracciónes. Sesión de radiofrecuencia. Aproximadamente entre 25 y 30 minutos, según tolerancia del paciente. Descongestión y productos de finalización. Protección solar.",
				images:
					"/facial/higiene-facial-radiofrecuencia01.webp*/facial/higiene-facial-radiofrecuencia02.webp*/facial/higiene-facial-radiofrecuencia03.webp*/facial/higiene-facial-radiofrecuencia04.webp*/facial/higiene-facial-radiofrecuencia05.webp",
			},
			{
				id: 26,
				subtitle: "Tratamiento con Alquimias",
				price: 60000,
				description: "Es un tratamiento de microdermoabrasion y dermoinfusion.",
				description_admin: "Facial Alquimias",
				description_long:
					"Es un tratamiento de microdermoabrasion y dermoinfusion. Esto quiere decir que mientras exfolia, introduce activos en profundidad ( seleccionados según necesidad) dejando un piel muy limpia. Ideal para pieles engrosadas, con poros dilatados. Aporta mucha luminosidad e hidratación. Se procede a realizar una higiene profunda y la aparatologia en cuestión. Luego se realizan extracciones, descongestión y productos de finalización. Protección solar.",
				images:
					"/facial/higiene-facial-alquimia01.webp*/facial/higiene-facial-alquimia02.webp*/facial/higiene-facial-alquimia03.webp*/facial/higiene-facial-alquimia04.webp*/facial/higiene-facial-alquimia05.webp",
			},
			{
				id: 27,
				subtitle: "Higiene facial profunda con dermaplaning",
				price: 65000,
				description:
					"Información importante: es una técnica de peeling con bisturí, indolora, que deja la piel suave y luminosa.",
				description_admin: "Facial dermaplaning",
				description_long:
					"Información importante: es una técnica de peeling con bisturí, indolora, que deja la piel suave y luminosa. El vello no crece más duro ni oscuro. Eso lo determinan factores hormonales y genéticos. Con esta técnica, retiramos células muerta y todo el vello fino del rostro. Higiene facial profunda. Dermaplaning. Extracciones. Descongestión. Productos de finalización. Protección solar.",
				images:
					"/facial/higiene-facial-dermaplaning01.webp*/facial/higiene-facial-dermaplaning02.webp*/facial/higiene-facial-dermaplaning03.webp*/facial/higiene-facial-dermaplaning04.webp*/facial/higiene-facial-dermaplaning05.webp",
			},
			{
				id: 28,
				subtitle: "Dermapen o microneedling",
				price: 65000,
				description:
					"Sesión de micro pinturas que abre canales en la piel, para que los activos penetren mas profundo.",
				description_admin: "Facial dermapen",
				description_long:
					"Sesión de micro pinturas que abre canales en la piel, para que los activos penetren mas profundo. Se combina luego con electroporación para potenciar los resultados. Higiene facial profunda. Dermapen. Extracciones. Descongestión. Productos de finalización. Protección solar.",
				images:
					"/facial/higiene-facial-microneedling01.webp*/facial/higiene-facial-microneedling02.webp*/facial/higiene-facial-microneedling03.webp*/facial/higiene-facial-microneedling04.webp*/facial/higiene-facial-microneedling05.webp",
			},
			{
				id: 29,
				subtitle: "Peeling químico",
				price: 69000,
				description: "Este Peelings es cosmiatrico. No médico.",
				description_admin: "Facial químico",
				description_long:
					"Este Peelings es cosmiatrico. No médico. Trabajo con diferente técnicas y métodos de profundización que llegan a tener muy buenos resultados, pero siempre trabajo sobre mi campo. Lo epidérmico. Logramos hacer muy buenas descamaciones siemore acompañando al paciente. Los peeling descamativos, no son para todas las personas. Por lo que al evaluar la piel, si no considero necesario realizarlo, buscamos otro tratamiento que se adecué a esa piel.",
				images:
					"/facial/higiene-facial-quimico01.webp*/facial/higiene-facial-quimico02.webp*/facial/higiene-facial-quimico03.webp*/facial/higiene-facial-quimico04.webp*/facial/higiene-facial-quimico05.webp",
			},
			{
				id: 30,
				subtitle: "Hollywood peel",
				price: 67000,
				description:
					"Tratamiento ideal para pieles con manchas y secuelas de acné como poros dilatados y cicatrices.",
				description_admin: "Facial Hollywood",
				description_long:
					"Tratamiento ideal para pieles con manchas y secuelas de acné como poros dilatados y cicatrices. Luego de la higiene profunda se pincela una fina capa de carbon vegetal activado, se deja secar y se procede al tratamiento. Con este tratamiento conseguimos una Regeneración celular, mediante pulsos de láser muy cortos extraemos el carbón vegetal adherido a la capa más superficial de la piel. Luego se descongestiona y se termina el tratamiento con productos acordes y protección solar.",
				images:
					"/facial/higiene-facial-hollywood01.webp*/facial/higiene-facial-hollywood02.webp*/facial/higiene-facial-hollywood03.webp*/facial/higiene-facial-hollywood04.webp*/facial/higiene-facial-hollywood05.webp",
			},
		],
	},
	{
		title: "Tratamientos corporales",
		elements: [
			{
				id: 31,
				subtitle: "Higiene corporal profunda",
				price: 50000,
				description:
					"Higiene profunda en espalda, glúteos, brazos o piernas. Se realizan extracciones y se tratan manchas o foliculitis. El valor es por zona.",
				description_admin: "Higiene corporal profunda",
				description_long: "BLA BLA BLA",
				images:
					"/corporal/tratamiento-corporal-pelling01.webp*/corporal/tratamiento-corporal-pelling02.webp*/corporal/tratamiento-corporal-pelling03.webp",
			},
			{
				id: 32,
				subtitle: "Pulido corporal",
				price: 48000,
				description:
					"Pulido corporal con exfoliante. Se hace un prepeeling y un masaje circulatorio en todo el cuerpo.",
				description_admin: "Pulido corporal",
				description_long: "BLA BLA BLA",
				images:
					"/corporal/tratamiento-corporal-pulido01.webp*/corporal/tratamiento-corporal-pulido02.webp*/corporal/tratamiento-corporal-pulido03.webp",
			},
			{
				id: 33,
				subtitle: "Corporal Liposonix",
				price: 58000,
				description:
					"Liposonix con exfoliante. Se hace un prepeeling y un masaje circulatorio en todo el cuerpo.",
				description_admin: "Corporal Liposonix",
				description_long: "BLA BLA BLA",
				images:
					"/corporal/tratamiento-corporal-liposonix01.webp*/corporal/tratamiento-corporal-liposonix02.webp*/corporal/tratamiento-corporal-liposonix03.webp*/corporal/tratamiento-corporal-liposonix04.webp",
			},
		],
	},
	{
		title: "Bronceado sin sol",
		elements: [
			{
				id: 41,
				subtitle: "Bronceado sin sol",
				price: 45000,
				description:
					"Es un bronceado orgánico que se aplica en forma de bruma con un compresor. En una sola sesión logras el color ideal, natural sin tonos naranjas, ni manchas ni olor.",
				description_admin: "Bronceado sin sol",
				description_long:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				images:
					"/bronceado/bronceado-sin-sol01.webp*/bronceado/bronceado-sin-sol02.webp*/bronceado/bronceado-sin-sol03.webp",
			},
		],
	},
	{
		title: "Hifu y liposonix",
		elements: [
			{
				id: 51,
				subtitle: "Hifu",
				price: 85000,
				description:
					"Lifting sin cirugía, tratamiento rejuvenecedor sin dolor. Reduce arrugas y líneas de expresión. Mejora la firmeza del rostro. El valor incluye Higiene facial. Rostro, cuello y escote.",
				description_admin: "Hifu",
				description_long:
					"Tratamiento facial No invasivo que utiliza ultrasonido focalizado de alta intensidad para estimular la producción de colágeno en las capas más profundas de la piel. Sirve principalmente para mejorar la firmeza, reducir las arrugas y levantar áreas del rostro, como las mejillas, la mandíbula y el cuello. Es una alternativa al Lifting facial quirúrgico, con la ventaja que no requiere tiempo de recuperación y ofrece resultados duraderos.",
				images:
					"/hifu-liposonix/hifu01.webp*/hifu-liposonix/hifu02.webp*/hifu-liposonix/hifu03.webp*/hifu-liposonix/hifu04.webp*/hifu-liposonix/hifu05.webp",
			},
			{
				id: 52,
				subtitle: "Liposonix",
				price: 75000,
				description:
					"Deshace permanentemente la grasa localizada, mejora la firmeza y la elasticidad de la piel. Reduce cm, mejora piel con celulitis, sin dolor y sin tiempo de recuperación. Zonas a tratar: abdomen, brazos, pantalón de montar, muslos, espalda, entrepierna. Valor por zona. Y con drenaje en cuerpo completo.",
				description_admin: "Liposonix",
				description_long:
					"Deshace permanentemente la grasa localizada, mejora la firmeza y la elasticidad de la piel. Reduce cm, mejora piel con celulitis, sin dolor y sin tiempo de recuperación. Zonas a tratar: abdomen, brazos, pantalón de montar, muslos, espalda, entrepierna. Valor por zona. Y con drenaje en cuerpo completo.",
				images:
					"/hifu-liposonix/liposonix01.webp*/hifu-liposonix/liposonix02.webp*/hifu-liposonix/liposonix03.webp*/hifu-liposonix/liposonix04.webp*/hifu-liposonix/liposonix05.webp",
			},
		],
	},
	{
		title: "Depilacion laser",
		elements: [
			{
				id: 61,
				subtitle: "Promo: axilas, cavado con tiro y bozo",
				price: 20000,
				description:
					"Amamos lo rápido que funciona el tratamiento en todo tipo de piel. Ahorra tiempo y esfuerzo, despedite de la irritación y sobre pigmentación en zonas delicadas.",
				description_admin: "Depilación láser",
				description_long:
					"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
				images:
					"/depilacion/depilacion-laser01.webp*/depilacion/depilacion-laser02.webp",
			},
		],
	},
	{
		title: "Pestanias y cejas",
		elements: [
			{
				id: 71,
				subtitle: "Pestañas",
				price: 25000,
				description:
					"Lifting. Técnica de arqueado en pestañas naturales. técnica tradicional y coreana",
				description_admin: "Pestañas",
				description_long: "BLA BLA BLA",
				images:
					"/pestanias-cejas/pestanias-cejas01.webp*/pestanias-cejas/pestanias-cejas02.webp",
			},
			{
				id: 72,
				subtitle: "Laminado de cejas + lifting",
				price: 45000,
				description: "Promos laminado de cejas y Lifting tradicional.",
				description_admin: "Laminado + lifting",
				description_long: "BLA BLA BLA",
				images:
					"/pestanias-cejas/pestanias-cejas01.webp*/pestanias-cejas/pestanias-cejas02.webp",
			},
		],
	},
]
