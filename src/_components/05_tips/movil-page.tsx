import Image from "next/image"
import { tipsMock, TipType } from "@/_lib/tips-mock"
import { SectionHeader } from "../section-header"
import { MovilLeafImgs } from "../layout/movil/movil-leaf-imgs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MovilTips() {
	const tips = tipsMock

	return (
		<section className="w-full flex justify-center items-start relative pb-[300px]">
			<MovilLeafImgs />
			<div id="tips" className="w-full relative px-6 pt-12">
				<SectionHeader
					title="Nuestros tips del centro de belleza"
					subtitle="Tips"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>
				<div className="w-full flex flex-col gap-20 justify-between items-center pb-6">
					<TipCard tip={tips[0]} />
					<TipCard tip={tips[1]} />
				</div>
			</div>
		</section>
	)
}


const TipCard = ({tip}: {tip: TipType}) => {
	return (
		<div className="w-full flex flex-col gap-12">
						<div className="flex flex-col gap-3">
							{/* <h3 className="w-full header font-semibold text-[var(--primary-green)]">
								{tip.title}
							</h3> */}
							<AccordionElement content={tip.content}/>
						</div>
						<div className="relative overflow-hidden w-full h-[500px] rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)]">
							<Image
								src={tip.image}
								alt={tip.title}
								quality={100}
								fill
								className="object-cover"
							/>
						</div>
					</div>
	)
}

const AccordionElement = ({content}: {content: {faq: string, answer: string}[]}) => {

	return (
		<Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      
	  {content.map((item, index) => (
			<AccordionItem value={`item-${index + 1}`}>
				<AccordionTrigger className="w-full header font-semibold text-[var(--primary-green)]">{item.faq}</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance text-[#444]/85">
					<p>{item.answer}</p>
				</AccordionContent>
			</AccordionItem>
		))}
      
    </Accordion>
	)
}