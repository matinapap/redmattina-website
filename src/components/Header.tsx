import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">

        {/* Αριστερά: Profile + Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/icons/redmattina_profile_picture.png"
            alt="RedMattina Profile"
            width={60}
            height={60}
            className="rounded-full border border-pink-900"
          />

          <div className="flex items-center h-16">
            <Image
              src="/icons/redmattina_header_logo.png"
              alt="RedMattina Logo"
              width={200}
              height={60}
            />
          </div>
        </div>

        {/* Κέντρο: Links */}
        <ul className="flex gap-6 list-none text-white text-lg font-bold">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          </li>
          <li>
            <a className="hover:underline">Contact</a>
          </li>
        </ul>

        {/* Δεξιά: Social + Καλάθι */}
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/redmattina/?hl=el" target="_blank">
            <Image
              src="/icons/instagram_icon.png"
              alt="Instagram"
              width={28}
              height={28}
              className="hover:opacity-80"
            />
          </Link>

          <Link href="https://www.tiktok.com/@redmattina" target="_blank">
            <Image
              src="/icons/tiktok_icon.png"
              alt="TikTok"
              width={28}
              height={28}
              className="hover:opacity-80"
            />
          </Link>

          <Link href="https://www.vinted.gr/member/234911618-redmattina" target="_blank">
            <Image
              src="/icons/shopping_icon.png"
              alt="Shopping"
              width={28}
              height={28}
              className="hover:opacity-80"
            />
          </Link>
        </div>

      </nav>
    </header>
  );
}
