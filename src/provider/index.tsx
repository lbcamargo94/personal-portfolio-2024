"use client";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "@/context";
import { IMainContext } from "@/interface/IContext";

function getInitialTheme() {
  if (typeof window !== "undefined" && window.localStorage) {
    const themeStorage = window.localStorage.getItem("color-theme");

    if (typeof themeStorage === "string") {
      return themeStorage;
    }

    const isDarkMode = window.matchMedia("prefers-color-schema: dark").matches;

    if (isDarkMode) {
      return "dark";
    }
  }

  return "light";
}

export function ThemeProvider({
  initialTheme,
  children,
}: {
  initialTheme: string;
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(getInitialTheme);

  const handleSetTheme = (handleTheme: string) => {
    const root = window.document.documentElement;
    const isDark = handleTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(handleTheme);

    localStorage.setItem("color-theme", handleTheme);
  };

  if (initialTheme) {
    handleSetTheme(initialTheme);
  }

  useEffect(() => {
    handleSetTheme(theme);
  }, [theme]);

  return (
    <MainContext.Provider value={{ theme, setTheme } as IMainContext}>
      {children}
    </MainContext.Provider>
  );
}

export const useChangeTheme = () => useContext(MainContext);
