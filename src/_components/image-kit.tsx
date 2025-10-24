import { Image } from "@imagekit/next"

export const ImageKit = ({
	imageID,
	priority = false,
	className,
}: {
	imageID: string
	priority?: boolean
	className?: string
}) => {
	const urlEndp = "https://ik.imagekit.io/jjmissora/Alba"

	return (
		<Image
			urlEndpoint={`${urlEndp}`}
			src={`${imageID}`}
			alt={"ageID"}
			fill
			loading={priority ? "eager" : "lazy"}
			className={`object-cover ${className}`}
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
		/>
	)
}
