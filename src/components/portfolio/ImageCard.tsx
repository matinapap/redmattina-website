import Image from "next/image";

type ImageCardProps = {
  alt: string;
  height: number;
  src: string;
  title: string;
  width: number;
};

export default function ImageCard({
  alt,
  height,
  src,
  title,
  width,
}: ImageCardProps) {
  return (
    <article className="group relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="h-auto w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-xl font-semibold text-white drop-shadow-lg">
          {title}
        </p>
      </div>
    </article>
  );
}
