import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col">
            <div className="flex justify-between gap-2">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-[#222]">Tienda</h3>
                    <nav className="flex flex-col gap-2 text-[#333] text-sm px-2">
                        <Link href="/category01">Categoria 1</Link>
                        <Link href="/category02">Categoria 2</Link>
                        <Link href="/category03">Categoria 3</Link>
                        <Link href="/category04">Categoria 4</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-[#222]">Servicios</h3>
                    <nav className="flex flex-col gap-2 text-[#333] text-sm px-2">
                        <Link href="/service01">Servicio 1</Link>
                        <Link href="/service02">Servicio 2</Link>
                        <Link href="/service03">Servicio 3</Link>
                        <Link href="/service04">Servicio 4</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-[#222]">Preguntas</h3>
                    <nav className="flex flex-col gap-2 text-[#333] text-sm px-2">
                        <Link href="/faq01">Pregunta 1</Link>
                        <Link href="/faq02">Pregunta 2</Link>
                        <Link href="/faq03">Pregunta 3</Link>
                        <Link href="/faq04">Pregunta 4</Link>
                    
                    </nav>
                </div>

                <div className="flex flex-col gap-2 w-1/2">
                    <h3 className="font-semibold text-[#222]">Suscripción</h3>
                    <div className="flex flex-col gap-2 text-[#333] text-sm px-2">
                        <p>Recibe las últimas novedades. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, reprehenderit.</p>
                        <div className="flex items-center gap-20">
                            <div className="flex gap-1">
                                <input type="email" placeholder="Correo electrónico" className="p-2 px-6 bg-green-200 rounded-lg w-64"/>
                                <button className="p-2 px-6 bg-[var(--primary-green)] rounded-lg">Enviar</button>
                            </div>
                            <nav className="flex gap-6">
                                <Link href="/social01">Ic</Link>
                                <Link href="/social02">Ic</Link>
                                <Link href="/social03">Ic</Link>
                                <Link href="/social04">Ic</Link>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full border-t border-[#333] mt-12">
                <p className="py-2 text-sm">© 2025 ALBA</p>
            </div>
        </footer>
    )
}