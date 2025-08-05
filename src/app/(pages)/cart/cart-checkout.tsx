import { productsData } from "@/_lib/products"
import { servicesData } from "@/_lib/services"
import { useStore } from "@/_lib/store"

export default function CartCheckout() {
	const { cartStore } = useStore()
	const sevices = servicesData
	const products = productsData
	const servicesCart = cartStore.filter(cart => cart.id[0] === "s")
	const productsCart = cartStore.filter(cart => cart.id[0] === "p")
	const cart = [...servicesCart, ...productsCart]

	const total = cart.reduce(
		(total, element) =>
			total +
			Number(
				element.quantity *
					(sevices.find(service => service.id === element.id)?.price ||
						products.find(product => product.id === element.id)?.price ||
						0)
			),
		0
	)

	return (
		<div className="flex-1 max-h-[80dvh] 2xl:max-h-[75dvh] flex flex-col justify-center items-center gap-12 flex-wrap p-4 py-8 2xl:p-6 my-10 2xl:my-20 border rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] bg-[var(--background-three)] border-[#d685922a]">
			<h2 className="subtitle font-semibold text-[var(--primary-green)] text-center w-full">
				Resumen de compra
			</h2>
			<p className="text-center w-full header font-semibold">
				{cartStore.length} item(s)
			</p>
			<div className="flex justify-center gap-4 items-center">
				<span className="subtitle font-semibold">Total</span>
				<span className="subtitle font-bold text-black">
					${total.toFixed(2)}
				</span>
			</div>
			<button className="w-full cta-button header font-semibold py-3">
				Confirmar
			</button>
		</div>
	)
}
