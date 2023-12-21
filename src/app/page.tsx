import { IMainContext } from "@/interface/IContext";
import { useChangeTheme } from "@/provider";
import { cn } from "@/utils/utils";

export const Home = () => {
  const { theme } = useChangeTheme() as IMainContext;

  const darkMode = theme === "dark";

  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-between py-24, theme",
        darkMode ? "" : "",
      )}
    ></main>
  );
};
