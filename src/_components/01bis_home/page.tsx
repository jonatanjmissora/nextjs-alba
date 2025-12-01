import { Gem, Sprout, UserStar } from "lucide-react"
import { Image as ImageKit } from "@imagekit/next"

export default function HomeBisPage() {
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
		<div className=" px-(--sm-layout-padding) 2xl:px-(--2xl-layout-padding) w-full h-screen bg-(--background-one) relative flex justify-center items-center">
			<div className="grid grid-cols-3 gap-10 relative z-2">
				{skillData.map(skill => (
					<div
						key={skill.id}
						className="flex flex-col gap-3 justify-center items-center w-full custom-shadow bg-(--background-two) p-12 py-14 pt-16 rounded-lg relative"
					>
						<span className="absolute -top-24 left-1/2 -translate-x-1/2 rounded-full size-36 bg-(--secondary-green) flex justify-center items-center custom-shadow">
							{skill.icon}
						</span>
						<span className="header text-(--foreground-green) font-bold">
							{skill.title}
						</span>
						<p className="text">{skill.description}</p>
					</div>
				))}
			</div>
			<div className="absolute z-0 -bottom-20 -right-20">
				<div className="w-[65dvw] h-[80dvh] relative">
					<ImageKit
						urlEndpoint={`${urlEndp}`}
						src="/Layout/subhero-bg.webp"
						priority={false}
						alt={"/Layout/subhero-bg.webp"}
						fill
						loading="eager"
						className={`object-cover opacity-45`}
						sizes="(max-width: 768px) 33vw, (max-width: 1200px) 60vw, 100vw"
					/>
				</div>
			</div>
		</div>
	)
}
