import { INavItem } from "@/interfaces/NavBar/INavBar";
import NavBar from "../NavBar";

export default function Header() {
  const NAV_ITEMS = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/about" },
    { label: "Habilidade", href: "/skills" },
    { label: "Projetos", href: "/projects" },
    { label: "Contato", href: "/contact" },
  ] as INavItem[];

  return (
    <header className="flex flex-row items-center justify-between min-w-full h-20 shadow bg-primary glass-effect px-3 py-1 sticky top-0 left-0 z-50">
      <h2>Header</h2>
      {NAV_ITEMS.map((item) => (
        <NavBar {...item} key={`${item.label}`} />
      ))}
    </header>
  );
}
