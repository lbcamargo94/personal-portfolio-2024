import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projects" },
];

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/home.svg"
            alt="Logo Lucas Camargo Dev"
          />
        </Link>
        <nav>
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
