import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { useChangeTheme } from "@/provider";
import { IMainContext } from "@/interface/IContext";

export const ThemeToogle = () => {
  const { handleThemeChange } = useChangeTheme() as IMainContext;
  const [darkMode, setDakMode] = useState("dark");

  useEffect(() => {
    handleThemeChange(darkMode);
  }, [handleThemeChange, darkMode]);

  return (
    <div onClick={darkMode === "dark" ? setDakMode("light") : setDakMode("dark")}>
      {darkMode === "dark" ? <MdNightlight /> : <CiLight />}
    </div>
  );
};
