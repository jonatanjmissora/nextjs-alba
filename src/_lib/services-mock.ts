import type { ElementsTreeType, ElementMockType } from "./types"

export const servicesMock: ElementMockType[] = [
	{
		id: 11,
		category_title: "Maderoterapia",
		category_id: 1,
		title: "Cuerpo entero",
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
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Limpieza facial prof. con extracciónes",
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
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Tratamiento Antioxidante Glow Up",
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
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Tratamiento tensor",
		price: 60000,
		description:
			"Tratamiento que combina los mejores activos y tecnologías para devolverle a tu piel su elasticidad y juventud",
		description_admin: "Tratamiento tensor",
		description_long:
			"Nuestro tratamiento es personalizado y se adapta a las necesidades específicas de tu piel. Comienza con la limpieza profunda, seguida de la aplicación de nuestros activos y la utilización de nuestras tecnologías avanzadas. El tratamiento es rápido, indoloro y requiere mínimo tiempo de recuperación.",
		images:
			"/facial/higiene-facial-tratamiento-tensor01.webp*/facial/higiene-facial-tratamiento-tensor02.webp*/facial/higiene-facial-tratamiento-tensor03.webp*/facial/higiene-facial-tratamiento-tensor04.webp*/facial/higiene-facial-tratamiento-tensor05.webp",
	},
	{
		id: 24,
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Higiene facial prof. con electroporación",
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
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Higiene facial prof. con radiofrecuencia",
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
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Tratamiento con Alquimias",
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
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Higiene facial prof. con dermaplaning",
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
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Dermapen o microneedling",
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
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Peeling químico",
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
		category_title: "Limpieza Facial",
		category_id: 2,
		title: "Hollywood peel",
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
		category_title: "Tratamientos corporales",
		category_id: 3,
		title: "Pulido corporal",
		price: 45000,
		description:
			"Exfoliación suave, seguida de la aplicación de productos hidratantes y un masaje relajante.",
		description_admin: "Pulido corporal",
		description_long:
			"Nuestro tratamiento de Pulido Corporal es personalizado y se adapta a las necesidades específicas de tu piel. Comienza con una exfoliación suave, seguida de la aplicación de productos hidratantes y un masaje relajante. El tratamiento es relajante y requiere minímo tiempo de recuperación.",
		images:
			"/corporal/tratamiento-corporal-pulido01.webp*/corporal/tratamiento-corporal-pulido02.webp*/corporal/tratamiento-corporal-pulido03.webp",
	},
	{
		id: 32,
		category_title: "Tratamientos corporales",
		category_id: 3,
		title: "Pulido corporal mas peeling",
		price: 50000,
		description:
			"Peeling corporal con renovacion celular. Ideal para pieles con acne",
		description_admin: "Pulido corporal mas peeling",
		description_long:
			"Peeling corporal con renovacion celular. Este tratamiento es ideal para pieles con foliculitis o acne. Combinamos tecnicas avanzadas de exfoliacion quimica con productos innovadores para estimular la renovacion celular y renovar una piel saludable y radiante.",
		images:
			"/corporal/tratamiento-corporal-pelling01.webp*/corporal/tratamiento-corporal-pelling02.webp*/corporal/tratamiento-corporal-pelling03.webp",
	},
	{
		id: 33,
		category_title: "Tratamientos corporales",
		category_id: 3,
		title: "Corporal Liposonix",
		price: 58000,
		description:
			"Adios a la grasa localizada! Tratamiento reductor con liposonix",
		description_admin: "Corporal Liposonix",
		description_long:
			"Liposonix es una tecnologia de ultrasonido focalizado de alta intensidad que destruye las celulas grasas de manera no invasiva. El procedimiento es rapido, seguro y efectivo para reducir la grasa localizada en areas como: abdomen, flancos, muslos y brazos. Redefiniendo el contorno corporal.",
		images:
			"/corporal/tratamiento-corporal-liposonix01.webp*/corporal/tratamiento-corporal-liposonix02.webp*/corporal/tratamiento-corporal-liposonix03.webp*/corporal/tratamiento-corporal-liposonix04.webp",
	},
	{
		id: 41,
		category_title: "Bronceado sin sol",
		category_id: 4,
		title: "Bronceado sin sol",
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
		category_title: "Hifu y liposonix",
		category_id: 5,
		title: "Hifu y liposonix",
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
		category_title: "Hifu y liposonix",
		category_id: 5,
		title: "Liposonix",
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
		category_title: "Depilación láser",
		category_id: 6,
		title: "Promo: axilas, cavado con tiro y bozo",
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
		category_title: "Pestañas y cejas",
		category_id: 7,
		title: "Pestañas",
		price: 25000,
		description:
			"Lifting. Técnica de arqueado en pestañas naturales. técnica tradicional y coreana",
		description_admin: "Pestañas",
		description_long:
			"Con tecnicas innovadoras y productos de alta calidad, lograremos que tus pestaas luzcas mas largas, curvadas y voluminosas sin necesidad de extensiones.",
		images:
			"/pestanias-cejas/pestanias-cejas01.webp*/pestanias-cejas/pestanias-cejas02.webp",
	},
	{
		id: 72,
		category_title: "Pestañas y cejas",
		category_id: 7,
		title: "Laminado de cejas + lifting",
		price: 45000,
		description: "Promos laminado de cejas y Lifting tradicional.",
		description_admin: "Laminado + lifting",
		description_long:
			"Nuestro tratamiento de laminado y perfilado de cejas es la solucion perfecta para ti, combinando tecnicas avanzadas para darle a tus cejas una forma y volumen que deseas, realzando la belleza natural de tu rostro. Laminado de cejas: tratamiento que aliza y da forma a las cejas definiendolas.",
		images:
			"/pestanias-cejas/pestanias-cejas01.webp*/pestanias-cejas/pestanias-cejas02.webp",
	},
]

