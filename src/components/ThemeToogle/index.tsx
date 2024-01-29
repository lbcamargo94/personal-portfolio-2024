import { useMainContext } from "@/hooks/UseMainContext";
import { IMainContext } from "@/interfaces/ContextApi/IMainContext";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";

export const ThemeToogle = () => {
  const { theme, setTheme } = useMainContext() as IMainContext;

  return (
    <div id="theme-toogle">
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="d-flex items-center justify-between"
      >
        {theme === "dark" ? (
          <CiLight
            color="#f0f0f0"
            size="2rem"
            className="transition duration-300 ease-in-out hover:scale-125"
          />
        ) : (
          <MdNightlight
            color="#151515"
            size="2rem"
            className="transition duration-300 ease-in-out hover:scale-125"
          />
        )}
      </button>
    </div>
  );
};
