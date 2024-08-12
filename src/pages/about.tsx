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
        <div className="flex items-stretch w-3/4 sm:w-1/2">
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
        <div className="flex items-stretch w-3/4 sm:w-1/2">
          <div>
            <h3 className="text-center md:text-left text-2xl font-semibold mb-3">
              Formação:
            </h3>
            <p className="w-full text-justify tracking-widest">
              Atualmente, estou cursando Sistemas para Internet na Anhembi
              Morumbi, o que complementa e expande o conhecimento adquirido na
              minha graduação em Análise e Desenvolvimento de Sistemas pela
              Anhanguera. Essa formação foi precedida por um curso técnico em
              Informática para Internet no IFSP Campus Guarulhos, onde comecei a
              desenvolver minhas habilidades em programação e desenvolvimento
              web.
            </p>
            <p className="w-full text-justify tracking-widest">
              Além da minha formação acadêmica, obtive a certificação de AWS
              Certified Cloud Practitioner em 2022. Também completei cursos
              especializados em Angular, React e UI/UX, e em Gerenciamento Ágil /
              Metodologia Agile.
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
        <div className="flex items-stretch w-3/4 sm:w-1/2">
          <div>
            <h3 className="text-center md:text-left text-2xl font-semibold mb-3">
              Carreira:
            </h3>
            <section>
              <h2 className="font-semibold text-lg">Application Developer</h2>
              <p className="font-light">Agosto 2022 – Junho 2024</p>
              <p className="font-light">
                Atuei como desenvolvedor em projetos desafiadores, utilizando
                Angular e TypeScript para criar soluções robustas e escaláveis.
                Minha atuação incluiu desde o desenvolvimento e adaptação de
                bibliotecas internas até a realização de processos de deploy na
                AWS. Também trabalhei com GraphQL para construção de queries e
                realizei correções e melhorias no back-end utilizando Java.
                Experiência constante como líder técnico e aplicação das
                práticas ágeis com Scrum.
              </p>
              <p className="font-semibold text-md">
                Projeto: Plard - Santander
              </p>
            </section>
            <hr className="my-4 mx-9 sm:mx-0" />

            <section>
              <h2 className="font-semibold text-lg">FrontEnd Developer</h2>
              <p className="font-light">Janeiro 2020 - Julho 2022</p>
              <p className="font-light">
                Desenvolvi interfaces de usuário interativas e responsivas para
                diversos projetos, utilizando uma variedade de tecnologias
                front-end. Minha experiência inclui a criação de soluções para a
                Secretaria de Agricultura e Abastecimento do Estado de São Paulo
                e para o Tribunal de Contas do Estado de São Paulo (TCESP). Além
                de trabalhar com JavaScript, TypeScript, CSS, e frameworks
                modernos como React e Angular, também atuei como líder técnico,
                coordenando equipes e implementando práticas de versionamento
                com Git e GitLab.
              </p>
              <p className="font-semibold text-md">
                Projeto: Gedave 2.0 - Secretaria de Agricultura e Abastecimento
                do Estado de São Paulo
              </p>
              <p className="font-semibold text-md">
                Projeto: Siscoe - Tribunal de Contas do Estado de São Paulo
                (TCESP)
              </p>
            </section>
            <hr className="my-4 mx-9 sm:mx-0" />

            <section>
              <h2 className="font-semibold text-lg">FrontEnd Trainee</h2>
              <p className="font-light">Setembro 2019 - Janeiro 2020</p>
              <p className="font-light">
                Durante o estágio, participei de projetos internos, adquirindo
                experiência prática em Angular 2+, Python e Java. Esta fase foi
                fundamental para o meu desenvolvimento profissional,
                permitindo-me construir uma base sólida em tecnologias front-end
                e back-end.
              </p>
              <p className="font-semibold text-md">
                Projeto: Projetos internos da empres
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
