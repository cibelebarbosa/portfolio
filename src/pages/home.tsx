import { Card, CardContent } from "@/components/ui/card";
import ProgrammingBG from "../assets/programming-bg.jpg";
import { Button } from "@/components/ui/button";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  setMenuItem: any;
};

export default function Home({ setMenuItem }: Props) {
  return (
    <>
      <section className="p-2 scroll-m-20">
        <h3 className="text-center md:text-left text-2xl font-semibold">
          Bem-vindo ao meu portfólio!
        </h3>
      </section>
      <hr className="my-4 mx-9 sm:mx-0" />
      <section className="flex justify-around p-2">
        <Card className="hidden sm:flex w-1/3 bg-zinc-950 text-slate-50">
          <CardContent className="p-3">
            <img src={ProgrammingBG} alt="ProgrammingBG" />
            <blockquote className="mt-1 border-l-2 pl-6 italic text-xs">
              "Designed by Freepik"
            </blockquote>
          </CardContent>
        </Card>
        <div className="w-3/4 md:w-1/2 text-slate-50">
          <p className="leading-9 text-justify text-lg font-medium">
            Neste espaço, vou compartilhar um pouco sobre minha trajetória
            profissional e minha experiência. Aqui, você encontrará detalhes
            sobre meus projetos, habilidades e a paixão que coloco em cada
            trabalho. Sinta-se à vontade para explorar e conhecer melhor o que
            faço e como posso contribuir para o seu próximo projeto.
          </p>
          <Button
            className="sm:float-end px-9 py-px mt-9"
            variant="secondary"
            onClick={() => setMenuItem(1)}
          >
            <span className="flex items-center space-x-3">
              <span>Venha me conhecer</span>
              <FaAngleDoubleRight className="self-auto" />
            </span>
          </Button>
        </div>
      </section>
    </>
  );
}
