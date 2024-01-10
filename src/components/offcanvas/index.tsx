// export default function Offcanvas() {

//   return (
//     <div>
//       <button
//         type="button"
//         className="py-3 px-3 inline-flex items-center gap-x-2 text-sm font-sans rounded-lg border-transparent bg-primary text-primary hover:bg-sky-400"
//         data-aria-haspopup
//       >
//         Open
//       </button>
//     </div>
//   );
// }

import { HiMenu, HiX } from "react-icons/hi";
import { useChangeTheme } from "@/provider/mainProvider";
import { IMainContext } from "@/interface/IContext";
import { useState } from "react";
import { cn } from "@/utils/utils";

export default function Offcanvas() {
  const { theme } = useChangeTheme() as IMainContext;
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    console.log("Fechar Menu", showMenu);
    setShowMenu(false);
  };
  const handleShowMenu = () => {
    console.log("Abrir Menu", showMenu);
    setShowMenu(true);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              style={{
                height: "1.5rem",
                width: "1.5rem",
              }}
            ></div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="transition duration-300 ease-in-out hover:scale-125 px-3 py-2 rounded-md text-primary font-medium font-sans h-full"
                >
                  Sobre
                </a>
                <a
                  href="#"
                  className="m-auto transition duration-300 ease-in-out hover:scale-125 px-3 py-2 rounded-md text-primary font-medium font-sans h-full"
                >
                  Habilidades
                </a>
                <a
                  href="#"
                  className="transition duration-300 ease-in-out hover:scale-125 px-3 py-2 rounded-md text-primary font-medium font-sans h-full"
                >
                  Projetos
                </a>
                <a
                  href="#"
                  className="transition duration-300 ease-in-out hover:scale-125 px-3 py-2 rounded-md text-primary font-medium font-sans h-full"
                >
                  Contato
                </a>
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
              "absolute bg-primary top-0 left-0 h-screen w-60 md:hidden",
              showMenu ? "visible" : "hidden",
            )}
          >
            <div className="flex justify-between p-3">
              <h1 className="text-primary bg-primary font-medium font-sans">Menu</h1>
              <button className="bg-primary" onClick={handleCloseMenu}>
                <HiX
                  color="#E74C3C"
                  size="2rem"
                  className="transition duration-300 ease-in-out hover:scale-125 "
                />
              </button>
            </div>

            <div className="px-2 pt-2 pd-3 sm:px-3">
              <a
                href="#"
                className="transition duration-300 ease-in-out hover:scale-125 block px-3 py-2 rounded-md text-primary font-medium font-sans"
              >
                Sobre
              </a>
              <a
                href="#"
                className="m-auto transition duration-300 ease-in-out hover:scale-125 block px-3 py-2 rounded-md text-primary font-medium font-sans"
              >
                Habilidades
              </a>
              <a
                href="#"
                className="transition duration-300 ease-in-out hover:scale-125 block px-3 py-2 rounded-md text-primary font-medium font-sans"
              >
                Projetos
              </a>
              <a
                href="#"
                className="transition duration-300 ease-in-out hover:scale-125 block px-3 py-2 rounded-md text-primary font-medium font-sans"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
