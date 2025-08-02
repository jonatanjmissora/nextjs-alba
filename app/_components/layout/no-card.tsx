export default function NoCard({
	text,
}: {
	text: "al carrito" | "a favoritos"
}) {
	return (
		<div
			className={`${text === "al carrito" ? "w-full sm:w-[70%]" : "w-full"} flex flex-col min-h-[75dvh] gap-6 justify-center items-center py-0 sm:py-10 2xl:py-20`}
		>
			<span className="subtitle text-center text-balance">
				agrega productos o servicios {text}
			</span>
			<div className="flex gap-4">
				<a className="cta-button-inv px-6 py-2 text-center" href="/#services">
					ver servicios
				</a>
				<a className="cta-button-inv px-6 py-2 text-center" href="/#shop">
					ver productos
				</a>
			</div>
		</div>
	)
}
