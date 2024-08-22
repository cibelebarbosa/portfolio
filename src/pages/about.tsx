import AvatarPessoal from "../assets/foto-cut.png";
import Oliver from "../assets/melhor-amigo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <>
      <section id="#sobremim" className="w-full">
        <h2 className="text-center font-bold text-2xl">
          Aqui uma breve descrição sobre quem sou.
        </h2>
        <Separator className="my-5" />
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md">
              Um pouquinho sobre mim
            </AccordionTrigger>
            <AccordionContent className="flex items-center">
              <img src={AvatarPessoal} alt="" className="w-28" />
              <p className="">
                Denvolvedora FullStack com uma base sólida em diversas
                tecnologias e um histórico de contribuições significativas em
                projetos desafiadores. Minha trajetória profissional e acadêmica
                reflete meu comprometimento com a excelência técnica e a
                inovação. Sou Cibele Barbosa da Silva, uma des
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-md">
              Minha formação
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Atualmente, estou cursando Sistemas para Internet na Anhembi
                Morumbi, o que complementa e expande o conhecimento adquirido na
                minha graduação em Análise e Desenvolvimento de Sistemas pela
                Anhanguera. Essa formação foi precedida por um curso técnico em
                Informática para Internet no IFSP Campus Guarulhos, onde comecei
                a desenvolver minhas habilidades em programação e
                desenvolvimento web.
              </p>
              <p>
                Além da minha formação acadêmica, obtive a certificação de AWS
                Certified Cloud Practitioner em 2022. Também completei cursos
                especializados em Angular, React e UI/UX, e em Gerenciamento
                Ágil / Metodologia Agile.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-md">
              Principais habilidades
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc w-full tracking-widest">
                <li>
                  <span className="font-bold"> Desenvolvimento FullStack:</span>{" "}
                  Experiência sólida em HTML, CSS, JavaScript e TypeScript.
                </li>
                <li>
                  <span className="font-bold">Frameworks Front-End:</span>
                  Proficiência em Angular e ReactJS.
                </li>
                <li>
                  <span className="font-bold">Desenvolvimento Back-End:</span>{" "}
                  Competente em NodeJS, Java e C#.
                </li>
                <li>
                  <span className="font-bold">Bancos de Dados:</span>
                  Experiência com MySQL e PostgreSQL.
                </li>
                <li>
                  <span className="font-bold"> Tecnologias e Ferramentas:</span>{" "}
                  Conhecimento em GraphQL, Jasmine Framework e Git.
                </li>
                <li>
                  <span className="font-bold">Metodologias Ágeis:</span>
                  Experiência em Scrum.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-md">
              Meu melhor amigo
            </AccordionTrigger>
            <AccordionContent className="flex items-center">
              <img src={Oliver} alt="" className="w-28 mr-4" />
              <p>
                Esse aqui é o meu melhor amigo Oliver ou "ólinho". Ele está aqui
                porque ele é lindo e meu maior companheiro na saga do
                desenvolvimento de softwares.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
