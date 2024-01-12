"use client";
import Link from "next/link";
import Offcanvas from "../offcanvas";
import { RiHomeOfficeFill, RiHomeOfficeLine } from "react-icons/ri";
import { useMainContext } from "@/provider/mainProvider";
import { IMainContext } from "@/interface/IContext";
import { ThemeToogle } from "../themeToggle/ThemeToggle";

export const Header = () => {
  const { theme } = useMainContext() as IMainContext;

  return (
    <header className="flex flex-row items-center justify-between min-w-full shadow bg-primary glass-effect px-3 py-1 sticky top-0 left-0 z-50">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="">
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

        <div className="flex flex-row items-center align-middle">
          <Offcanvas />
          <ThemeToogle />
        </div>
      </div>
    </header>
  );
};
