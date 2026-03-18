export function Hero() {
    return (
        <div className="flex flex-col gap-4 my-12 md:my-20">
            <div className="flex flex-col gap-1 md:gap-2">
                <p className="text-4xl md:text-5xl md:w-2xs font-semibold text-zinc-900 dark:text-white font-sans leading-tight">Integrando</p>
                <p className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white font-sans leading-tight">design e código.</p>
            </div>
            <p className="text-base md:text-lg text-zinc-500 dark:text-white/60 font-sans max-w-[280px] md:max-w-none">Criando interfaces que equilibram usabilidade, performance e estética.</p>
        </div>
    );
}