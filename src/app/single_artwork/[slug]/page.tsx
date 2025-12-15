import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const artworks = [
  {
    slug: "redmattina-1",
    src: "/images/redmattina_main_collage.png",
    alt: "Work 1",
  },
  {
    slug: "redmattina-2",
    src: "/images/redmattina_main_collage.png",
    alt: "Work 2",
  },
  {
    slug: "work-3",
    src: "/images/a.png",
    alt: "Work 3",
  },
];

export default async function SingleArtworkPage({ params }: Props) {
  const { slug } = await params;

  const artwork = artworks.find(a => a.slug === slug);

  if (!artwork) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Artwork not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-10">
      <Image
        src={artwork.src}
        alt={artwork.alt}
        width={1400}
        height={900}
        className="w-full max-w-6xl h-auto object-contain"
        priority
      />
    </main>
  );
}
