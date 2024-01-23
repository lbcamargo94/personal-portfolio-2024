"use client";
import { HiMenu, HiX } from "react-icons/hi";
import { useMainContext } from "@/provider/mainProvider";
import { IMainContext } from "@/interface/IContext";
import { useEffect, useState } from "react";
import { cn } from "@/utils/utils";
import { GenerateKey } from "@/utils/generateKey";
import { NavItem } from "../header/navItem";

export default function Offcanvas() {
  const { theme, menu, setMenu } = useMainContext() as IMainContext;
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(menu);
  }, [menu]);

  const NAV_ITEMS = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/abaut" },
    { label: "Habilidade", href: "/skills" },
    { label: "Projetos", href: "/projects" },
    { label: "Contato", href: "/contact" },
  ];

  const handleCloseMenu = () => {
    console.log("Fechar Menu", showMenu);
    setMenu(false);
  };
  const handleShowMenu = () => {
    console.log("Abrir Menu", showMenu);
    setMenu(true);
  };

  return (
    <div className="z-50 flex items-center justify-between h-16 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center">
        <div
          style={{
            height: "1.5rem",
            width: "1.5rem",
          }}
        ></div>
        <div className="hidden md:block">
          <div className="flex gap-4" onClickCapture={handleCloseMenu}>
            {NAV_ITEMS.map((item) => (
              <NavItem {...item} key={`${item.label}_${GenerateKey(100000, 999999)}`} />
            ))}
          </div>
        </div>
      </div>

      <div className={cn("flex md:hidden", showMenu ? "hidden" : "visible")}>
        <button
          id="menu-btn"
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md"
          aria-label="Menu"
          aria-expanded="false"
          onClick={handleShowMenu}
        >
          {theme === "dark" ? (
            <HiMenu
              color="#f0f0f0"
              size="2rem"
              className="transition duration-300 ease-in-out hover:scale-125 "
            />
          ) : (
            <HiMenu
              color="#151515"
              size="2rem"
              className="transition duration-300 ease-in-out hover:scale-125"
            />
          )}
        </button>
      </div>

      <div
        className={cn(
          "absolute bg-primary top-0 left-0 z-10 h-screen w-full md:hidden",
          showMenu ? "visible" : "hidden",
        )}
      >
        <div className="flex items-center justify-between p-3">
          <h1 className="w-full h-100 text-primary bg-primary font-medium font-sans text-center align-baseline">
            Menu
          </h1>
          <button className="bg-primary" onClick={handleCloseMenu}>
            <HiX
              color="#E74C3C"
              size="2rem"
              className="transition duration-300 ease-in-out hover:scale-125"
            />
          </button>
        </div>

        <div className="flex flex-col h-full w-96 mx-auto mt-10 justify-start gap-2 px-2 pt-2 pd-3 sm:px-4">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={`${item.label}_${GenerateKey(100000, 999999)}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
