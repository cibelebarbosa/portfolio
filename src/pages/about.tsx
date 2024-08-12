import { Card, CardContent } from "@/components/ui/card";
import ProgrammingBG from "../assets/programming-bg.jpg";
import Study from "../assets/icone-de-ideia.png";
import ProfessionalIcon from "../assets/ilustracao-de-conceito-abstrato-de-frameworks-multiplataforma.png";

export default function About() {
  return (
    <div className="py-3">
      <section className="flex justify-around">
        <Card className="w-1/4 bg-zinc-950 text-slate-50">
          <CardContent className="p-3">
            <img src={ProgrammingBG} alt="ProgrammingBG" />
          </CardContent>
        </Card>
        <div className="w-1/3 text-slate-50">
          <p className="tracking-widest">
            Sou Cibele Barbosa da Silva, uma desenvolvedora FullStack com uma
            base sólida em diversas tecnologias e um histórico de contribuições
            significativas em projetos desafiadores. Minha trajetória
            profissional e acadêmica reflete meu comprometimento com a
            excelência técnica e a inovação.
          </p>
        </div>
      </section>
      <hr className="my-4" />
      <section className="flex justify-around">
        <div className="w-1/2 text-slate-50">
          <p className="tracking-widest">
            Atualmente, estou cursando Sistemas para Internet na Anhembi
            Morumbi, uma etapa que complementa e expande meu conhecimento
            adquirido na graduação em Análise e Desenvolvimento de Sistemas pela
            Anhanguera. Essa formação foi precedida por um curso técnico em
            Informática para Internet no IFSP Campus Guarulhos, onde comecei a
            desenvolver minhas habilidades em programação e desenvolvimento web.
          </p>
        </div>

        <img src={Study} alt="ProgrammingBG" className="h-60" />
      </section>
      <hr className="my-4" />
      <section className="flex justify-around">
        <img src={ProfessionalIcon} alt="ProgrammingBG" className="h-60" />
        <div className="w-1/2 text-slate-50">
          <p className="tracking-widest">
            Atualmente, estou cursando Sistemas para Internet na Anhembi
            Morumbi, uma etapa que complementa e expande meu conhecimento
            adquirido na graduação em Análise e Desenvolvimento de Sistemas pela
            Anhanguera. Essa formação foi precedida por um curso técnico em
            Informática para Internet no IFSP Campus Guarulhos, onde comecei a
            desenvolver minhas habilidades em programação e desenvolvimento web.
          </p>
        </div>
      </section>
    </div>
  );
}
