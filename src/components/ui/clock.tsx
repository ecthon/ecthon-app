'use client';

import { useClock } from '@/hooks/useClock';

export default function Clock() {
  const time = useClock();

  return (
    <div className="text-xs max-sm:text-[11px] font-semibold text-gray-900">
      {time}
    </div>
  );
}
