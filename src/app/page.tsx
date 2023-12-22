"use client";
import { IMainContext } from "@/interface/IContext";
import { useChangeTheme } from "@/provider";
import { cn } from "@/utils/utils";

const Home = () => {
  const { theme } = useChangeTheme() as IMainContext;

  console.log(theme);

  const darkMode = theme === "dark";

  return (
    <main
      className={cn(
        "d-flex min-h-screen flex-col items-center justify-between py-24",
        darkMode ? "bg-black" : "bg-blue",
      )}
    ></main>
  );
};

export default Home;
