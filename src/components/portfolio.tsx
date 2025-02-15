export function PortfolioSection() {
  return (
    <div className="w-full md:px-0 mx-auto max-w-full md:max-w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex h-[300px] bg-zinc-900 p-4 shadow-md rounded-lg">Card 1</div>
        <div className="flex h-[300px] bg-zinc-900 p-4 shadow-md rounded-lg">Card 2</div>
        <div className="flex h-[300px] bg-zinc-900 p-4 shadow-md rounded-lg">Card 3</div>
      </div>
    </div>
  );
}