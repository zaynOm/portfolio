import Image from "next/image";
import Link from "next/link";
import { projects } from "../../data";

export type CardProps = {
  title: string;
  image: string;
  descreption: string;
  url: string;
};

export function Card({ item }: { item: CardProps }) {
  return (
    <Link href={item.url} className="block">
      <div className="overflow-clip rounded-lg aspect-video">
        <Image
          alt={item.title}
          src={item.image}
          className="object-cover transition-transform ease-out hover:scale-105"
          width={720}
          height={405}
        />
      </div>

      <h3 className="mt-4 text-lg font-bold sm:text-xl">{item.title}</h3>

      <p className="mt-2 text-gray-400">{item.descreption}</p>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-syne font-bold text-4xl">Projects</h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
