import Image from "next/image"

export default function Certificates() {
	return (
        <div className="w-full flex justify-center items-center gap-4 pb-20">
            <div className="relative w-[240px] h-[160px] 2xl:w-[350px] 2xl:h-[200px] rounded-lg overflow-hidden hover:scale-150 transition-all duration-300 hover:z-10">
                <Image src="/testimonials/certificate1.jpg" alt="certificate1" quality={100} layout="fill" objectFit="cover"/>
            </div>
            <div className="relative w-[240px] h-[160px] 2xl:w-[350px] 2xl:h-[200px] rounded-lg overflow-hidden hover:scale-150 transition-all duration-300 hover:z-10">
                <Image src="/testimonials/certificate2.jpg" alt="certificate2" quality={100} layout="fill" objectFit="cover"/>
            </div>
            <div className="relative overflow-hidden w-[240px] h-[160px] 2xl:w-[350px] 2xl:h-[200px] rounded-lg hover:scale-150 transition-all duration-300 hover:z-10">
                <Image src="/testimonials/certificate3.jpg" alt="certificate3" quality={100} layout="fill" objectFit="cover"/>
            </div>
            <div className="relative overflow-hidden w-[240px] h-[160px] 2xl:w-[350px] 2xl:h-[200px] rounded-lg hover:scale-150 transition-all duration-300 hover:z-10">
                <Image src="/testimonials/certificate4.jpg" alt="certificate4" quality={100} layout="fill" objectFit="cover"/>
            </div>
        </div>)
}
