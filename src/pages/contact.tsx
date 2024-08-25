import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { CiAt } from "react-icons/ci";
import { PiMicrosoftOutlookLogoLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import FotoPessoal from "../assets/foto-cartoon-cut.png";

export function Contact() {
  const [emailHTML, setEmailHTML] = useState<string>("");
  const [formValido, setFormValido] = useState<string>("");

  useEffect(() => {
    if (!emailHTML) return;

    fetch("https://portfolio-server-afyf.onrender.com/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mensagem: emailHTML }),
    })
      .then(() => {
        setFormValido("enviado");
        setTimeout(() => {
          setFormValido("");
        }, 5000);
      })
      .catch(() =>
        setFormValido(
          "Erro ao enviar, por favor tente novamente ou entre em contato pelas minhas redes profissionais!"
        )
      );
  }, [emailHTML]);

  function handleSubmit(event: any) {
    setFormValido("");
    const campos = event.target;
    event.preventDefault();
    if (
      !campos.tipo.value ||
      !campos.email.value ||
      !campos.empresa.value ||
      !campos.nome.value ||
      !campos.mensagem.value
    ) {
      setFormValido("invalido");
      return;
    }
    setEmailHTML(`<h1>${campos.tipo.value}</h1>
      <p>${campos.empresa.value}</p>
      <p>${campos.email.value}</p>
      <p>${campos.nome.value}</p>
      <p>${campos.mensagem.value}</p>`);
  }
  return (
    <>
      <section className="shadow-sm shadow-red-950">
        <div className="block sm:flex justify-around items-center  text-red-50 animate-slideIn">
          <div className="sm:w-1/2 border rounded-md p-9 h-fit bg-red-950">
            <span className="flex items-center space-x-3 pb-9">
              <CiAt size="1.5rem" />
              <h3 className="text-2xl font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                Minhas redes:
              </h3>
            </span>
            <ol className="list-none">
              <li>
                <a
                  className="flex space-x-2 sm:space-x-5 cursor-pointer"
                  href="https://www.linkedin.com/in/cibele-barbosa-da-silva/"
                  target="_blank"
                >
                  <BsLinkedin size="1.5rem" />
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    Linkedin: Cibele Barbosa da Silva
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="flex space-x-2 sm:space-x-5 cursor-pointer mt-2"
                  href="https://github.com/cibelebarbosa"
                  target="_blank"
                >
                  <FaSquareGithub size="1.6rem" />
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    GitHub: cibelebarbosa
                  </p>
                </a>
              </li>
              <li>
                <a
                  className="flex space-x-2 sm:space-x-5 cursor-pointer mt-2"
                  href="mailto:cibelesilva.dev@outlook.com"
                >
                  <PiMicrosoftOutlookLogoLight size="1.6rem" />
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    E-mail: cibelesilva.dev@outlook.com
                  </p>
                </a>
              </li>
            </ol>
          </div>
          <div className="flex justify-center text-center">
            <img src={FotoPessoal} alt="" className="w-72" />
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-around py-9 space-y-9 md:space-y-0">
        <Card className="w-3/4 md:w-3/4 bg-zinc-100">
          {formValido === "invalido" ? (
            <div className="p-2">
              <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Formulário inválido!</AlertTitle>
                <AlertDescription>
                  Por favor preencha / verifique todos os campos.
                </AlertDescription>
              </Alert>
            </div>
          ) : formValido === "enviado" ? (
            <div className="p-2">
              <Alert className="border-teal-800 text-teal-800">
                <AlertTitle>Enviado!</AlertTitle>
                <AlertDescription>
                  Retornarei seu contato o mais rápido possível. Obrigada!.
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <></>
          )}

          <CardHeader>
            <CardTitle className="text-xl">Fale comigo!</CardTitle>
            <CardDescription className="text-xs">
              Me mande uma mensagem e retornarei no seu e-mail o mais breve
              possível.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Nome" name="nome" />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" placeholder="E-mail" name="email" />
                </div>

                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message-2">Sua mensagem</Label>
                  <Textarea
                    placeholder="Escreva sua mensagem."
                    id="message-2"
                    name="mensagem"
                  />
                  <p className="text-sm text-muted-foreground">
                    Descreva o motivo do seu contato.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center sm:justify-end">
              <Button className="px-12 w-3/4 sm:w-2/4 bg-red-950">
                Enviar
              </Button>
            </CardFooter>
          </form>
        </Card>
      </section>
    </>
  );
}
