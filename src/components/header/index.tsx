"use client";
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { ThemeToogle } from "../themeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/abaut" },
  { label: "Habilidade", href: "/skills" },
  { label: "Projetos", href: "/projects" },
];

export const Header = () => {
  return (
    <header className="d-flex flex-row absolute top-0 right-0 w-full z-10 h-24 items-center justify-center shadow glass-effect">
      <div className="d-flex h-100 items-center justify-between px-2">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logan.png"
            alt="Logo Lucas Camargo Dev"
            className="cursor-pointer"
          />
        </Link>
        <nav className="d-felx items-center gap-2 sm:gap-4 md:gap-10 w-100">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
        <ThemeToogle />
      </div>
    </header>
  );
};
