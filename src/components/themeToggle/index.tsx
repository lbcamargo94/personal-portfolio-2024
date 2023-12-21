"use clint";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/utils";
import { FaMoon } from "react-icons/fa";

export const ThemeToogle = () => {
  const [darkMode, setDakMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDakMode(true);
    }
  }, []);

  return <div className=""></div>;
};
