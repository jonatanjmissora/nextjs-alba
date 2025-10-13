import { servicesMock } from "@/_lib/services-mock"
import { productsMock } from "@/_lib/products-mock"
import { useStore } from "@/_lib/store"
import { formatPrice } from "@/_lib/utils"
import Link from "next/link"

export default function CartCheckout() {
	const { cartStore } = useStore()
	const services = servicesMock
	const products = productsMock
	const cartTotalArray = cartStore.map(cart => {
		if (Number(cart.id) < 100) {
			const service = services.find(service => service.id === Number(cart.id))
			if (service) return service?.price * cart.quantity
		}
		if (Number(cart.id) >= 100) {
			const product = products.find(product => product.id === Number(cart.id))
			if (product) return product?.price * cart.quantity
		}
		return 0
	})
	const total = cartTotalArray.reduce((total, element) => total + element, 0)

	return (
		<div className="flex-1 max-h-[80dvh] 2xl:max-h-[75dvh] flex flex-col justify-center items-center gap-6 flex-wrap p-4 py-8 2xl:p-6 my-10 2xl:my-20 border rounded-tr-4xl rounded-bl-4xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.15)] bg-[var(--background-three)] border-[#d685922a]">
			<h2 className="subtitle font-semibold text-[var(--primary-green)] text-center w-full">
				Resumen de compra
			</h2>
			<p className="text-center w-full header font-semibold">
				{cartStore.length} item(s)
			</p>
			<div className="flex justify-center gap-4 items-center">
				<span className="subtitle font-semibold">Total</span>
				<span className="subtitle font-bold text-black">
					$ {formatPrice(total)}
				</span>
			</div>
			<CartCheckoutButton total={total} />
			<span className="text-sm text-[#444]/75 font-semibold tracking-wider text-pretty">
				Se generá un mensaje de whatsapp 📱 con el detalle del pedido, con el
				fin de coordinar el turno o entrega. Desde ya muchas gracias! 🖐
			</span>
		</div>
	)
}

const CartCheckoutButton = ({ total }: { total: number }) => {
	const { cartStore } = useStore()
	const services = servicesMock
	const products = productsMock
	const phone = "5492914742802"
	const mensaje = `
Hola! Alba Garcia Estetica Integral\n
Detalles de la orden:
${cartStore.map(cart => {
	if (Number(cart.id) < 100) {
		const service = services.find(service => service.id === Number(cart.id))
		if (service) return `${service?.subtitle} x${cart.quantity} \n`
	}
	if (Number(cart.id) >= 100) {
		const product = products.find(product => product.id === Number(cart.id))
		if (product) return `${product?.subtitle} x${cart.quantity} \n`
	}
	return ""
})}
Total: $ ${formatPrice(total)}
`
	return (
		<Link
			href={`https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`}
			target="_blank"
			className="w-full text-center mt-12 cta-button header font-semibold py-3"
		>
			Confirmar
		</Link>
	)
}
