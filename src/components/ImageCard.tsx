import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
}

export default function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg w-full h-auto">
      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className="w-full h-auto object-cover"
      />

      {/* Dark overlay */}
      <div
        className="
          absolute inset-0 
          bg-black/40 
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300
        "
      ></div>

      {/* Text */}
      <div
        className="
          absolute inset-0 
          flex items-center justify-center
          opacity-0 
          group-hover:opacity-100 
          transition-opacity 
          duration-300
        "
      >
        <p className="text-white text-xl font-semibold drop-shadow-lg">
          {alt}
        </p>
      </div>
    </div>
  );
}
