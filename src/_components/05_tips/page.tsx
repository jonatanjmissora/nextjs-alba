import { SectionHeader } from "../section-header"
import { tipsHeader, tipsMock, TipType } from "@/_lib/tips-mock"
import { LeafImgs } from "../leaf-section"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTriggerRight,
	AccordionTriggerLeft,
} from "@/components/ui/accordion"
import { ImageKit } from "../image-kit"

export default function Tips() {
	const tips = tipsMock

	return (
		<section className="w-full min-h-[280dvh] 2xl:min-h-[250dvh] px-(--sm-layout-padding) 2xl:px-(--2xl-layout-padding) pt-20 pb-20 mb-[10dvh] relative bg-(--background-one)">
			<div id="tips01" className="w-full my-32 border border-transparent">
				<SectionHeader
					title="Nuestros tips del centro de belleza"
					subtitle="Tips"
					description={tipsHeader}
				/>
				<div className="w-full flex justify-between gap-20 pb-6">
					<TipCard1 tip={tips[0]} />
					<TipCard2 tip={tips[1]} />
				</div>
			</div>
			<LeafImgs />
		</section>
	)
}

const TipCard1 = ({ tip }: { tip: TipType }) => {
	return (
		<div id={tip.id} className="w-1/2 flex flex-col gap-10">
			<div className="flex flex-col gap-3 pl-8 pt-8">
				<AccordionElementRight content={tip.content} />
			</div>
			<div className="relative overflow-hidden w-full h-[70dvh] 2xl:h-[60dvh] rounded-lg custom-shadow">
				<ImageKit imageID={tip.image} />
			</div>
		</div>
	)
}

const TipCard2 = ({ tip }: { tip: TipType }) => {
	return (
		<div id={tip.id} className="w-1/2 flex flex-col gap-10">
			<div className="relative overflow-hidden w-full h-[70dvh] 2xl:h-[60dvh] rounded-lg custom-shadow">
				<ImageKit imageID={tip.image} />
			</div>
			<div className="flex flex-col gap-3 pr-8 pb-8">
				<AccordionElementLeft content={tip.content} />
			</div>
		</div>
	)
}

const AccordionElementRight = ({
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
					<AccordionTriggerRight className="w-full text-xl font-bold text-(--primary-green) header2 text-right">
						{item.faq}
					</AccordionTriggerRight>
					<AccordionContent className="flex flex-col gap-4 text-balance">
						<p className="text text-right">{item.answer}</p>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}

const AccordionElementLeft = ({
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
					<AccordionTriggerLeft className="w-full text-xl font-bold text-(--primary-green) header2 text-left">
						{item.faq}
					</AccordionTriggerLeft>
					<AccordionContent className="flex flex-col gap-4 text-balance">
						<p className="text text-left">{item.answer}</p>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
