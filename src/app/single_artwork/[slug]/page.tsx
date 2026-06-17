import Image from "next/image";
import { notFound } from "next/navigation";
import { artworks, getArtworkBySlug } from "@/data/artworks";

type SingleArtworkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }));
}

export default async function SingleArtworkPage({
  params,
}: SingleArtworkPageProps) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) {
    notFound();
  }

  return (
    <section className="flex min-h-full items-center justify-center bg-black px-6 py-10 sm:px-10">
      <Image
        src={artwork.src}
        alt={artwork.alt}
        width={artwork.width}
        height={artwork.height}
        sizes="100vw"
        className="h-auto w-full max-w-6xl object-contain"
        priority
      />
    </section>
  );
}
