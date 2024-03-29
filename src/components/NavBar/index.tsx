import { useMainContext } from "@/hooks/UseMainContext";
import { IMainContext } from "@/interfaces/ContextApi/IMainContext";
import { INavItem } from "@/interfaces/NavBar/INavBar";
import { cn } from "@/utils/DynamicClassName";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function NavBar({ href, label }: INavItem) {
  const { navName, setNavName, setMenu } = useMainContext() as IMainContext;

  const [activeNav, setActiveNav] = useState<string>("Inicio");

  useEffect(() => {
    setActiveNav(navName);
  }, [navName]);

  const isActive = label === activeNav;

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <ScrollLink
        className={cn(
          "transition duration-300 ease-in-out rounded-md text-primary font-medium font-sans cursor-pointer hover:font-bold hover:scale-90",
          isActive && "text-sky-400 text-xl"
        )}
        to={href}
        smooth={true}
        duration={1500}
        delay={50}
        offset={-100}
        onClick={() => {
          setNavName(label);
          handleCloseMenu();
        }}
      >
        {label}
      </ScrollLink>
    </div>
  );
}
