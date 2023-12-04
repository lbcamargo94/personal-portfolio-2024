import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full h-[750px] flex flex-col">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div>
          <p>Olá, meu nome é</p>
          <h2>Lucas Camargo</h2>
          <h3>Bem-vindo ao meu Mundo de Códigos e Café! ☕🚀</h3>
          <p>
            Oi! Eu sou Lucas Camargo, um desenvolvedor web apaixonado por transformar
            ideias em realidade online. Este é o meu cantinho virtual, onde a simplicidade
            encontra a eficiência, e a criatividade não tem limite para um mundo de
            possibilidades.
          </p>

          <div>Tecnologias</div>

          <div>Contato</div>

          <Image
            width={420}
            height={400}
            src="/images/profile/profile_lucas_camargo.png"
            alt="Foto de perfil Lucas Camargo"
          />
        </div>
      </div>
    </section>
  );
};
