import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "../../assets/logo-portfolio.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { IoMenu } from "react-icons/io5";

enum MenuTypes {
  inicio = 1,
  sobre = 2,
  projetos = 3,
  contato = 4,
}

type Props = {
  setMenuItem: any;
};

export function AppBarCustom({ setMenuItem }: Props) {
  return (
    <>
      <section className="hidden sm:block">
        <Menubar className="flex items-stretch bg-neutral-950 text-slate-50 border-none py-8">
          <Avatar className="self-center">
            <AvatarImage src={Logo} />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <div className="text-lg font-semibold self-center">Cibele Silva</div>
        </Menubar>
        <Menubar className="shadow-sm shadow-slate-800 bg-neutral-950 text-slate-50 border-none mb-3">
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => setMenuItem(MenuTypes.inicio)}
              className="cursor-pointer"
            >
              Início
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => setMenuItem(MenuTypes.sobre)}
              className="cursor-pointer"
            >
              Sobre mim
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => setMenuItem(MenuTypes.projetos)}
              className="cursor-pointer"
            >
              Projetos
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => setMenuItem(MenuTypes.contato)}
              className="cursor-pointer"
            >
              Contato
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </section>

      <section className="block sm:hidden ">
        <Menubar className="shadow-sm shadow-slate-800 bg-neutral-950 text-slate-50 border-none py-8 px-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                <IoMenu size="1.5rem" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator /> */}
              <DropdownMenuItem
                onClick={() => setMenuItem(MenuTypes.inicio)}
                className="cursor-pointer"
              >
                Início
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setMenuItem(MenuTypes.sobre)}
                className="cursor-pointer"
              >
                Sobre mim
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setMenuItem(MenuTypes.projetos)}
                className="cursor-pointer"
              >
                Projetos
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setMenuItem(MenuTypes.contato)}
                className="cursor-pointer"
              >
                Contato
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex w-full justify-end  items-stretch">
            <h1 className="self-center">Cibele B Silva</h1>
            <Avatar className="">
              <AvatarImage src={Logo} />
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
          </div>
        </Menubar>
      </section>
    </>
  );
}
