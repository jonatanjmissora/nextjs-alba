import { tipsHeader, tipsMock, TipType } from "@/_lib/tips-mock"
import { SectionHeader } from "../section-header"
import { MovilLeafImgs } from "../layout/movil/movil-leaf-imgs"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTriggerLeft,
} from "@/components/ui/accordion"
import { ImageKit } from "../image-kit"

export default function MovilTips() {
	const tips = tipsMock

	return (
		<section className="w-full flex justify-center items-start relative pb-[300px]">
			<MovilLeafImgs />
			<div id="tips" className="w-full relative px-6 pt-12">
				<SectionHeader
					title="Nuestros tips del centro de belleza"
					description={tipsHeader}
				/>
				<div className="w-full flex flex-col gap-10 justify-between items-center pb-6">
					<TipCard tip={tips[0]} />
					<TipCard tip={tips[1]} />
				</div>
			</div>
		</section>
	)
}

const TipCard = ({ tip }: { tip: TipType }) => {
	return (
		<div className="w-full relative mt-20">
			<div className="relative overflow-hidden  w-full h-[200px] rounded-t-lg custom-shadow">
				<ImageKit imageID={tip.image} />
			</div>
			<AccordionElement content={tip.content} />
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
			className="w-full border border-[#444]/20 rounded-b-lg bg-(--background-one) p-4 custom-shadow"
			defaultValue="item-1"
		>
			{content.map((item, index) => (
				<AccordionItem key={item.faq} value={`item-${index + 1}`}>
					<AccordionTriggerLeft className="w-full text-base font-semibold text-(--primary-green)">
						{item.faq}
					</AccordionTriggerLeft>
					<AccordionContent className="flex flex-col text-xs gap-4 text-balance text-[#444]/85">
						<p>{item.answer}</p>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
