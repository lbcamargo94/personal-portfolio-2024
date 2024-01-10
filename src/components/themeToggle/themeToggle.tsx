import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { useChangeTheme } from "@/provider/mainProvider";
import { IMainContext } from "@/interface/IContext";

export const ThemeToogle = () => {
  const { theme, setTheme } = useChangeTheme() as IMainContext;

  return (
    <div>
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
