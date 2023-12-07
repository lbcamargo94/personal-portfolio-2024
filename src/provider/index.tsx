import { useCallback, useContext, useState } from "react";
import { ThemeContext } from "@/context";

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
