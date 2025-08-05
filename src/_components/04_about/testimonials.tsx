import Image from "next/image"

export default function Testimonials() {
	return (
		<div className="w-full h-[80dvh] relative pb-32">
			<ImageElement
				src="/testimonials/testimonial-photo1.jpg"
				alt="testimonial-photo1"
				className="w-[330px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] top-[10%] left-[25%] 2xl:left-[30%] rotate-6 rounded"
			/>

			<ImageElement
				src="/testimonials/testimonial-photo2.jpg"
				alt="testimonial-photo2"
				className="w-[330px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] top-[3%] left-[50%] -rotate-6 rounded"
			/>

			{/* LEFT TESTIMONIALS */}
			<ImageElement
				src="/testimonials/testimonial01.png"
				alt="testimonial01"
				className="w-[250px] h-[80px] 2xl:w-[380px] 2xl:h-[120px] top-[0%] 2xl:top-[10%] left-[5%] rotate-0"
			/>
			<ImageElement
				src="/testimonials/testimonial02.png"
				alt="testimonial02"
				className="w-[260px] h-[100px] 2xl:w-[310px] 2xl:h-[120px] top-[20%] 2xl:top-[25%] left-[15%] rotate-0"
			/>
			<ImageElement
				src="/testimonials/testimonial03.png"
				alt="testimonial03"
				className="w-[280px] h-[80px] 2xl:w-[350px] 2xl:h-[100px] top-[40%] left-[5%] rotate-0"
			/>
			<ImageElement
				src="/testimonials/testimonial04.png"
				alt="testimonial04"
				className="w-[300px] h-[80px] 2xl:w-[380px] 2xl:h-[100px] top-[60%] 2xl:top-[55%] left-[15%] rotate-0"
			/>
			<ImageElement
				src="/testimonials/testimonial05.png"
				alt="testimonial05"
				className="w-[290px] h-[80px] 2xl:w-[350px] 2xl:h-[100px] top-[80%] 2xl:top-[70%] left-[5%] rotate-0"
			/>

			{/* 	RIGHT TESTIMONIALS 		*/}
			<ImageElement
				src="/testimonials/testimonial01.png"
				alt="testimonial06"
				className="w-[250px] h-[80px] 2xl:w-[380px] 2xl:h-[120px] top-[0%] 2xl:top-[10%] right-[5%] rotate-0"
			/>
			<ImageElement
				src="/testimonials/testimonial02.png"
				alt="testimonial02"
				className="w-[260px] h-[100px] 2xl:w-[310px] 2xl:h-[120px] top-[20%] 2xl:top-[25%] right-[15%] rotate-0"
			/>
			<ImageElement
				src="/testimonials/testimonial03.png"
				alt="testimonial03"
				className="w-[280px] h-[80px] 2xl:w-[350px] 2xl:h-[100px] top-[40%] right-[5%] rotate-0"
			/>
			<ImageElement
				src="/testimonials/testimonial04.png"
				alt="testimonial04"
				className="w-[300px] h-[80px] 2xl:w-[380px] 2xl:h-[100px] top-[60%] 2xl:top-[55%] right-[15%] rotate-0"
			/>
			<ImageElement
				src="/testimonials/testimonial05.png"
				alt="testimonial05"
				className="w-[290px] h-[80px] 2xl:w-[350px] 2xl:h-[100px] top-[80%] 2xl:top-[70%] right-[5%] rotate-0"
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
		<div
			className={`overflow-hidden shadow-[8px_8px_10px_rgba(0,0,0,0.5)]  absolute ${className}`}
		>
			<Image
				src={src}
				alt={alt}
				quality={100}
				fill
				style={{
					objectFit: 'cover'
				}}
			/>
		</div>
	)
}
