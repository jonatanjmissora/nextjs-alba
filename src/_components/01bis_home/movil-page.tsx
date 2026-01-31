import { Gem, Sprout, UserStar } from "lucide-react"
import { Image as ImageKit } from "@imagekit/next"
import "./homebis.css"

export default function MovilHomeBis() {
	const skillData = [
		{
			id: 1,
			icon: <Gem strokeWidth="1" className="h-full w-full p-6 opacity-50" />,
			title: "Profesionalismo",
			description:
				"Manteniendo altos estándares a través de mejoras y capacitaciones continuas, priorizando el bienestar de mis clientes.",
		},
		{
			id: 2,
			icon: (
				<UserStar strokeWidth="1" className="h-full w-full p-6 opacity-50" />
			),
			title: "Personalización",
			description:
				"Atención personalizada y experiencias significativas. Identificando las necesidades únicas de cada cliente.",
		},
		{
			id: 3,
			icon: <Sprout strokeWidth="1" className="h-full w-full p-6 opacity-50" />,
			title: "Responsabilidad",
			description:
				"Asumir el compromiso y responder con integridad, generando siempre resultados positivos para vos.",
		},
	]
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"
	return (
		<section className="w-full py-60 px-(--xs-layout-padding) bg-(--background-one) flex justify-center items-center relative">
			<div className="flex flex-col gap-16 relative z-2">
				{skillData.map(skill => (
					<div
						key={skill.id}
						className="flex flex-col gap-3 items-center w-full custom-shadow bg-(--background-two) p-6 pt-10 rounded-lg relative movil-homebis-skill"
					>
						<i className="absolute -top-12 left-1/2 -translate-x-1/2 rounded-full size-20 bg-(--background-green) flex justify-center items-center custom-shadow">
							{skill.icon}
						</i>
						<span className="header text-(--foreground-green) font-bold">
							{skill.title}
						</span>
						<p className="text text-center">{skill.description}</p>
					</div>
				))}
			</div>
			<div className="absolute z-0 -bottom-8 right-0">
				<div className="w-dvw h-[40dvh] relative">
					<ImageKit
						urlEndpoint={`${urlEndp}`}
						src="/Layout/subhero-bg.webp"
						priority={false}
						alt={"/Layout/subhero-bg.webp"}
						fill
						loading="lazy"
						className={`object-cover opacity-65`}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 100vw"
					/>
				</div>
			</div>
		</section>
	)
}
