
export default function Home() {
  return (
    <>
        <div className="absolute top-0 left-0 -z-10 bg-[var(--primary-pink)] img-mask" id="mask">
          {/** biome-ignore lint/performance/noImgElement: <explanation> */}
            <img src="./avatar-alba.png" alt="" className="w-[200px] h-[300px] 2xl:w-[300px] 2xl:h-[500px] translate-x-24 translate-y-20 2xl:translate-x-50 2xl:translate-y-10 rounded-2xl"/>
        </div>

        <svg width="0" height="0">
            <title>avatar-blop</title>
            <defs>
            <mask id="myMask">
            <path className="translate-x-0 -translate-y-10 2xl:translate-x-32 2xl:-translate-y-32" d="M319.8 -318.7C403.9 -149.5 454.5 -17.1 437.6 117.1C420.7 251.3 336.4 387.4 219.7 435.8C103 484.1 -46.1 444.8 -233.9 390.8C-421.7 336.8 -648.1 268.2 -691.5 140.1C-734.9 11.9 -595.4 -175.8 -449.6 -359.1C-303.9 -542.3 -151.9 -721.2 -17.1 -707.6C117.8 -693.9 235.6 -487.9 319.8 -318.7" fill="white"></path>
            </mask>
            </defs>
        </svg>

        <div className="w-1/4 flex flex-col gap-3">
            <span className="text-4xl font-semibold text-[var(--primary-green)]">SKIN AND BEAUTY</span>
            <span className="text-4xl font-semibold text-[var(--primary-green)]">CENTER</span>
            <span className="text-2xl text-right mt-4">in Bahia Blanca</span>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button className="cta-button">Reserva tu turno</button>
        </div>

      </>

  )
}
