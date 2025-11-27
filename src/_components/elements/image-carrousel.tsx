import { ImageKit } from "../image-kit"

export default function ImageCarrousel({
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
				<button
					type="button"
					key={image}
					className={`size-[60px] sm:size-[50px] 2xl:size-[70px] overflow-hidden relative rounded-tl-[1rem] rounded-br-[1rem] cursor-pointer ${index === actualImageIndex && "custom-shadow"}`}
					onClick={() => setActualImageIndex(index)}
				>
					<ImageKit imageID={image} />
				</button>
			))}
		</div>
	)
}
