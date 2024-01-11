"use client";

import Image from "next/image";
import "atropos/css";
import ImageProfile from "../../public/images/profile/profile_lucas_camargo.png";
import Atropos from "atropos/react";

export default function Main() {
  return (
    <section>
      <div
        id="inicio"
        className="flex min-h-screen flex-col items-center justify-start font-sans bg-primary text-primary"
      >
        <h1 className="text-primary font-sans p-3">Início</h1>
      </div>

      <div
        id="abaut"
        className="flex min-h-max h-full w-full flex-col items-center justify-start font-sans bg-primary text-primary"
      >
        <h1 className="text-primary font-sans p-3">Sobre</h1>

        <div className="flex flex-col px-3 py-6 items-center justify-between max-w-2xl w-full sm:flex-row sm:items-start ">
          <div className="transition duration-1000 ease-in-out hover:scale-105 flex flex-col items-start py-10 shadow-xl h-full w-full mx-4 rounded-xl">
            <p className="flex ps-2 text-primary mx-3 h-full">Olá, eu sou o... </p>
            <span className="ps-2 text-primary mx-3 h-full">Lucas Camargo</span>
          </div>

          <Atropos className="z-0 shadow-2xl" activeOffset={40} shadowScale={1.05}>
            <Image
              className="z-0 shadow-2xl rounded-2xl w-60 p-1 bg-sky-400"
              src={ImageProfile}
              alt="image-profile"
            />
          </Atropos>
        </div>
      </div>

      <div
        id="skilss"
        className="flex min-h-screen flex-col items-center justify-start font-sans bg-primary text-primary"
      >
        <h1 className="text-primary font-sans p-3">Habilidades</h1>
      </div>

      <div
        id="projects"
        className="flex min-h-screen flex-col items-center justify-start font-sans bg-primary text-primary"
      >
        <h1 className="text-primary font-sans p-3">Projetos</h1>
      </div>

      <div
        id="contact"
        className="flex min-h-screen flex-col items-center justify-start font-sans bg-primary text-primary"
      >
        <h1 className="text-primary font-sans p-3">Contato</h1>
      </div>
    </section>
  );
}
