import Footer from "./_components/footer"
import Header from "./_components/header"
import Home from "./_components/01_Home/page"
import Services from "./_components/02_Services/page"
import Shop from "./_components/03_Shop/page"
import Testimonials from "./_components/04_Testimonials/page"
import Faqs from "./_components/05_Faqs/page"
import WaveContainer from "./_components/wave-container"

export default function Page() {
	return (
		<main className="w-full relative">
			<div className="w-full absolute z-10 top-0 left-0 right-0 p-6 px-32 2xl:pb-8 2xl:pt-12 2xl:px-40 text-sm 2xl:text-base shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
				<Header />
			</div>

			<section
				id="home"
				className="w-full min-h-screen 2xl:min-h-[90dvh] flex justify-center items-center relative"
			>
				<Home />
			</section>

			<section
				id="services"
				className="w-full bg-[var(--primary-pink)] relative"
			>
				<WaveContainer>
					<Services />
				</WaveContainer>
			</section>

			<section id="shop" className="w-full px-32 my-[20dvh] relative">
				<Shop />
			</section>

			<section
				id="testimonials"
				className="w-full bg-[var(--primary-pink)] relative"
			>
				<WaveContainer>
					<Testimonials />
				</WaveContainer>
			</section>

			<section
				id="faqs"
				className="w-full min-h-screen px-32 mt-[20dvh] relative"
			>
				<Faqs />
			</section>

			<div
				id="contact"
				className="w-full bg-[var(--primary-pink)] relative pb-6"
			>
				<Footer />
			</div>
		</main>
	)
}
