import { PathedImage } from "../Image/PathedImage";

export default function ParticipantCard({ data }: { data: { title: string } }) {
  return (
    <div
      key={data.title}
      className="flex flex-col justify-center gap-4 overflow-hidden"
    >
      <div className="h-64 aspect-square overflow-hidden">
        <PathedImage
          width={256}
          height={256}
          className="overflow-hidden"
          src={`/images/participants/fullsize/${data.title}.png`}
          blurDataURL={`/images/participants/blur/${data.title}.png`}
          placeholder="blur"
          alt={data.title}
        ></PathedImage>
      </div>
      <p className="font-display text-center">{data.title}</p>
    </div>
  );
}
