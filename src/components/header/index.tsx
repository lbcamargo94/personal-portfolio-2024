"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import ThemeSwitch from "../theme_switch";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projects" },
];

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className=" container flex items-center justify-between px-2">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logan.png"
            alt="Logo Lucas Camargo Dev"
            className="cursor-pointer"
          />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </header>
  );
};
