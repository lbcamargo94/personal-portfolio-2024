import { MainContext } from "@/context/MainContext";
import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window !== "undefined" && window.localStorage) {
    const themeStorage = window.localStorage.getItem("theme");

    if (typeof themeStorage === "string") {
      return themeStorage;
    }

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
  }

  return "light";
}

export const MainProvider = ({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: string;
}) => {
  const [navName, setNavName] = useState<string>("default");
  const [theme, setTheme] = useState<string>(getInitialTheme);
  const [menu, setMenu] = useState(false);

  const handleSetTheme = (newTheme: string) => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  // Aplicar tema inicial se fornecido
  useEffect(() => {
    if (initialTheme) {
      handleSetTheme(initialTheme);
    }
  }, [initialTheme]);

  // Atualizar o tema quando a variável 'theme' muda
  useEffect(() => {
    handleSetTheme(theme);
  }, [theme]);

  return (
    <MainContext.Provider
      value={{
        navName,
        setNavName,
        theme,
        setTheme,
        menu,
        setMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
