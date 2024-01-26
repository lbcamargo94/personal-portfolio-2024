import { INavItem } from "@/interfaces/NavBar/INavBar";
import { cn } from "@/utils/DynamicClassName";
import { Link as ScrollLink } from "react-scroll";

export default function NavBar({ href, label, active }: INavItem) {
  const isActive = active;

  return (
    <div>
      <ScrollLink
        className={cn(
          "transition duration-300 ease-in-out rounded-md text-primary font-medium font-sans hover:font-bold hover:scale-90",
          isActive && "text-sky-400 text-xl"
        )}
        to={href}
        smooth={true}
        duration={1000}
      >
        {label}
      </ScrollLink>
    </div>
  );
}
