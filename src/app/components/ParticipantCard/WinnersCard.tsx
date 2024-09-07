import { PathedImage } from "../Image/PathedImage";

function GoldWrapper({ children }: any) {
  return <div className="h-80 ">{children}</div>;
}
function SilverWrapper({ children }: any) {
  return (
    <div className="h-80 aspect-square rounded-2xl shadow-centered shadow-white">
      {children}
    </div>
  );
}
function BronzeWrapper({ children }: any) {
  return (
    <div className="h-80 aspect-square rounded-2xl shadow-centered shadow-amber-800">
      {children}
    </div>
  );
}

function BlueWrapper({ children }: any) {
  return (
    <div className="h-80 aspect-square rounded-2xl shadow-centered shadow-rose-500">
      {children}
    </div>
  );
}

export default function WinnersCard({
  title,
  color,
}: {
  title: string;
  color: number;
}) {
  const medal = ["🥇", "🥈", "🥉", ""];
  return (
    <div className="flex flex-col justify-center gap-8 col-span-4 xl:col-span-6 md:col-span-12">
      <div className="h-80">
        <PathedImage
          width={470}
          height={320}
          className="object-cover"
          src={`/images/participants/fullsize/winner_${title}.png`}
          blurDataURL={`/images/participants/blur/winner_${title}.png`}
          placeholder="blur"
          alt={title}
        ></PathedImage>
      </div>
      <p className="font-display text-center text-3xl">
        {medal[color]}
        {title}
      </p>
    </div>
  );
}
