"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/utils";
import { INavItem } from "@/interface/INavItem";

export const NavItem = ({ href, label }: INavItem) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <div>
      <Link
        href={href}
        className={cn(
          "transition duration-300 ease-in-out rounded-md text-primary font-medium font-sans hover:font-bold hover:scale-90",
          isActive && "text-sky-400 text-xl",
        )}
      >
        {label}
      </Link>
    </div>
  );
};
