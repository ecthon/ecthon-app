import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center w-3xl h-screen mx-auto">

        <div className="flex w-full items-center gap-4 p-4 rounded-2xl hover:bg-white/10 transition-colors">
          <div className="flex items-center justify-between size-16 border-3 bg-white/20 border-white/20 rounded-full overflow-hidden">
            <Image src="/ecthon.png" alt="Avatar" width={100} height={100} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white font-sans">Ecthon Almeida</span>
            <span className="text-sm font-sans text-white/60">Desenvolvedor de Software</span>
          </div>
        </div>
      </div>
    </main>
  );
}
