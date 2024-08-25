import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function TabAbout() {
  return (
    <>
      <section className="hidden sm:block py-32 ">
        <h2 className="text-center font-bold text-3xl font-mono">
          Minhas habilidades incluem:
        </h2>
        <hr className="my-5 mx-24 lg:mx-36 xl:mx-96 border-red-950 border-dashed" />
        <div className="justify-center text-center items-center">
          <Tabs defaultValue="front" className=" font-semibold text-lg">
            <TabsList>
              <TabsTrigger className="font-mono" value="front">
                Desenvolvimento Front-End
              </TabsTrigger>
              <TabsTrigger className="font-mono" value="back">
                Desenvolvimento Back-End
              </TabsTrigger>
              <TabsTrigger className="font-mono" value="data">
                Banco de Dados
              </TabsTrigger>
            </TabsList>
            <div className="px-12 lg:px-64">
              <TabsContent value="front">
                O front end é a parte do site ou aplicativo que os usuários veem
                e com a qual interagem, incluindo botões e layout. Utilizando
                tecnologias modernas como React e Angular, eu desenvolvo
                interfaces altamente funcionais e atraentes. React permite a
                criação de componentes dinâmicos e reativos que se atualizam
                rapidamente com base nas ações do usuário. Por outro lado,
                Angular oferece uma abordagem estruturada para construir
                aplicações robustas e completas. O objetivo é assegurar que a
                'face' do aplicativo seja intuitiva e envolvente para o usuário
                final.
              </TabsContent>
              <TabsContent value="back">
                O backend é a parte do site ou aplicativo que cuida da lógica e
                do processamento de dados, como gerenciar informações e
                autenticar usuários. Usando tecnologias modernas como Node.js e
                C#, eu construo a infraestrutura que faz tudo funcionar nos
                bastidores. Node.js permite criar sistemas rápidos e escaláveis
                com JavaScript, enquanto C# é ideal para desenvolver aplicações
                robustas e seguras. Essas tecnologias garantem que o backend
                seja confiável e suporte uma experiência de usuário eficiente e
                sem problemas.
              </TabsContent>
              <TabsContent value="data">
                Em projetos de desenvolvimento, uma parte fundamental é o
                gerenciamento de banco de dados, onde armazenamos e recuperamos
                informações essenciais. Eu trabalho com a criação e integração
                de bancos de dados, utilizando tecnologias como MySQL e
                PostgreSQL. MySQL é conhecido por sua simplicidade e eficiência,
                ideal para uma variedade de aplicações. PostgreSQL, por outro
                lado, oferece recursos avançados e é excelente para aplicações
                que exigem um banco de dados mais robusto e flexível. Embora eu
                não me aprofunde nas complexidades da administração de bancos de
                dados, meu papel inclui conectar esses bancos ao sistema e
                garantir que as requisições e validações de dados sejam feitas
                de forma eficaz.
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <section className="py-24 px-6 sm:hidden">
        <h2 className="text-center font-bold text-3xl font-mono ">
          Minhas habilidades incluem:
        </h2>
        <hr className="my-5 border-red-950 border-dashed" />
        <div className="flex justify-center items-center ">
          <Tabs
            defaultValue="front"
            orientation="vertical"
            className="flex font-semibold"
          >
            <div className="mr-2">
              <TabsList className="block ">
                <TabsTrigger
                  className="font-mono text-center w-full"
                  value="front"
                >
                  Front-End
                </TabsTrigger>
              </TabsList>
              <TabsList className="block text-center">
                <TabsTrigger
                  className="font-mono text-center w-full"
                  value="back"
                >
                  Back-End
                </TabsTrigger>
              </TabsList>
              <TabsList className="block">
                <TabsTrigger
                  className="font-mono text-center w-full"
                  value="data"
                >
                  Banco de Dados
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent className="mt-0 " value="front">
              O front end é a parte do site ou aplicativo que os usuários veem e
              com a qual interagem, incluindo botões e layout. Utilizando
              tecnologias modernas como React e Angular, eu desenvolvo
              interfaces altamente funcionais e atraentes. React permite a
              criação de componentes dinâmicos e reativos que se atualizam
              rapidamente com base nas ações do usuário. Por outro lado, Angular
              oferece uma abordagem estruturada para construir aplicações
              robustas e completas. O objetivo é assegurar que a 'face' do
              aplicativo seja intuitiva e envolvente para o usuário final.
            </TabsContent>
            <TabsContent className="mt-0" value="back">
              O backend é a parte do site ou aplicativo que cuida da lógica e do
              processamento de dados, como gerenciar informações e autenticar
              usuários. Usando tecnologias modernas como Node.js e C#, eu
              construo a infraestrutura que faz tudo funcionar nos bastidores.
              Node.js permite criar sistemas rápidos e escaláveis com
              JavaScript, enquanto C# é ideal para desenvolver aplicações
              robustas e seguras. Essas tecnologias garantem que o backend seja
              confiável e suporte uma experiência de usuário eficiente e sem
              problemas.
            </TabsContent>
            <TabsContent className="mt-0" value="data">
              Em projetos de desenvolvimento, uma parte fundamental é o
              gerenciamento de banco de dados, onde armazenamos e recuperamos
              informações essenciais. Eu trabalho com a criação e integração de
              bancos de dados, utilizando tecnologias como MySQL e PostgreSQL.
              MySQL é conhecido por sua simplicidade e eficiência, ideal para
              uma variedade de aplicações. PostgreSQL, por outro lado, oferece
              recursos avançados e é excelente para aplicações que exigem um
              banco de dados mais robusto e flexível. Embora eu não me aprofunde
              nas complexidades da administração de bancos de dados, meu papel
              inclui conectar esses bancos ao sistema e garantir que as
              requisições e validações de dados sejam feitas de forma eficaz.
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
