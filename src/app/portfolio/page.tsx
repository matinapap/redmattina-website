import ImageCard from "@/components/ImageCard";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function PortfolioPage() {
  const images: GalleryImage[] = [
    { src: "/images/redmattina_main_collage.png", alt: "Work 1" },
    { src: "/images/redmattina_main_collage.png", alt: "Work 2" },
    { src: "/images/a.png", alt: "Work 3" },
    { src: "/images/a.png", alt: "Work 4" },
    { src: "/images/a.png", alt: "Work 5" },
  ];

  return (
    <main className="w-full min-h-screen px-10 pt-10 bg-black text-white">

      <a
        href="/portfolio"
        className="text-gray-300 hover:underline mb-6 inline-block"
      >
        ← Back to Categories
      </a>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="mb-6 break-inside-avoid">
            <ImageCard src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

    </main>
  );
}
