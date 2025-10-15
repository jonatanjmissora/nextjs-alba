import MovilHome from "@/_components/01_home/movil-page"
import Home from "@/_components/01_home/page"
import MovilServices from "@/_components/02_services/movil-page"
import ServicesSection from "@/_components/02_services/page"
import MovilProducts from "@/_components/03_products/movil-page"
import ProductsSection from "@/_components/03_products/page"
import MovilAbout from "@/_components/04_about/movil-page"
import About from "@/_components/04_about/page"
import MovilTips from "@/_components/05_tips/movil-page"
import Tips from "@/_components/05_tips/page"
import Footer from "@/_components/footer"
import Header from "@/_components/header/header"
import MovilFooter from "@/_components/layout/movil/movil-footer"
import MovilHeader from "@/_components/layout/movil/movil-header"

export default function HomePage() {
	return (
		<main className="w-full relative">
			<Mobil />

			<Desktop />
		</main>
	)
}

const Desktop = () => {
	return (
		<div className="hidden sm:block w-full">
			<div
				id="home01"
				className="absolute top-0 left-0 z-50 w-full p-6 px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] 2xl:pb-8 2xl:pt-12 text-sm 2xl:text-base shadow-[0_0_5px_0_rgba(0,0,0,0.05)]"
			>
				<Header />
			</div>

			<section className="w-full min-h-[100dvh] 2xl:min-h-[100dvh] flex justify-center items-center relative">
				<Home />
			</section>

			{/* <WaveContainer> */}
			<ServicesSection />
			{/* </WaveContainer> */}

			<ProductsSection />

			{/* <WaveContainer> */}
			<About />
			{/* </WaveContainer> */}

			<Tips />

			<Footer />
		</div>
	)
}
const Mobil = () => {
	return (
		<div className="block sm:hidden">
			<MovilHeader />

			<MovilHome />

			{/* <MovilWaveContainer top="-top-[57%]" bottom="-bottom-[57%]"> */}
			<MovilServices />
			{/* </MovilWaveContainer> */}

			<MovilProducts />

			{/* <MovilWaveContainer top="-top-[57%]" bottom="-bottom-[57%]"> */}
			<MovilAbout />
			{/* </MovilWaveContainer> */}

			<MovilTips />

			<MovilFooter />
		</div>
	)
}
