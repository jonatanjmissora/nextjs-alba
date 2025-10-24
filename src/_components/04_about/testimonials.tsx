import { ImageKit } from "../image-kit"

export default function Testimonials() {
	return (
		<div className="w-full h-[80dvh] relative pb-32">
			<ImageElement
				src="/testimonials/testimonial-photo1.webp"
				className="w-[330px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] top-[10%] left-[25%] 2xl:left-[30%] rotate-6 rounded"
			/>

			<ImageElement
				src="/testimonials/testimonial-photo2.webp"
				className="w-[330px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] top-[3%] left-[50%] -rotate-6 rounded"
			/>

			{/* LEFT TESTIMONIALS */}
			<ImageElement
				src="/testimonials/testimonial01.png"
				className="w-[290px] h-[80px] 2xl:w-[380px] 2xl:h-[120px] top-[0%] 2xl:top-[10%] left-[5%] rotate-0"
			/>

			<ImageElement
				src="/testimonials/testimonial03.png"
				className="w-[320px] h-[80px] 2xl:w-[350px] 2xl:h-[100px] top-[40%] left-[0%] rotate-0"
			/>

			<ImageElement
				src="/testimonials/testimonial05.png"
				className="w-[310px] h-[80px] 2xl:w-[350px] 2xl:h-[100px] top-[80%] 2xl:top-[70%] left-[5%] rotate-0"
			/>

			{/* 	RIGHT TESTIMONIALS 		*/}
			<ImageElement
				src="/testimonials/testimonial01.png"
				className="w-[290px] h-[80px] 2xl:w-[380px] 2xl:h-[120px] top-[0%] 2xl:top-[10%] right-[5%] rotate-0"
			/>

			<ImageElement
				src="/testimonials/testimonial03.png"
				className="w-[320px] h-[80px] 2xl:w-[350px] 2xl:h-[100px] top-[40%] right-[0%] rotate-0"
			/>

			<ImageElement
				src="/testimonials/testimonial05.png"
				className="w-[310px] h-[80px] 2xl:w-[350px] 2xl:h-[100px] top-[80%] 2xl:top-[70%] right-[5%] rotate-0"
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
		<div
			className={`overflow-hidden shadow-[8px_8px_10px_rgba(0,0,0,0.5)]  absolute ${className}`}
		>
			<ImageKit imageID={src} />
		</div>
	)
}
