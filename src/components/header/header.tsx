"use client";
import Link from "next/link";
// import { NavItem } from "./navItem";
import { ThemeToogle } from "../themeToggle/themeToggle";
import { RiHomeOfficeFill, RiHomeOfficeLine } from "react-icons/ri";
import { useChangeTheme } from "@/provider/mainProvider";
import { IMainContext } from "@/interface/IContext";
// import { SideBar } from "../sideBar/sideBar";
import Offcanvas from "../offcanvas";

// const NAV_ITEMS = [
//   { label: "Main", href: "/" },
//   { label: "Home", href: "/home" },
//   { label: "Sobre", href: "/about" },
//   { label: "Habilidade", href: "/skills" },
//   { label: "Projetos", href: "/projects" },
// ];

export const Header = () => {
  const { theme } = useChangeTheme() as IMainContext;

  return (
    <header className="flex flex-row items-center justify-between min-w-full shadow bg-primary glass-effect px-3 py-1">
      <div className="flex w-full items-center justify-between">
        <Link href="/home" className="">
          {theme === "dark" ? (
            <RiHomeOfficeFill
              color="#f0f0f0"
              size="2rem"
              className="transition duration-300 ease-in-out hover:scale-125"
            />
          ) : (
            <RiHomeOfficeLine
              color="#151515"
              size="2rem"
              className="transition duration-300 ease-in-out hover:scale-125"
            />
          )}
        </Link>

        {/* <SideBar /> */}

        <Offcanvas />

        {/* <nav className="">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav> */}
        <ThemeToogle />
      </div>
    </header>
  );
};
