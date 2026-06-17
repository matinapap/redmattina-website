import Image from "next/image";
import Link from "next/link";
import { primaryNavigation, socialLinks } from "@/data/site";

export default function Header() {
  return (
    <header className="header shrink-0">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/icons/redmattina_profile_picture.png"
            alt=""
            width={60}
            height={60}
            className="rounded-full border border-pink-900"
          />
          <Image
            src="/icons/redmattina_header_logo.png"
            alt="RedMattina"
            width={200}
            height={60}
            priority
            style={{ width: "200px", height: "auto" }}
            className="max-w-[42vw]"
          />
        </Link>

        <ul className="hidden list-none items-center gap-6 text-lg font-bold text-white md:flex">
          {primaryNavigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
            >
              <Image
                src={item.icon}
                alt=""
                width={28}
                height={28}
                className="hover:opacity-80"
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
