import FotoPessoal from "../../assets/foto-cartoon-cut.png";

export default function BannerCustom() {
  return (
    <>
      <section className="flex justify-center items-stretch bg-zinc-200 pt-12 text-red-950 px-8 sm:px-24 shadow-sm shadow-slate-800 w-full">
        <div className="block">
          <div className="flex h-80 justify-center text-center items-center space-x-9">
            <div className="w-2/3 sm:w-1/3 animate-slideIn">
              <h2 className="font-extrabold text-3xl mb-2 font-mono">
                FullStack Developer
              </h2>
              <p className="">
                Desenvolvedora Fullstack com experiência em criar soluções web
                completas e escaláveis.
              </p>
            </div>
            <img
              src={FotoPessoal}
              alt="ProgrammingBG"
              className="hidden sm:flex h-80 "
            />
            <div className="w-2/3 sm:w-1/3 animate-slideOn">
              <h2 className="font-extrabold text-3xl mb-2 font-mono">
                Neste espaço...
              </h2>
              <p className="">
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
    </>
  );
}
