import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "../../assets/logo-portfolio.png";

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
      <Menubar className="bg-neutral-950 text-slate-50 border-none">
        <Avatar>
          <AvatarImage src={Logo} />
          <AvatarFallback>CBSilva</AvatarFallback>
        </Avatar>
        <div className="text-lg font-semibold">Cibele Silva</div>
        <small className="text-xs font-medium leading-none">Developer</small>
      </Menubar>
      <Menubar className="bg-neutral-950 text-slate-50 border-none mb-3">
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
            disabled
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
    </>
  );
}
