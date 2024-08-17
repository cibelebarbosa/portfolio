import AvatarPessoal from "../assets/avatar.png";
import { Button } from "@/components/ui/button";
import { FaAngleDoubleRight } from "react-icons/fa";

type Props = {
  setMenuItem: React.Dispatch<React.SetStateAction<number>>;
};

export default function Home({ setMenuItem }: Props) {
  return (
    <>
      <section className="flex flex-wrap sm:flex-nowrap justify-around p-8 md:p-12 lg:px-52 xl:96">
        <div className="flex w-2/3 h-80">
          <img src={AvatarPessoal} alt="ProgrammingBG" />
        </div>
        <div className="w-3/4 md:w-full space-y-3">
          <div className="text-slate-50 border rounded-lg p-4 shadow-md shadow-slate-800">
            <p className="leading-9 text-justify text-lg font-medium">
              Olá! Bem-vindo ao meu portfólio!
            </p>
          </div>
          <div className="text-slate-50 border rounded-lg p-4 shadow-md shadow-slate-800 space-y-5">
            <p className="leading-9 text-justify text-lg font-medium">
              Neste espaço, vou compartilhar um pouco sobre minha trajetória
              profissional e minha experiência. Aqui, você encontrará detalhes
              sobre meus projetos, habilidades e a paixão que coloco em cada
              trabalho. Sinta-se à vontade para explorar e conhecer melhor o que
              faço e como posso contribuir para o seu próximo projeto.
            </p>
            <div className="flex justify-center sm:justify-end">
              <Button
                className="px-9"
                variant="secondary"
                onClick={() => setMenuItem(2)}
              >
                <span className="flex items-center space-x-3">
                  <span>Venha me conhecer</span>
                  <FaAngleDoubleRight className="self-auto" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
