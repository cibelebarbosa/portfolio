import * as React from "react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { CiAt } from "react-icons/ci";

export function Contact() {
  return (
    <>
      <section className="flex justify-around py-9">
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle className="text-xl">Fale comigo!</CardTitle>
            <CardDescription className="text-xs">
              Me mande uma mensagem ou entre em contato pelas minhas redes
              profissionais abaixo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Empresa" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Tipo de contato</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Vaga de emprego</SelectItem>
                      <SelectItem value="sveltekit">Freelancer</SelectItem>
                      <SelectItem value="astro">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message-2">Sua mensagem</Label>
                  <Textarea
                    placeholder="Escreva sua mensagem."
                    id="message-2"
                  />
                  <p className="text-sm text-muted-foreground">
                    Descreva o motivo do seu contato.
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="px-12 w-2/4">Enviar</Button>
          </CardFooter>
        </Card>
      </section>
      <section className="flex justify-around py-9">
        <div className="w-1/2 border rounded-md p-9">
          <span className="flex items-center space-x-3 pb-9">
          <CiAt  size="1.5rem"/>
            <h3 className="text-2xl font-semibold">
              Minhas redes profissionais:
            </h3>
            
          </span>
          <ol className="list-none">
            <li>
              <a
                className="flex space-x-5 cursor-pointer"
                href="https://www.linkedin.com/in/cibele-barbosa-da-silva/"
                target="_blank"
              >
                <BsLinkedin size="1.5rem" />
                <p>Linkedin: Cibele Barbosa da Silva</p>
              </a>
            </li>
            <li className="flex space-x-5 mt-5">
              <a
                className="flex space-x-5 cursor-pointer"
                href="https://github.com/cibelebarbosa"
                target="_blank"
              >
                <FaSquareGithub size="1.6rem" />
                <p>GitHub: cibelebarbosa</p>
              </a>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
