import Link from "next/link";

export function Projects() {
    return (
        <div className="w-full max-w-[1096px] mx-auto flex flex-col md:flex-row gap-2 max-md:px-4">
            <div id="col-1" className="flex flex-col w-full md:w-[360px]">
                <Link href={'https://boarding-pass-seven.vercel.app/'} className="group cursor-pointer w-full h-[300px] md:h-[420px] border border-zinc-100 rounded-2xl p-1" target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col justify-end h-full bg-gray-100 rounded-[12px] overflow-hidden bg-[url('/ticket.svg')] max-md:bg-[url('/ticket-md.svg')] bg-cover bg-center">
                        {/* Conteúdo do card */}
                        {/*
                            Para mobile (md), mostramos o conteúdo SEM blur.
                            Para telas maiores, mostramos o conteúdo original COM blur e hover.
                        */}
                        <div className="hidden md:flex h-full w-full items-end p-4 bg-gradient-to-t from-black/40 backdrop-blur-xs to-transparent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-sm text-white">Boarding Pass</h2>
                        </div>
                        <div className="flex md:hidden h-full w-full items-end p-4 bg-gradient-to-t from-black/40 to-transparent/0 opacity-100">
                            <h2 className="text-sm text-white">Boarding Pass</h2>
                        </div>
                    </div>
                </Link>
            </div>

            <div id="col-2" className="flex flex-col w-full md:w-[360px] gap-2">
                <div className="group cursor-pointer w-full h-[300px] md:h-[260px] border border-zinc-100 rounded-2xl p-1">
                    <div className="flex flex-col justify-end h-full bg-gray-100 rounded-[12px] overflow-hidden">
                        <div className="flex h-32 w-full items-end p-4 bg-gradient-to-t from-black/10 to-transparent/0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-md font-semibold text-white">Nome do projeto.</h2>
                        </div>
                    </div>
                </div>
                <div className="group cursor-pointer w-full h-[300px] md:h-[260px] border border-zinc-100 rounded-2xl p-1">
                    <div className="flex flex-col justify-end h-full bg-gray-100 rounded-[12px] overflow-hidden">
                        <div className="flex h-32 w-full items-end p-4 bg-gradient-to-t from-black/10 to-transparent/0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-md font-semibold text-white">Nome do projeto.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div id="col-3" className="flex flex-col w-full md:w-[360px]">
                <div className="group cursor-pointer w-full h-[300px] md:h-[420px] border border-zinc-100 rounded-2xl p-1">
                    <div className="flex flex-col justify-end h-full bg-gray-100 rounded-[12px] overflow-hidden">
                        <div className="flex h-32 w-full items-end p-4 bg-gradient-to-t from-black/10 to-transparent/0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-md font-semibold text-white">Nome do projeto.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
