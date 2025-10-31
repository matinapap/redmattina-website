import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header style={{ backgroundColor: '#f5adbcff' }} className="text-pink-900 shadow-md">
      <nav className="container mx-auto flex flex-col items-center">

        {/* Profile Picture + Logo */}
        <div className="flex items-center justify-center my-4 gap-2">
          <Image
            src="/icons/redmattina_profile_picture.png"
            alt="RedMattina Profile"
            width={80}
            height={80}
            className="rounded-full border border-pink-900"
          />
          <Image
            src="/icons/redmattina_header_logo.png"
            alt="RedMattina Logo"
            width={350}
            height={100}
          />
        </div>

        {/* Navigation Bar */}
        <div className="relative w-full mb-6 px-4 h-[40px] flex items-center">

          {/* Social Icons (αριστερά) */}
          <div className="absolute left-4 flex gap-4">
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
          </div>

          {/* Tabs (κέντρο) */}
          <div className="mx-auto">
            <ul className="flex gap-6 list-none text-black text-lg font-bold">
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
          </div>

          {/* Καλάθι (τέρμα δεξιά) */}
          <div className="absolute right-4 flex justify-end">
            <Link href="https://www.vinted.gr/member/234911618-redmattina" target="_blank">
              <Image
                src="/icons/shopping_icon.png"
                alt="Καλάθι"
                width={28}
                height={28}
                className="hover:opacity-80"
              />
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
}
