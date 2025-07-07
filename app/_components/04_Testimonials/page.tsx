
export default function page() {
  return (
		<div className="w-full">
			<h2 className="w-full text-center text-2xl 2xl:text-4xl font-semibold py-16 2xl:py-30">
				Nuestras clientas
			</h2>

			<div className="w-full h-[80dvh] relative pb-32">
				
				<ImageElement 
					src="./testimonials/testimonial-photo1.jpg" 
					alt="testimonial-photo1"
					className="w-[300px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] top-[10%] left-[25%] rotate-6 rounded object-cover"
					/>

				<ImageElement 
					src="./testimonials/testimonial-photo2.jpg" 
					alt="testimonial-photo2" 
					className="w-[300px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] top-[3%] left-[50%] -rotate-6 rounded object-cover"
					/>

				<ImageElement 
					src="./testimonials/testimonial01.png" 
					alt="testimonial01" 
					className="w-[200px] h-[80px] 2xl:w-[200px] 2xl:h-[300px] top-[0%] left-[5%] rotate-0 cover-contain"
					/>
				<ImageElement 
					src="./testimonials/testimonial02.png" 
					alt="testimonial02" 
					className="w-[200px] h-[100px] 2xl:w-[200px] 2xl:h-[300px] top-[20%] left-[15%] rotate-0 cover-contain"
					/>
				<ImageElement 
					src="./testimonials/testimonial03.png" 
					alt="testimonial03" 
					className="w-[200px] h-[80px] 2xl:w-[200px] 2xl:h-[300px] top-[40%] left-[5%] rotate-0 cover-contain"
					/>
				<ImageElement 
					src="./testimonials/testimonial04.png" 
					alt="testimonial04" 
					className="w-[200px] h-[80px] 2xl:w-[200px] 2xl:h-[300px] top-[60%] left-[15%] rotate-0 cover-contain"
					/>
				<ImageElement 
					src="./testimonials/testimonial05.png" 
					alt="testimonial05" 
					className="w-[200px] h-[80px] 2xl:w-[200px] 2xl:h-[300px] top-[80%] left-[5%] rotate-0 cover-contain"
					/>

				<ImageElement 
					src="./testimonials/testimonial01.png" 
					alt="testimonial06" 
					className="w-[200px] h-[80px] 2xl:w-[200px] 2xl:h-[300px] top-[0%] right-[5%] rotate-0 cover-contain"
					/>
				<ImageElement 
					src="./testimonials/testimonial02.png" 
					alt="testimonial02" 
					className="w-[200px] h-[100px] 2xl:w-[200px] 2xl:h-[300px] top-[20%] right-[15%] rotate-0 cover-contain"
					/>
				<ImageElement 
					src="./testimonials/testimonial03.png" 
					alt="testimonial03" 
					className="w-[200px] h-[80px] 2xl:w-[200px] 2xl:h-[300px] top-[40%] right-[5%] rotate-0 cover-contain"
					/>
				<ImageElement 
					src="./testimonials/testimonial04.png" 
					alt="testimonial04" 
					className="w-[200px] h-[80px] 2xl:w-[200px] 2xl:h-[300px] top-[60%] right-[15%] rotate-0 cover-contain"
					/>
				<ImageElement 
					src="./testimonials/testimonial05.png" 
					alt="testimonial05" 
					className="w-[200px] h-[80px] 2xl:w-[200px] 2xl:h-[300px] top-[80%] right-[5%] rotate-0 cover-contain"
					/>
		
			</div>
		</div>
	)
}

const ImageElement = ({src, alt, className}: {src: string, alt: string, className: string}) => {
	return (
		<img 
			src={src} 
			alt={alt} 
			className={`shadow-[8px_8px_10px_rgba(0,0,0,0.5)]  absolute ${className}`}
			/>
	)
}
