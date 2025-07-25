import { Product } from "@/app/_lib/products"
import { Service } from "@/app/_lib/services"
import Image from "next/image"

export default function SinglePageCarrousel({
        element,
        actualImageIndex,
        setActualImageIndex,
    }: {
        element: Service | Product
        actualImageIndex: number
        setActualImageIndex: (index: number) => void
    }) {
        return (
            <div className="flex gap-2">
                {element.carousel.map((image, index) => (
                    <div
                        key={image}
                        className={`w-[70px] h-[70px] overflow-hidden relative rounded-tl-[1rem] rounded-br-[1rem] cursor-pointer ${index === actualImageIndex && "shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)]"}`}
                    >
                        <Image
                            src={image}
                            alt={element.title}
                            quality={100}
                            layout="fill"
                            objectFit="cover"
                            onClick={() => setActualImageIndex(index)}
                        />
                    </div>
                ))}
            </div>
        )
    }

