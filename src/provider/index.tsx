"use client";
import { useCallback, useContext, useState } from "react";
import { MainContext } from "@/context";
import { IMainContext } from "@/interface/IContext";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = useCallback(
    (theme: string) => {
      return setTheme(theme);
    },
    [setTheme],
  );

  return (
    <MainContext.Provider value={{ theme, handleThemeChange } as IMainContext}>
      {children}
    </MainContext.Provider>
  );
}

export const useChangeTheme = () => useContext(MainContext);
