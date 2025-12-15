import ImageCard from "@/components/ImageCard";
import Link from "next/link";

interface GalleryImage {
  src: string;
  alt: string;
  slug: string;
}

export default function PortfolioPage() {
  const images: GalleryImage[] = [
    {
      src: "/images/redmattina_main_collage.png",
      alt: "Work 1",
      slug: "redmattina-1",
    },
    {
      src: "/images/redmattina_main_collage.png",
      alt: "Work 2",
      slug: "redmattina-2",
    },
    {
      src: "/images/a.png",
      alt: "Work 3",
      slug: "work-3",
    },
    {
      src: "/images/a.png",
      alt: "Work 3",
      slug: "work-3",
    },
    {
      src: "/images/a.png",
      alt: "Work 3",
      slug: "work-3",
    },
  ];

  return (
    <main className="w-full min-h-screen px-10 pt-10 bg-black text-white">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {images.map((img) => (
          <div key={img.slug} className="mb-12 break-inside-avoid">
            <Link href={`/single_artwork/${img.slug}`}>
              <ImageCard src={img.src} alt={img.alt} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
