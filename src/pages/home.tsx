import AvatarPessoal from "../assets/avatar.png";
import { Button } from "@/components/ui/button";
import { FaAngleDoubleRight } from "react-icons/fa";


type Props = {
  setMenuItem: React.Dispatch<React.SetStateAction<number>>;
};

export default function Home({ setMenuItem }: Props) {
  return (
    <>
      <section className="flex justify-around py-12 px-12 lg:px- xl:96">
        <div className="hidden sm:flex w-1/3 h-80">
          <img src={AvatarPessoal} alt="ProgrammingBG" />
        </div>
        <div className="w-3/4 md:w-1/2 space-y-3">
          <div className="text-slate-50 border rounded-lg p-4 shadow-md shadow-slate-800">
            <p className="leading-9 text-justify text-lg font-medium">
              Olá! Bem-vindo ao meu portfólio!
            </p>
          </div>
          <div className=" text-slate-50 border rounded-lg p-4 shadow-md shadow-slate-800">
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
        </div>
      </section>
      
    </>
  );
}
