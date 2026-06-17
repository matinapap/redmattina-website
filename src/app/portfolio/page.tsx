import Link from "next/link";
import ImageCard from "@/components/portfolio/ImageCard";
import { artworks } from "@/data/artworks";

export default function PortfolioPage() {
  return (
    <section className="min-h-full w-full bg-black px-6 py-10 text-white sm:px-10">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {artworks.map((artwork) => (
          <div key={artwork.slug} className="mb-12 break-inside-avoid">
            <Link
              href={`/single_artwork/${artwork.slug}`}
              aria-label={`View ${artwork.title}`}
            >
              <ImageCard
                src={artwork.src}
                alt={artwork.alt}
                title={artwork.title}
                width={artwork.width}
                height={artwork.height}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
