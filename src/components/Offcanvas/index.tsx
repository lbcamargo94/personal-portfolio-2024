import { useMainContext } from "@/hooks/UseMainContext";
import { IMainContext } from "@/interfaces/ContextApi/IMainContext";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavBar from "../NavBar";
import { cn } from "@/utils/DynamicClassName";
import { INavItem } from "@/interfaces/NavBar/INavBar";

export default function Offcanvas() {
  const { theme, menu, setMenu } = useMainContext() as IMainContext;
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(menu);
  }, [menu]);

  const NAV_ITEMS = [
    { label: "Início", href: "home" },
    { label: "Sobre", href: "about" },
    { label: "Habilidade", href: "skills" },
    { label: "Projetos", href: "projects" },
    { label: "Contato", href: "contact" },
  ] as INavItem[];

  const handleCloseMenu = () => {
    setMenu(false);
  };

  const handleShowMenu = () => {
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
              <NavBar {...item} key={`${item.label}`} />
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
          showMenu ? "visible" : "hidden"
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
            <NavBar {...item} key={`${item.label}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
