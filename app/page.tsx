import Footer from "./_components/footer";
import Header from "./_components/header";

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full fixed top-0 left-0 right-0 z-50 p-8 pt-12 px-32 shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
        <Header />
      </div>
      
      <section className="w-full min-h-[80dvh] flex justify-center items-center relative">
        
        <div className="absolute top-0 left-0 bg-pink-500/50 img-mask" id="mask">
          <img src="./alba.jpg" alt="" className="w-[300px] h-[500px] translate-x-50 translate-y-10"/>
        </div>
        <svg width="0" height="0">
          <defs>
            <mask id="myMask">
            <path className="translate-x-32 translate-y-32" d="M319.8 -318.7C403.9 -149.5 454.5 -17.1 437.6 117.1C420.7 251.3 336.4 387.4 219.7 435.8C103 484.1 -46.1 444.8 -233.9 390.8C-421.7 336.8 -648.1 268.2 -691.5 140.1C-734.9 11.9 -595.4 -175.8 -449.6 -359.1C-303.9 -542.3 -151.9 -721.2 -17.1 -707.6C117.8 -693.9 235.6 -487.9 319.8 -318.7" fill="white"></path>
            </mask>
          </defs>
        </svg>

        HERO

      </section>

      <section className="w-full min-h-screen bg-[#f78da7] relative">
        {/* TRANSITION TO NEXT section */}
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="absolute -top-[60%] left-0"><path d="M 0,400 L 0,150 C 127.67857142857142,180.07142857142856 255.35714285714283,210.14285714285714 368,224 C 480.64285714285717,237.85714285714286 578.2500000000001,235.49999999999997 707,215 C 835.7499999999999,194.50000000000003 995.6428571428571,155.85714285714286 1123,142 C 1250.357142857143,128.14285714285714 1345.1785714285716,139.07142857142856 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#f78da7" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </section>
      
      <div className="w-full py-20 px-32 bg-[var(--background-green)]">
        <Footer />
      </div>
    </main>
  );
}
