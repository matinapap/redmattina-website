export type Artwork = {
  alt: string;
  height: number;
  slug: string;
  src: string;
  title: string;
  width: number;
};

export const artworks = [
  {
    slug: "redmattina-1",
    src: "/images/redmattina_main_collage.png",
    alt: "RedMattina mixed-media collage",
    title: "RedMattina Collage",
    width: 1300,
    height: 600,
  },
  {
    slug: "redmattina-2",
    src: "/images/redmattina_main_collage.png",
    alt: "RedMattina mixed-media collage study",
    title: "RedMattina Collage Study",
    width: 1300,
    height: 600,
  },
  {
    slug: "work-3",
    src: "/images/a.png",
    alt: "RedMattina artwork detail",
    title: "Artwork Detail",
    width: 800,
    height: 800,
  },
] satisfies Artwork[];

export function getArtworkBySlug(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}
