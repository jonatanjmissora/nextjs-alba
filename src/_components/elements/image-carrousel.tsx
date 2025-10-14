import Image from "next/image"

export default function ImageCarrousel({
	subtitle,
	array,
	actualImageIndex,
	setActualImageIndex,
}: {
	subtitle: string
	array: string[]
	actualImageIndex: number
	setActualImageIndex: (index: number) => void
}) {
	return (
		<div className="flex gap-2">
			{array.map((image, index) => (
				<div
					key={image}
					className={`size-[60px] sm:size-[50px] 2xl:size-[70px] overflow-hidden relative rounded-tl-[1rem] rounded-br-[1rem] cursor-pointer ${index === actualImageIndex && "shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]"}`}
				>
					<Image
						src={image}
						alt={subtitle}
						quality={100}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						onClick={() => setActualImageIndex(index)}
					/>
				</div>
			))}
		</div>
	)
}
