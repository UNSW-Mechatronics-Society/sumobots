import {
  InternalResourceData,
  ExternalResourceData,
  InternalVideoResourceData,
} from "../data/ResourceData";
import Link from "next/link";
import { PathedImage } from "../components/Image/PathedImage";

interface ResourceCardProps {
  title: string;
  url: string;
  image: string;
  description?: string;
}

function ResourceCard({ title, url, image, description }: ResourceCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className="bg-[#07070e] col-span-3 2xl:col-span-4 lg:col-span-6 md:col-span-full aspect-[3/4]  group transition duration-300 shadow-none shadow-[#23274c77] hover:shadow-[#23274c77] hover:shadow-xl"
    >
      <div className="w-full aspect-video bg-black overflow-hidden">
        <PathedImage
          width={400}
          height={225}
          src={image}
          alt={title}
          className="group-hover:scale-105 transition"
        ></PathedImage>
      </div>
      <div className="w-full px-4">
        <h2 className="text-2xl mt-4 mb-2 text-blue-400 group-hover:underline">
          {title}
        </h2>
        <p className="text-lg">{description}</p>
      </div>
    </Link>
  );
}

export default function Resources() {
  return (
    <main>
      <section className="container gap-y-12 py-24 min-h-screen">
        <h1 className="col-span-full font-display text-6xl">Resources</h1>
        {InternalResourceData.map((data, i) => (
          <ResourceCard key={i} {...data}></ResourceCard>
        ))}
        <h1 className="col-span-full font-display text-6xl">Videos</h1>
        {InternalVideoResourceData.map((data, i) => (
          <ResourceCard key={i} {...data}></ResourceCard>
        ))}
        <h1 className="col-span-full font-display text-6xl">Others</h1>
        {ExternalResourceData.map((data, i) => (
          <ResourceCard key={i} {...data}></ResourceCard>
        ))}
      </section>
    </main>
  );
}
