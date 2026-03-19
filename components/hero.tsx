import { useEffect, useState } from "react";

export function Hero() {
    const [time, setTime] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");


    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");
            setTime(`${hours}:${minutes}`);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between md:gap-0">
            <div className="flex flex-col gap-4 mt-8 mb-4 md:my-20">
                <div className="flex flex-col gap-1 md:gap-2">
                    <p className="text-4xl md:text-5xl md:w-2xs font-semibold text-zinc-900 dark:text-white font-sans leading-tight">Integrando</p>
                    <p className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-white font-sans leading-tight">design e código.</p>
                </div>
                <p className="text-base md:text-lg text-zinc-500 dark:text-white/60 font-sans max-w-[280px] md:max-w-none">Criando interfaces que equilibram usabilidade, performance e estética.</p>
            </div>
            <div className="flex items-center gap-2 mb-8 md:mb-0">
                <div className="flex gap-2 items-center">
                    <div className="flex items-center">
                        <p className="text-7xl sm:text-[80px] md:text-[100px] font-semibold tabular-nums text-zinc-900 dark:text-zinc-900 dark:hover:text-zinc-900 font-sans transition-colors duration-300 rounded-lg leading-none">{hours}</p>
                        <p className="text-7xl sm:text-[80px] md:text-[100px] font-semibold tabular-nums text-zinc-900 dark:text-zinc-900 dark:hover:text-zinc-900 font-sans transition-colors duration-300 rounded-lg leading-none">:</p>
                        <p className="text-7xl sm:text-[80px] md:text-[100px] font-semibold tabular-nums text-zinc-900 dark:text-zinc-900 dark:hover:text-zinc-900 font-sans transition-colors duration-300 rounded-lg leading-none">{minutes}</p>
                    </div>
                    <p className="mt-2 md:mt-5 flex items-center justify-center text-xl md:text-2xl p-2 tabular-nums font-semibold bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-500 dark:text-zinc-600">{seconds}</p>
                </div>
            </div>
        </div>
    );
}