export const servicesTree: ElementsTreeType[] = [
	{
		id: 1,
		title: "Maderoterapia",
		description:
			"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad.",
		image: "/maderoterapia/maderoterapia01.webp",
		elements: [
			{
				id: 11,
				category_title: "Maderoterapia",
				category_id: 1,
				title: "Cuerpo entero",
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
		id: 2,
		title: "Limpieza facial",
		description:
			"Técnicas y procedimientos diseñados para abordar flacidez, celulitis, retención de líquidos o tensión muscular.",
		image: "/facial/higiene-facial-profunda01.webp",
		elements: [
			{
				id: 21,
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Limpieza facial profunda con extracciónes",
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
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Tratamiento Antioxidante Glow Up",
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
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Tratamiento tensor",
				price: 60000,
				description:
					"Tratamiento que combina los mejores activos y tecnologías para devolverle a tu piel su elasticidad y juventud",
				description_admin: "Tratamiento tensor",
				description_long:
					"Nuestro tratamiento es personalizado y se adapta a las necesidades específicas de tu piel. Comienza con la limpieza profunda, seguida de la aplicación de nuestros activos y la utilización de nuestras tecnologías avanzadas. El tratamiento es rápido, indoloro y requiere mínimo tiempo de recuperación.",
				images:
					"/facial/higiene-facial-tratamiento-tensor01.webp*/facial/higiene-facial-tratamiento-tensor02.webp*/facial/higiene-facial-tratamiento-tensor03.webp*/facial/higiene-facial-tratamiento-tensor04.webp*/facial/higiene-facial-tratamiento-tensor05.webp",
			},
			{
				id: 24,
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Higiene facial profunda con electroporación",
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
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Higiene facial profunda con radiofrecuencia",
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
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Tratamiento con Alquimias",
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
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Higiene facial profunda con dermaplaning",
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
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Dermapen o microneedling",
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
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Peeling químico",
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
				category_title: "Limpieza facial",
				category_id: 2,
				title: "Hollywood peel",
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
		id: 3,
		title: "Tratamientos corporales",
		description:
			"Técnicas y procedimientos diseñados para abordar flacidez, celulitis, retención de líquidos o tensión muscular.",
		image: "/corporal/tratamiento-corporal-pulido01.webp",
		elements: [
			{
				id: 31,
				category_title: "Tratamientos corporales",
				category_id: 3,
				title: "Pulido corporal",
				price: 48000,
				description:
					"Exfoliación suave, seguida de la aplicación de productos hidratantes y un masaje relajante.",
				description_admin: "Pulido corporal",
				description_long:
					"Nuestro tratamiento de Pulido Corporal es personalizado y se adapta a las necesidades específicas de tu piel. Comienza con una exfoliación suave, seguida de la aplicación de productos hidratantes y un masaje relajante. El tratamiento es relajante y requiere minímo tiempo de recuperación.",
				images:
					"/corporal/tratamiento-corporal-pulido01.webp*/corporal/tratamiento-corporal-pulido02.webp*/corporal/tratamiento-corporal-pulido03.webp",
			},
			{
				id: 32,
				category_title: "Tratamientos corporales",
				category_id: 3,
				title: "Pulido corporal mas peeling",
				price: 50000,
				description:
					"Peeling corporal con renovacion celular. Ideal para pieles con acne",
				description_admin: "Pulido corporal mas peeling",
				description_long:
					"Peeling corporal con renovacion celular. Este tratamiento es ideal para pieles con foliculitis o acne. Combinamos tecnicas avanzadas de exfoliacion quimica con productos innovadores para estimular la renovacion celular y renovar una piel saludable y radiante.",
				images:
					"/corporal/tratamiento-corporal-pelling01.webp*/corporal/tratamiento-corporal-pelling02.webp*/corporal/tratamiento-corporal-pelling03.webp",
			},
			{
				id: 33,
				category_title: "Tratamientos corporales",
				category_id: 3,
				title: "Corporal Liposonix",
				price: 58000,
				description:
					"Adios a la grasa localizada! Tratamiento reductor con liposonix",
				description_admin: "Corporal Liposonix",
				description_long:
					"Liposonix es una tecnologia de ultrasonido focalizado de alta intensidad que destruye las celulas grasas de manera no invasiva. El procedimiento es rapido, seguro y efectivo para reducir la grasa localizada en areas como: abdomen, flancos, muslos y brazos. Redefiniendo el contorno corporal.",
				images:
					"/corporal/tratamiento-corporal-liposonix01.webp*/corporal/tratamiento-corporal-liposonix02.webp*/corporal/tratamiento-corporal-liposonix03.webp*/corporal/tratamiento-corporal-liposonix04.webp",
			},
		],
	},
	{
		id: 4,
		title: "Bronceado sin sol",
		description:
			"Obtén un tono dorado mediante la pigmentación de la piel, sin usar los nocivos rayos UV del rey Sol.",
		image: "/bronceado/bronceado-sin-sol01.webp",
		elements: [
			{
				id: 41,
				category_title: "Bronceado sin sol",
				category_id: 4,
				title: "Bronceado sin sol",
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
		id: 5,
		title: "Hifu y liposonix",
		description:
			"Ideales para mejorar contornos y lograr un aspecto más firme y definido sin tiempos de recuperación.",
		image: "/hifu-liposonix/hifu01.webp",
		elements: [
			{
				id: 51,
				category_title: "Hifu y liposonix",
				category_id: 5,
				title: "Hifu",
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
				category_title: "Hifu y liposonix",
				category_id: 5,
				title: "Liposonix",
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
		id: 6,
		title: "Depilación láser",
		description:
			"Reducir el crecimiento del vello, actuando directamente en la raíz, dejando la piel más suave.",
		image: "/depilacion/depilacion-laser01.webp",
		elements: [
			{
				id: 61,
				category_title: "Depilación láser",
				category_id: 6,
				title: "Promo: axilas, cavado con tiro y bozo",
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
		id: 7,
		title: "Pestañas y cejas",
		description:
			"Realzamos tu mirada. Lifting, perfilado, laminado y diseño pensado para resaltar tu belleza natural con resultados duraderos.",
		image: "/pestanias-cejas/pestanias-cejas01.webp",
		elements: [
			{
				id: 71,
				category_title: "Pestañas y cejas",
				category_id: 7,
				title: "Pestañas",
				price: 25000,
				description:
					"Lifting. Técnica de arqueado en pestañas naturales. técnica tradicional y coreana",
				description_admin: "Pestañas",
				description_long:
					"Con tecnicas innovadoras y productos de alta calidad, lograremos que tus pestaas luzcas mas largas, curvadas y voluminosas sin necesidad de extensiones.",
				images:
					"/pestanias-cejas/pestanias-cejas01.webp*/pestanias-cejas/pestanias-cejas02.webp",
			},
			{
				id: 72,
				category_title: "Pestañas y cejas",
				category_id: 7,
				title: "Laminado de cejas + lifting",
				price: 45000,
				description: "Promos laminado de cejas y Lifting tradicional.",
				description_admin: "Laminado + lifting",
				description_long:
					"Nuestro tratamiento de laminado y perfilado de cejas es la solucion perfecta para ti, combinando tecnicas avanzadas para darle a tus cejas una forma y volumen que deseas, realzando la belleza natural de tu rostro. Laminado de cejas: tratamiento que aliza y da forma a las cejas definiendolas.",
				images:
					"/pestanias-cejas/pestanias-cejas01.webp*/pestanias-cejas/pestanias-cejas02.webp",
			},
		],
	},
]
