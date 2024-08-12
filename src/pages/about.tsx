import { Card, CardContent } from "@/components/ui/card";
import ProgrammingBG from "../assets/programming-bg.jpg";
import ProfessionalIcon from "../assets/ilustracao-de-conceito-abstrato-de-frameworks-multiplataforma.png";
import Education from "../assets/education.png";

export default function About() {
  return (
    <div className="py-4 sm:py-9">
      <section className="flex justify-around">
        <Card className="w-1/4 bg-zinc-950 text-slate-50 hidden sm:flex">
          <CardContent className="p-3">
            <img src={ProgrammingBG} alt="ProgrammingBG" />
          </CardContent>
        </Card>
        <div className="flex items-stretch w-1/2">
          <div>
            <h3 className="text-center md:text-left text-2xl font-semibold mb-3">
              É um prazer conhece-lo (a):
            </h3>
            <p className="w-full text-justify tracking-widest">
              Sou Cibele Barbosa da Silva, uma desenvolvedora FullStack com uma
              base sólida em diversas tecnologias e um histórico de
              contribuições significativas em projetos desafiadores. Minha
              trajetória profissional e acadêmica reflete meu comprometimento
              com a excelência técnica e a inovação.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-4 mx-9 sm:mx-0" />

      <section className="flex justify-around">
        <div className="flex items-stretch w-1/2">
          <div>
            <h3 className="text-center md:text-left text-2xl font-semibold mb-3">
              Formação:
            </h3>
            <p className="w-full text-justify tracking-widest">
              Atualmente, estou cursando Sistemas para Internet na Anhembi
              Morumbi, uma etapa que complementa e expande meu conhecimento
              adquirido na graduação em Análise e Desenvolvimento de Sistemas
              pela Anhanguera. Essa formação foi precedida por um curso técnico
              em Informática para Internet no IFSP Campus Guarulhos, onde
              comecei a desenvolver minhas habilidades em programação e
              desenvolvimento web.
            </p>
          </div>
        </div>

        <img
          src={Education}
          alt="ProgrammingBG"
          className="h-60 hidden sm:flex"
        />
      </section>

      <hr className="my-4 mx-9 sm:mx-0" />

      <section className="flex justify-around">
        <img
          src={ProfessionalIcon}
          alt="ProgrammingBG"
          className="h-60 hidden sm:flex"
        />
        <div className="flex items-stretch w-1/2">
          <div>
            <h3 className="text-center md:text-left text-2xl font-semibold mb-3">
              Carreira:
            </h3>
            <p className="w-full text-justify tracking-widest">
              Atualmente, estou cursando Sistemas para Internet na Anhembi
              Morumbi, uma etapa que complementa e expande meu conhecimento
              adquirido na graduação em Análise e Desenvolvimento de Sistemas
              pela Anhanguera. Essa formação foi precedida por um curso técnico
              em Informática para Internet no IFSP Campus Guarulhos, onde
              comecei a desenvolver minhas habilidades em programação e
              desenvolvimento web.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
