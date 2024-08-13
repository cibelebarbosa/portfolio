import AvatarPessoal from "../assets/avatar.png";
import ProfessionalIcon from "../assets/ilustracao-de-conceito-abstrato-de-frameworks-multiplataforma.png";
import Education from "../assets/education.png";
import { FaReact } from "react-icons/fa";
import { RiAngularjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { SiDotnet } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { GiStarMedal } from "react-icons/gi";

export default function About() {
  return (
    <div className="py-4 sm:py-9">
      <div className="px-1 lg:px-60 xl:96">
      <section className="flex justify-around ">
        <div className="hidden sm:flex w-1/4">
          <img src={AvatarPessoal} alt="ProgrammingBG" />
        </div>
        <div className="flex items-stretch w-3/4 sm:w-1/2 self-center">
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

      <hr className="my-4 mx-24 sm:mx-10" />

      <section className="flex justify-around">
        <div className="flex items-stretch w-3/4 sm:w-1/2 self-center">
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
              especializados em Angular, React e UI/UX, e em Gerenciamento Ágil
              / Metodologia Agile.
            </p>
          </div>
        </div>

        <div className="h-80 hidden sm:flex self-center">
          <img src={Education} alt="ProgrammingBG" />
        </div>
      </section>

      <hr className="my-4 mx-24 sm:mx-10" />

      <section className="flex justify-around">
        <img
          src={ProfessionalIcon}
          alt="ProgrammingBG"
          className="h-80 hidden sm:flex"
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

      <hr className="my-4 mx-24 sm:mx-10" />

      <section className="flex justify-around">
        <div className="flex items-stretch w-3/4 sm:w-1/2 self-center">
          <div>
            <div>
              <h3 className="text-center md:text-left text-2xl font-semibold mb-3">
                Minhas principais habilidades:
              </h3>
              <ul className="list-disc text-md w-full text-justify tracking-widest">
                <li>
                  <span className="font-bold">Desenvolvimento FullStack:</span>{" "}
                  Experiência sólida em HTML, CSS, JavaScript e TypeScript.
                </li>
                <li>
                  <span className="font-bold">Frameworks Front-End:</span>{" "}
                  Proficiência em Angular e ReactJS.
                </li>
                <li>
                  <span className="font-bold">Desenvolvimento Back-End:</span>{" "}
                  Competente em NodeJS, Java e C#.
                </li>
                <li>
                  <span className="font-bold">Bancos de Dados:</span>{" "}
                  Experiência com MySQL e PostgreSQL.
                </li>
                <li>
                  <span className="font-bold">Tecnologias e Ferramentas:</span>{" "}
                  Conhecimento em GraphQL, Jasmine Framework e Git.
                </li>
                <li>
                  <span className="font-bold">Metodologias Ágeis:</span>{" "}
                  Experiência em Scrum.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/4 self-center">
          <GiStarMedal size="200" />
        </div>
      </section>
      <hr className="my-4 mx-24 sm:mx-10 mt-12" />
      <section className="flex justify-around py-6 px-12 mt-3">
        
        <FaReact size="3rem" />
        <RiAngularjsLine size="3rem" />
        <FaNodeJs size="3rem" />
        <RiJavascriptLine size="3rem" />
        <SiDotnet size="3rem" />
        <SiMysql size="3rem" />
        <DiPostgresql size="3rem" />
        <FaGitAlt size="3rem" />
        <TbBrandTypescript size="3rem" />
      </section>
      </div>
    </div>
  );
}
