import {
  RiYoutubeLine,
  RiTwitterXLine,
  RiFacebookLine,
  RiInstagramLine,
} from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      <div className="absolute top-0 w-full h-full bg-black/[0.9] z-10" />
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col justify-center items-center gap-14">
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </Link>
          <nav>
            <ul className="flex flex-col justify-center items-center xl:flex-row gap-8 xl:gap-12">
              {links.map(({ name, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="uppercase text-white tracking-widest hover:text-accent transition-all"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex items-center gap-4 text-white text-xl">
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex justify-center items-center hover:text-accent transition-all"
              >
                <RiYoutubeLine />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex justify-center items-center hover:text-accent transition-all"
              >
                <RiTwitterXLine />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex justify-center items-center hover:text-accent transition-all"
              >
                <RiFacebookLine />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex justify-center items-center hover:text-accent transition-all"
              >
                <RiInstagramLine />
              </Link>
            </li>
          </ul>
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex justify-center items-center py-6">
            <p>&copy; Copyright 2024 - Zenbrew. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
