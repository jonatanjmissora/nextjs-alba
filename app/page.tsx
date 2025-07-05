import Footer from "./_components/footer";
import Header from "./_components/header";
import Home from "./_components/Home/page";
import Services from "./_components/Services/page";

export default function Page() {
  return (
    <main className="w-full">
      <div className="w-full fixed top-0 left-0 right-0 z-50 p-6 2xl:p-8 text-sm 2xl:text-base 2xl:pt-12 px-32 shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
        <Header />
      </div>
      
      <section id="home" className="w-full min-h-[95dvh] 2xl:min-h-[80dvh] flex justify-center items-center relative">
        <Home />
      </section>

      <section id="services" className="w-full min-h-screen bg-[var(--primary-pink)] relative">
        <Services />
      </section>
      
      <div className="w-full py-20 px-32 bg-[var(--background-green)]">
        <Footer />
      </div>
    </main>
  );
}
