"use client";

import { ArrowExpandIcon, ArrowShrinkIcon, Copy01Icon, Exchange01Icon, HugeiconsFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useState } from "react";

export function FreeHash() {
    const [hash, setHash] = useState("");
    const [rotation, setRotation] = useState(0);

    const gerarHash = () => {
        const novoHash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        setHash(novoHash.toUpperCase());
        setRotation((prev) => prev + 360);
    };

    useEffect(() => {
        gerarHash();
    }, []);

    return (
        <div className="relative w-full rounded-3xl p-px overflow-hidden group border border-transparent">
            {/* Elemento de fundo que gira para o efeito da borda iluminada */}
            <div className="absolute -inset-full animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#3b82f6_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-700" />

            <section className="relative flex flex-col md:flex-row items-center justify-between rounded-[23px] overflow-hidden p-8 md:p-12 gap-8 bg-zinc-950/90 backdrop-blur-xl z-10 w-full h-full">
                {/* Efeito de brilho de fundo no hover */}
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex flex-col flex-1 justify-center gap-4 h-full w-full z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 bg-blue-500"></span>
                        </span>
                        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Presente 🎁🎉</p>
                    </div>
                    <p className="text-4xl md:text-5xl font-bold font-sans text-white tracking-tight">Free Hash</p>
                    <p className="text-zinc-400 font-sans leading-relaxed text-lg max-w-sm">Como gratidão por sua visita, pegue um hash gratuito. 😊</p>
                </div>

                <div className="flex flex-col flex-1 justify-center w-full gap-5 z-10">
                    <div className="flex gap-2 bg-zinc-950 border rounded-xl border-zinc-800 p-1 group-focus-within:border-blue-500/50 transition-colors duration-300">
                        <input
                            type="text"
                            readOnly
                            value={hash}
                            className="w-full h-12 px-4 text-blue-400 bg-transparent outline-none font-mono text-sm tracking-widest"
                            placeholder="Gerando hash..."
                        />
                        <button
                            onClick={() => navigator.clipboard.writeText(hash)}
                            className="group/copy shrink-0 flex items-center justify-center size-12 hover:bg-zinc-800 transition-colors duration-300 rounded-lg cursor-pointer"
                            title="Copiar hash"
                        >
                            <HugeiconsIcon icon={Copy01Icon} size={20} className="text-zinc-500 group-hover/copy:text-blue-400 transition-colors duration-300" />
                        </button>
                    </div>

                    <button
                        onClick={gerarHash}
                        className="group/btn relative overflow-hidden flex items-center justify-center w-full h-14 bg-blue-600 hover:bg-blue-500 transition-all duration-300 text-white font-medium px-4 py-2 rounded-xl border border-blue-500 hover:border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] cursor-pointer"
                    >
                        <span className="mr-3 font-semibold text-base">Gerar novo hash</span>
                        <HugeiconsIcon
                            icon={Exchange01Icon}
                            size={22}
                            className="transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-active/btn:scale-90"
                            style={{ transform: `rotate(${rotation}deg)` }}
                        />
                    </button>
                </div>
            </section>
        </div>
    );
}