"use client";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { useChangeTheme } from "@/provider";
import { IMainContext } from "@/interface/IContext";
// import { cn } from "@/utils/utils";

export const ThemeToogle = () => {
  const { handleThemeChange } = useChangeTheme() as IMainContext;
  const [darkMode, setDakMode] = useState("dark");

  useEffect(() => {
    handleThemeChange(darkMode);
  }, [handleThemeChange, darkMode]);

  const handleClick = (mode: string) => {
    if (mode === "dark") {
      return setDakMode("light");
    } else {
      return setDakMode("dark");
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => handleClick(darkMode)}
        className="d-flex items-center justify-between bg-white-100"
      >
        {darkMode === "dark" ? (
          <CiLight color="white" size="3rem" />
        ) : (
          <MdNightlight color="dimgray" size="3rem" />
        )}
      </button>
    </div>
  );
};
