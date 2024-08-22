import FotoPessoal from "../assets/foto-cartoon-cut.png";
import About from "./about";

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-stretch bg-zinc-200 pt-12 text-red-950 px-8 sm:px-24 shadow-sm shadow-slate-800 w-full">
        <div className="block">
          <div className="flex h-80 justify-center text-center items-center space-x-9">
            <div className="w-2/3 sm:w-1/3">
              <h2 className="font-extrabold text-lg mb-2">
                // FullStack Developer //
              </h2>
              <p className="animate-slideIn">
                Desenvolvedor Fullstack com experiência em criar soluções web
                completas e escaláveis.
              </p>
            </div>
            <img
              src={FotoPessoal}
              alt="ProgrammingBG"
              className="hidden sm:flex h-80 "
            />
            <div className="w-2/3 sm:w-1/3">
              <h2 className="font-extrabold text-lg mb-2">Neste espaço...</h2>
              <p className="mb-3 animate-slideOn">
                Você encontrará detalhes sobre meus projetos, habilidades e a
                paixão que coloco em cada trabalho.
              </p>
            </div>
          </div>
          <div className="flex justify-center text-center">
            <img
              src={FotoPessoal}
              alt="ProgrammingBG"
              className="sm:hidden h-80 "
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center items-stretch pt-12 text-red-950 px-24 ">
        <div className="flex items-center"></div>
        <About />
      </section>
    </>
  );
}
