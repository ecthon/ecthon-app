import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "TypeScript",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "React.js",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Next.js",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Tailwind CSS",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Express.js",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Node.js",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-40 cursor-pointer overflow-hidden rounded-full border p-1",
        // light styles
        "bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        " dark:bg-zinc-900 dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
