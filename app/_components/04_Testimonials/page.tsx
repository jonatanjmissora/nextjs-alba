
export default function page() {
  return (
		<div className="w-full">
			<h2 className="w-full text-center text-2xl 2xl:text-4xl font-semibold py-16 2xl:py-30">
				Nuestras clientas
			</h2>

			<div className="w-full h-[80dvh] relative pb-32">
				
          <img src="./testimonial-photo1.jpg" alt="" className="absolute top-[5%] left-[25%] rotate-12 w-[300px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] rounded-lg shadow-[8px_8px_10px_rgba(0,0,0,0.5)] object-cover"/>
          <img src="./testimonial-photo2.jpg" alt="" className="absolute top-[0%] right-[25%] -rotate-12 w-[300px] h-[400px] 2xl:w-[400px] 2xl:h-[600px] rounded-lg shadow-[8px_8px_10px_rgba(0,0,0,0.5)] object-cover"/>
        {/* <div><img src="./testimonial-photo3.jpg" alt="" /></div> 
        <div><img src="./testimonial-photo4.jpg" alt="" /></div>
        <div><img src="./testimonial-photo5.jpg" alt="" /></div>
        <div><img src="./testimonial-photo6.jpg" alt="" /></div> */}
			</div>
		</div>
	)
}
