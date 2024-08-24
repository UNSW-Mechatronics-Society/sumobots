import { PathedImage } from "../Image/PathedImage";

function GoldWrapper({ children }: any) {
  return (
    <div className="h-80 aspect-square rounded-2xl shadow-centered shadow-amber-300">
      {children}
    </div>
  );
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
  return (
    <div className="flex flex-col justify-center gap-12">
      {color === 0 && (
        <GoldWrapper>
          <PathedImage
            width={320}
            height={320}
            className="rounded-2xl"
            src={`/images/participants/${title}.png`}
            alt={title}
          ></PathedImage>
        </GoldWrapper>
      )}
      {color === 1 && (
        <SilverWrapper>
          <PathedImage
            width={320}
            height={320}
            className="rounded-2xl"
            src={`/images/participants/${title}.png`}
            alt={title}
          ></PathedImage>
        </SilverWrapper>
      )}
      {color === 2 && (
        <BronzeWrapper>
          <PathedImage
            width={320}
            height={320}
            className="rounded-2xl"
            src={`/images/participants/${title}.png`}
            alt={title}
          ></PathedImage>
        </BronzeWrapper>
      )}
      {color === 3 && (
        <BlueWrapper>
          <PathedImage
            width={320}
            height={320}
            className="rounded-2xl"
            src={`/images/participants/${title}.png`}
            alt={title}
          ></PathedImage>
        </BlueWrapper>
      )}
      <p className="font-display text-center text-3xl">{title}</p>
    </div>
  );
}
