export const siteConfig = {
  name: "RedMattina",
  description: "RedMattina portfolio and sketchbook",
  urls: {
    instagram: "https://www.instagram.com/redmattina/?hl=el",
    tiktok: "https://www.tiktok.com/@redmattina",
    shop: "https://www.vinted.gr/member/234911618-redmattina",
  },
} as const;

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "mailto:hello@redmattina.com", label: "Contact" },
] as const;

export const socialLinks = [
  {
    href: siteConfig.urls.instagram,
    icon: "/icons/instagram_icon.png",
    label: "Instagram",
  },
  {
    href: siteConfig.urls.tiktok,
    icon: "/icons/tiktok_icon.png",
    label: "TikTok",
  },
  {
    href: siteConfig.urls.shop,
    icon: "/icons/shopping_icon.png",
    label: "Shop",
  },
] as const;
