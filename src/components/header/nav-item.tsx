import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/utils";
import { INavItem } from "@/interface/INavItem";

export const NavItem = ({ href, label }: INavItem) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-black flex items-center font-medium font-sans",
        isActive && "text-gray-400",
      )}
    >
      {`# ${label}`}
    </Link>
  );
};
