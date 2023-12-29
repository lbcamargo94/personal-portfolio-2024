"use client";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { ThemeToogle } from "../themeToggle";
import { RiHomeOfficeFill, RiHomeOfficeLine } from "react-icons/ri";
import { useChangeTheme } from "@/provider";
import { IMainContext } from "@/interface/IContext";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/abaut" },
  { label: "Habilidade", href: "/skills" },
  { label: "Projetos", href: "/projects" },
];

export const Header = () => {
  const { theme } = useChangeTheme() as IMainContext;

  return (
    <header className="flex flex-row items-center justify-center min-w-full shadow bg-primary glass-effect p-3">
      <div className="flex w-full items-baseline">
        <Link href="/" className="">
          {theme === "dark" ? (
            <RiHomeOfficeFill color="#f0f0f0" size="3rem" />
          ) : (
            <RiHomeOfficeLine color="#151515" size="3rem" />
          )}
        </Link>
        <nav className="">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
        <ThemeToogle />
      </div>
    </header>
  );
};
