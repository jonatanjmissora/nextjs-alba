import { ImageKit } from "@/_components/image-kit"

export default function MovilTestimonials() {
	return (
		<div className="w-full h-screen relative flex items-center">
			<ImageElement
				src="/testimonials/testimonial04.png"
				className="w-[250px] h-[70px] top-0 left-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial05.png"
				className="w-[250px] h-[80px] top-[12%] right-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial04.png"
				className="w-[270px] h-[70px] top-[25%] left-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial04.png"
				className="w-[300px] h-[80px] bottom-[12%] left-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial05.png"
				className="w-[290px] h-[80px] bottom-0 right-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial04.png"
				className="w-[310px] h-[80px] bottom-[24%] right-0 absolute"
			/>
		</div>
	)
}

const ImageElement = ({
	src,
	className,
}: {
	src: string
	className: string
}) => {
	return (
		<div className={`custom-shadow ${className}`}>
			<div className="relative w-full h-full">
				<ImageKit imageID={src} />
			</div>
		</div>
	)
}
