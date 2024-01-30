import MyAvatar from "@/assets/images/profile_lucas_camargo.png";
import { MdContactMail, MdKeyboardDoubleArrowDown } from "react-icons/md";
import { BsMouse } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { useMainContext } from "@/hooks/UseMainContext";
import { IMainContext } from "@/interfaces/ContextApi/IMainContext";

export default function Home({ id }: { id: string }) {
  const { theme } = useMainContext() as IMainContext;

  return (
    <div
      id={id}
      className="flex pt-6 min-h-screen max-w-4xl flex-col items-center justify-center font-sans bg-primary text-primary"
    >
      <div className="flex flex-col justify-between items-center align-middle hover:cursor-default sm:flex-row">
        <div className="w-64 h-64 flex flex-col">
          <h2 className="text-primary text-4xl transition duration-300 ease-in-out hover:scale-110">
            Olá👋🏽, eu sou
            <span>
              <br />
              Lucas
            </span>
          </h2>

          <p className="text-primary  rounded p-3 my-6 text-balance text-center transition duration-300 ease-in-out hover:scale-110 hover:shadow-primary">
            "Inovação em Cada Byte: Onde a Habilidade se Encontra com a
            Tecnologia, Criando Software que Inspira."
          </p>
        </div>

        <div
          className="w-64 h-64 my-20 rounded-full hover:shadow-primary
      m-6 overflow-clip transition duration-300 ease-in-out hover:scale-110"
        >
          <img src={MyAvatar} alt="MyAvatar" className="rounded-full" />
        </div>
      </div>

      <div className="bg-sky-500 hover:scale-110 w-52 mt-6 rounded hover:shadow-primary transition duration-300 ease-in-out  hover:bg-primary">
        <ScrollLink
          to={"contact"}
          smooth={true}
          duration={500}
          delay={0}
          offset={-100}
        >
          {theme === "dark" ? (
            <div className="flex w-full rounded-full cursor-pointer items-center justify-between px-8 py-2 ">
              <span className="text-primary">Entre em Contato</span>
              <MdContactMail
                className="object-cover w-20 h-12"
                color="#f0f0f0"
              />
            </div>
          ) : (
            <div className="flex w-full rounded-full cursor-pointer items-center justify-between px-8 py-2">
              <span className="text-primary">Entre em Contato</span>
              <MdContactMail
                className="object-cover w-20 h-12"
                color="#151515"
              />
            </div>
          )}
        </ScrollLink>
      </div>

      <div className="h-40 w-full flex align-middle items-center justify-center m-8 hover:cursor-default">
        <span className="text-primary text-2xl align-middle items-center mx-6">
          Conheça o meu Perfil
        </span>
        <div className="bounce">
          <BsMouse size="2rem" />
          <MdKeyboardDoubleArrowDown size="2rem" />
        </div>
      </div>
    </div>
  );
}
