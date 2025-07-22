import Footer from "./_components/footer"
import Header from "./_components/header/header"
import Home from "./_components/01_Home/page"
import Services from "./_components/02_Services/page"
import Shop from "./_components/03_Shop/page"
import Faqs from "./_components/05_Faqs/page"
import WaveContainer from "./_components/wave-container"
import About from "./_components/04_About/page"
import HomeMovil from "./_components/01_Home/movil-page"
import MovilHome from "./_components/01_Home/movil-page"
import MovilServices from "./_components/02_Services/movil-page"
import MovilShop from "./_components/03_Shop/movil-page"
import MovilAbout from "./_components/04_About/movil-page"
import MovilFaqs from "./_components/05_Faqs/movil-page"
import MovilFooter from "./_components/layout/movil/movil-footer"
import MovilWaveContainer from "./_components/layout/movil/movil-wave-container"
import MovilHeader from "./_components/layout/movil/movil-header"

export default function Page() {
	return (
		<main className="w-full relative">
			<div className="absolute top-0 left-0 z-50 w-full p-8 sm:px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] 2xl:pb-8 2xl:pt-12">
				<MovilHeader />
			</div>

			<section className="w-full flex justify-center items-start relative px-6">
				<MovilHome />
			</section>

			<section className="w-full min-h-[90dvh] bg-[var(--primary-pink)] flex justify-center items-start relative mt-[15dvh]">
				<MovilWaveContainer top="-top-[58%]" bottom="-bottom-[58%]">
					<MovilServices />
				</MovilWaveContainer>
			</section>

			<section className="w-full min-h-[90dvh] flex justify-center items-start relative mt-[25dvh] px-6">
				<MovilShop />
			</section>

			<section className="w-full min-h-[90dvh] flex justify-center items-start relative mt-[25dvh]">
				<MovilWaveContainer top="-top-[58%]" bottom="-bottom-[58%]">
					<MovilAbout />
				</MovilWaveContainer>
			</section>

			<section className="w-full min-h-[90dvh] flex justify-center items-start relative mt-[25dvh] px-6">
				<MovilFaqs />
			</section>

			<div className="w-full bg-[var(--primary-pink)] relative mt-[25dvh] px-6">
				<MovilFooter />
			</div>

			{/* <section
				id="home"
				className="w-full min-h-[85dvh] 2xl:min-h-[90dvh] flex justify-center items-center relative mb-[12rem]"
			>
				<Home />
			</section>

			<section className="w-full bg-[var(--primary-pink)] relative">
				<WaveContainer>
					<Services />
				</WaveContainer>
			</section>

			<section className="w-full px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] my-[20dvh] relative">
				<Shop />
			</section>

			<section className="w-full bg-[var(--primary-pink)] relative">
				<WaveContainer>
					<About />
				</WaveContainer>
			</section>

			<section className="w-full min-h-[280dvh] 2xl:min-h-[250dvh] px-[var(--sm-layout-padding)] 2xl:px-[var(--2xl-layout-padding)] my-[20dvh] mb-[10dvh] relative">
				<Faqs />
			</section>

			<div className="w-full bg-[var(--primary-pink)] relative pb-6">
				<Footer />
			</div> */}
		</main>
	)
}
