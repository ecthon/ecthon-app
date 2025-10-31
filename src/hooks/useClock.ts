import { useEffect, useState } from 'react';

export const useClock = () => {
    const [time, setTime] = useState('');
    useEffect(() => {
        const updateTime = () => {
            const now = new Date().toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
            setTime(now);
        };

        updateTime();   // Atualiza imediatamente ao montar
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);
    return time;
}
