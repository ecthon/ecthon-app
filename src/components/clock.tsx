'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
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

    updateTime(); // Atualiza imediatamente ao montar
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="text-xs font-mono font-bold text-gray-800">
      {time}
    </div>
  );
}
