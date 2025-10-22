import { SectionHeader } from "../section-header"
import Image from "next/image"
import { tipsMock, TipType } from "@/_lib/tips-mock"
import { LeafImgs } from "../leaf-section"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export default function Tips() {
	const tips = tipsMock

	return (
		<section className="w-full min-h-[280dvh] 2xl:min-h-[250dvh] px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] pt-20 pb-20 mb-[10dvh] relative">
			<div className="w-full h-[20dvh] bg-transparent"></div>
			<div id="tips01" className="w-full my-32 border border-transparent">
				<SectionHeader
					title="Nuestros tips del centro de belleza"
					subtitle="Tips"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
				/>
				<div className="w-full flex justify-between gap-20 pb-6">
					<TipCard1 tip={tips[0]} />
					<TipCard2 tip={tips[1]} />
				</div>
			</div>
			<div className="w-full h-[40dvh] 2xl:h-[20dvh] bg-transparent"></div>
			<LeafImgs />
		</section>
	)
}

const TipCard1 = ({ tip }: { tip: TipType }) => {
	return (
		<div id={tip.id} className="w-1/2 flex flex-col gap-10">
			<div className="flex flex-col gap-3 tip-border-up pl-8 pt-8">
				<AccordionElement content={tip.content} />
			</div>
			<div className="relative overflow-hidden w-full h-[80dvh] 2xl:h-[70dvh] rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)]">
				<Image
					src={tip.image}
					alt={tip.title}
					quality={100}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
		</div>
	)
}

const TipCard2 = ({ tip }: { tip: TipType }) => {
	return (
		<div id={tip.id} className="w-1/2 flex flex-col gap-10">
			<div className="relative overflow-hidden w-full h-[80dvh] 2xl:h-[70dvh] rounded-lg shadow-[5px_5px_7px_0_rgba(0,0,0,0.35)]">
				<Image
					src={tip.image}
					alt={tip.title}
					quality={100}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</div>
			<div className="flex flex-col gap-3 tip-border-down pr-8 pb-8">
				<AccordionElement content={tip.content} />
			</div>
		</div>
	)
}

const AccordionElement = ({
	content,
}: {
	content: { faq: string; answer: string }[]
}) => {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full"
			defaultValue="item-1"
		>
			{content.map((item, index) => (
				<AccordionItem key={item.faq} value={`item-${index + 1}`}>
					<AccordionTrigger className="w-full text-xl font-bold text-[var(--primary-green)]">
						{item.faq}
					</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance text-[#444]/85">
						<p>{item.answer}</p>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
