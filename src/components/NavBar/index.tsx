import { INavItem } from "@/interfaces/NavBar/INavBar";
import { cn } from "@/utils/DynamicClassName";
import { Link, useLocation } from "react-router-dom";

export default function NavBar({ href, label }: INavItem) {
  const location = useLocation();

  const isActive = location.pathname === href;

  return (
    <div>
      <Link
        className={cn(
          "transition duration-300 ease-in-out rounded-md text-primary font-medium font-sans hover:font-bold hover:scale-90",
          isActive && "text-sky-400 text-xl"
        )}
        to={href}
        preventScrollReset={true}
      >
        {label}
      </Link>
    </div>
  );
}
