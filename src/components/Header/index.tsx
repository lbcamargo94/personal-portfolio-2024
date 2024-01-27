import { Link as ScrollLink } from "react-scroll";
import { ThemeToogle } from "../ThemeToogle";
import { IMainContext } from "@/interfaces/ContextApi/IMainContext";
import { useMainContext } from "@/hooks/UseMainContext";
import LogoDark from "@/assets/icons/LC_Dark_Portifólio.svg";
import LogoLight from "@/assets/icons/LC_Light_Portifólio.svg";
import Offcanvas from "../Offcanvas";

import "@/styles/animations.scss";

export default function Header() {
  const { theme } = useMainContext() as IMainContext;

  return (
    <header className="flex flex-row items-center justify-between min-w-full h-20 bg-primary glass-effect px-3 py-1 sticky top-0 left-0 z-50 shadow-primary">
      <div className="flex w-full items-center justify-between">
        <ScrollLink
          to={"home"}
          smooth={true}
          duration={500}
          delay={0}
          offset={-100}
        >
          {theme === "dark" ? (
            <div className="h-full w-12 rounded-full cursor-pointer hover:shadow-primary slide-in">
              <img
                src={LogoLight}
                alt="LogoDark"
                className="object-cover hover:scale-110"
                sizes="2rem"
              />
            </div>
          ) : (
            <div className="h-full w-12 rounded-full cursor-pointer hover:shadow-primary slide-in">
              <img
                src={LogoDark}
                alt="LogoDark"
                className="object-cover hover:scale-110"
                sizes="2rem"
              />
            </div>
          )}
        </ScrollLink>

        <div className="flex flex-row items-center align-middle">
          <Offcanvas />
          <ThemeToogle />
        </div>
      </div>
    </header>
  );
}
