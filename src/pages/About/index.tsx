import TesteTimeLine from "@/components/TimeLine";
import TimelineData from "@/data/events/envents";
import { v4 as uuidv4 } from "uuid";

export default function About({ id }: { id: string }) {
  return (
    <div
      id={id}
      className="flex py-10 min-h-screen max-w-4xl flex-col items-center justify-evenly font-sans bg-primary text-primary"
    >
      <div className="felx h-full max-w-2xl">
        <h1 className="text-primary text-4xl w-full text-balance text-center">
          Sobre Min
        </h1>
      </div>

      <div className="felx h-full max-w-2xl">
        <p className="text-primary mt-12 w-full items-center align-middle">
          Sou Lucas Camargo, e considero uma honra compartilhar minha
          experiência e competências com você. <br />
          <br />
          Sou apaixonado por tecnologias e tenho um carinho especial por
          programação e desenvolvimento web. <br />
          <br />
          Venho trabalhando com programação desde de 2021, com frontend e
          backend e sempre estudando para me manter atualizado. <br />
          <br />
          Atualmente trabalho em uma empresa desenvolvendo um grande sistema,
          junto de uma equipe de desenvolvedores sensacional! <br />
          <br />
          Meu foco atual é desenvolver aplicações web, sites responsivos,
          interfaces grficas com a melhor experiência para os usuários e muito
          mais.
        </p>
      </div>
      <div className="py-24">
        {TimelineData.reverse().map((event) => (
          <TesteTimeLine {...event} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
}
