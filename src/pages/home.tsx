import { Card, CardContent } from "@/components/ui/card";
import ProgrammingBG from "../assets/programming-bg.jpg";

export default function Home() {
  return (
    <section className="flex justify-around">
      <Card className="w-1/2 bg-zinc-950 text-slate-50">
        <CardContent className="p-3">
          <img src={ProgrammingBG} alt="ProgrammingBG" />
          <blockquote className="mt-1 border-l-2 pl-6 italic text-xs">
            "Designed by Freepik"
          </blockquote>
        </CardContent>
      </Card>
      <div className="w-1/3 text-slate-50">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Bem-vindo ao meu portfólio!
        </h3>{" "}
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Neste espaço, vou compartilhar um pouco sobre minha trajetória
          profissional e minha experiência. Aqui, você encontrará detalhes sobre
          meus projetos, habilidades e a paixão que coloco em cada trabalho.
          Sinta-se à vontade para explorar e conhecer melhor o que faço e como
          posso contribuir para o seu próximo projeto.
        </p>
      </div>
    </section>
  );
}
