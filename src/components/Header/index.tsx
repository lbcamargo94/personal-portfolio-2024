import { INavItem } from "@/interfaces/NavBar/INavBar";
import NavBar from "../NavBar";
import { Link as ScrollLink } from "react-scroll";
import { ThemeToogle } from "../ThemeToogle";
import { IMainContext } from "@/interfaces/ContextApi/IMainContext";
import { useMainContext } from "@/hooks/UseMainContext";
import LogoDark from "@/assets/icons/LC_Dark_Portifólio.svg";
import LogoLight from "@/assets/icons/LC_Light_Portifólio.svg";

export default function Header() {
  const { theme } = useMainContext() as IMainContext;

  const NAV_ITEMS = [
    { label: "Início", href: "home" },
    { label: "Sobre", href: "about" },
    { label: "Habilidade", href: "skills" },
    { label: "Projetos", href: "projects" },
    { label: "Contato", href: "contact" },
  ] as INavItem[];

  return (
    <header className="flex flex-row items-center justify-between min-w-full h-20 bg-primary glass-effect px-3 py-1 sticky top-0 left-0 z-50 shadow-primary">
      <div>
        <ScrollLink
          to={"home"}
          smooth={true}
          duration={500}
          delay={0}
          offset={-100}
        >
          {theme === "dark" ? (
            <div className="h-full w-12">
              <img
                src={LogoLight}
                alt="LogoDark"
                className="object-cover"
                sizes="2rem"
              />
            </div>
          ) : (
            <div className="h-full w-12">
              <img
                src={LogoDark}
                alt="LogoDark"
                className="object-cover"
                sizes="2rem"
              />
            </div>
          )}
        </ScrollLink>
      </div>
      <div className="flex gap-4">
        {NAV_ITEMS.map((item) => (
          <NavBar {...item} key={`${item.label}`} />
        ))}
      </div>
      <div>
        <ThemeToogle />
      </div>
    </header>
  );
}
