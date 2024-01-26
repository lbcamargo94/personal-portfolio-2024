import { MainContext } from "@/context/MainContext";
import { useState } from "react";

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [navName, setNavName] = useState<string>("");

  return (
    <MainContext.Provider
      value={{
        navName,
        setNavName,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
