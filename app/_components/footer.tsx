import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col">
            <WaveSVG className="w-full h-[140%] absolute -top-[110%] left-0 -z-10" />
            <div className="w-full px-32">
                <div className="flex justify-between gap-2">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-[var(--primary-green)]">Tienda</h3>
                        <nav className="flex flex-col gap-2 text-[#333] text-sm px-2">
                            <Link href="/category01">Categoria 1</Link>
                            <Link href="/category02">Categoria 2</Link>
                            <Link href="/category03">Categoria 3</Link>
                            <Link href="/category04">Categoria 4</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-[var(--primary-green)]">Servicios</h3>
                        <nav className="flex flex-col gap-2 text-[#333] text-sm px-2">
                            <Link href="/service01">Servicio 1</Link>
                            <Link href="/service02">Servicio 2</Link>
                            <Link href="/service03">Servicio 3</Link>
                            <Link href="/service04">Servicio 4</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-[var(--primary-green)]">Preguntas</h3>
                        <nav className="flex flex-col gap-2 text-[#333] text-sm px-2">
                            <Link href="/faq01">Pregunta 1</Link>
                            <Link href="/faq02">Pregunta 2</Link>
                            <Link href="/faq03">Pregunta 3</Link>
                            <Link href="/faq04">Pregunta 4</Link>
                        
                        </nav>
                    </div>

                    <div className="flex flex-col gap-2 w-1/2">
                        <h3 className="font-semibold text-[var(--primary-green)]">Suscripción</h3>
                        <div className="flex flex-col gap-3 text-[#333] text-sm px-2">
                            <p>Recibe las últimas novedades. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, reprehenderit.</p>
                            <div className="flex items-center gap-20">
                                <div className="flex gap-1">
                                    <input type="email" placeholder="Correo electrónico" className="p-2 px-6 bg-[var(--background-one)] rounded-lg w-64"/>
                                    <button className="p-2 px-6 bg-[var(--primary-green)] rounded-lg text-[#eee]">Enviar</button>
                                </div>
                            </div>
                            <nav className="flex gap-6">
                                <Link href="/social01" className="text-[var(--primary-green)]"><WhatsApp /></Link>
                                <Link href="/social02" className="text-[var(--primary-green)]"><Instagram /></Link>
                                <Link href="/social03" className="text-[var(--primary-green)]"><Facebook /></Link>
                                <Link href="/social04" className="text-[var(--primary-green)]"><Mail /></Link>
                            </nav>
                        </div>
                    </div>

                </div>

                <div className="w-full border-t border-[#333] mt-12">
                    <p className="py-2 text-sm text-[var(--primary-green)]">© 2025 ALBA</p>
                </div>
            </div>
        </footer>
    )
}

const WhatsApp = () => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><title>whatsapp</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
    )
}

const Instagram = () => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><title>instagram</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
    )
}

const Facebook = () => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><title>facebook</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg> 
    )
}

const Mail = () => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><title>mail</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
    )
}

const WaveSVG = ({className}: {className: string}) => {
    return (
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" className={className}><title>services-waves</title><path d="M 0,400 L 0,150 C 127.67857142857142,180.07142857142856 255.35714285714283,210.14285714285714 368,224 C 480.64285714285717,237.85714285714286 578.2500000000001,235.49999999999997 707,215 C 835.7499999999999,194.50000000000003 995.6428571428571,155.85714285714286 1123,142 C 1250.357142857143,128.14285714285714 1345.1785714285716,139.07142857142856 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="var(--primary-pink)" fillOpacity="1"></path></svg>
    )
  }