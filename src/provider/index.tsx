import { useCallback, useContext, useState } from "react";
import { ThemeContext } from "@/context";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return "dark";
    }
  }

  const userMedia = window.matchMedia("prefers-color-schema: dark");
  if (userMedia.matches) {
    return "dark";
  }

  return;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState({});

  const handleThemeChange = useCallback((theme: string) => {
    setTheme(theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useChangeTheme = () => useContext(ThemeContext);
