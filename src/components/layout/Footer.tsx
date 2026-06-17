import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="shrink-0 bg-[#f5adbc] p-4 text-center text-sm text-pink-800">
      © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
    </footer>
  );
}
