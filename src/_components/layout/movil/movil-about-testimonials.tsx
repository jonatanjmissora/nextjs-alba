import Image from "next/image"

export default function MovilTestimonials() {
	return (
		<div className="w-full h-screen relative flex items-center">
			{/* <ImageElement
				src="/testimonials/testimonial-photo2.jpg"
				alt="testimonial-photo2"
				className="w-full h-[400px] rotate-10 rounded"
			/> */}
			<ImageElement
				src="/testimonials/testimonial04.png"
				alt="testimonial04"
				className="w-[250px] h-[70px] top-0 left-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial05.png"
				alt="testimonial05"
				className="w-[250px] h-[80px] top-[12%] right-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial04.png"
				alt="testimonial04"
				className="w-[270px] h-[70px] top-[25%] left-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial04.png"
				alt="testimonial04"
				className="w-[300px] h-[80px] bottom-[12%] left-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial05.png"
				alt="testimonial05"
				className="w-[290px] h-[80px] bottom-0 right-0 absolute"
			/>
			<ImageElement
				src="/testimonials/testimonial04.png"
				alt="testimonial04"
				className="w-[310px] h-[80px] bottom-[24%] right-0 absolute"
			/>
		</div>
	)
}

const ImageElement = ({
	src,
	alt,
	className,
}: {
	src: string
	alt: string
	className: string
}) => {
	return (
		<div className={`shadow-[8px_8px_10px_rgba(0,0,0,0.5)] ${className}`}>
			<div className="relative w-full h-full">
				<Image
					src={src}
					alt={alt}
					quality={100}
					fill
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
		</div>
	)
}
