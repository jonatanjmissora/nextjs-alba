export type TipType = {
	id: string;
	title: string;
	content: {faq: string, answer: string}[];
	image: string;
}

export const tipsMock: TipType[] = [
	{
		id: "tip01",
		title: "Maderoterapia",
		content: [
			{faq: "¿Qué es la maderoterapia?",
				answer:
				"Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo.Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo. Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo. Reduce el estrés y la ansiedad. Masaje modelador y reductor. Trata celulitis y grasa localizada. Desintoxica el cuerpo. Reduce el estrés y la ansiedad."}
		],
		image: "/maderoterapia/maderoterapia03.webp",
	},
	{
		id: "tip02",
		title: "Hifu",
		content: [
	{
		faq: "¿Qué es el tratamiento HIFU?",
		answer:
			"Es un tratamiento facial No invasivo que utiliza ultrasonido focalizado de alta intensidad para estimular la producción de colágeno en las capas más profundas de la piel. Sirve principalmente para mejorar la firmeza, reducir las arrugas y levantar áreas del rostro, como las mejillas, la mandíbula y el cuello. Es una alternativa al Lifting facial quirúrgico, con la ventaja que no requiere tiempo de recuperación y ofrece resultados duraderos."},
		{faq: "¿Cómo es el tratamiento HIFU facial antes y después?",
		answer:
			"Antes del tratamiento HIFU facial, no se requiere preparación especial, aunque se recomienda tener la piel limpia y libre de maquillaje. Durante el procedimiento, se aplica un gel en el área tratada y se utilizan ondas de ultrasonido para estimular las capas profundas de la piel. Después del tratamiento, puede haber enrojecimiento o hinchazón temporal, pero la mayoría de las personas pueden reanudar sus actividades diarias de inmediato. Los resultados visibles comienzan a aparecer en unas pocas semanas y mejoran con el tiempo."},
		{faq: "¿Cuánto dura el efecto del HIFU facial?",
		answer:
			"El efecto del HIFU facial puede durar entre 12 y 18 meses, dependiendo del tipo de piel y el envejecimiento de cada persona. Los resultados no son inmediatos, ya que la producción de colágeno toma tiempo, pero suelen empezar a notarse en las primeras semanas. Después de unos 3 meses se puede observar el efecto máximo, que mejora el tono y la elasticidad de la piel."},
		{faq: "¿Qué contraindicaciones tiene el HIFU facial?",
		answer:
			"El HIFU facial tiene algunas contraindicaciones. No está recomendado para personas con infecciones en la piel, heridas abiertas, implantes metálicos en el área tratada o condiciones médicas graves como epilepsia. Además, no es aconsejable en mujeres embarazadas o lactantes. Siempre es importante consultar con un profesional antes de someterse a este tratamiento para asegurarse de que es seguro para cada caso en particular. El costo del tratamiento HIFU facial varía dependiendo la extensión de la zona tratada. Algunos pacientes pueden necesitar más de una sesión para obtener resultados óptimos, lo que puede aumentar el costo total."},
		{faq: "¿Con que tratamientos puede combinarse el HIFU FACIAL?",
		answer:
			"Se puede combinar con otros tratamientos. Dermapen, ultrasonido, radiofrecuencia. Peeling. Previo a la sesión de Hifu, se puede hacer un tratamiento de peeling tensor. Después de la sesión está indicado a los 15 días una sesión de radiofrecuencia para potenciar el estímulo de colágeno.",
	},
]
			,
		image: "/hifu-liposonix/hifu01.webp",
	},
	 
]

