
export default function Home() {
  return (
    <>
        <div className="absolute top-0 left-0 -z-10 bg-[var(--primary-pink)] pt-24 pl-32 pr-12 rounded-br-[45%] overflow-hidden">
          {/** biome-ignore lint/performance/noImgElement: <explanation> */}
            <img src="./avatar-alba.png" alt="" className="w-[200px] h-[300px] 2xl:w-[300px] 2xl:h-[500px]"/>
        </div>

        <div className="w-1/4 flex flex-col gap-3">
            <span className="text-4xl font-semibold text-[var(--primary-green)]">SKIN AND BEAUTY</span>
            <span className="text-4xl font-semibold text-[var(--primary-green)]">CENTER</span>
            <span className="text-2xl text-right mt-4">in Bahia Blanca</span>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button className="cta-button">Reserva tu turno</button>
        </div>

        <div className="absolute bottom-[10dvh] -right-[5dvw] -z-10 bg-[var(--primary-pink)] rounded-tl-[45%] pt-12">
            <img src="./alba-alpha.png" alt="" className="w-[400px] h-[500px] 2xl:w-[300px] 2xl:h-[500px]"/>
        </div>

      </>

  )
}
