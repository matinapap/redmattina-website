import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-pink-200 text-pink-900 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/redmattina_header_logo.png"
            alt="RedMattina Logo"
            width={40}
            height={40}
          />
          <h1 className="font-bold text-xl">RedMattina</h1>
        </div>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:underline">
              Portfolio
            </Link>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
