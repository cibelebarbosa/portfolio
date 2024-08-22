import Logo from "../../assets/logo-remove-cut.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IoMenu } from "react-icons/io5";

enum MenuTypes {
  inicio = 1,
  sobre = 2,
  projetos = 3,
  contato = 4,
}

type Props = {
  setMenuItem: React.Dispatch<React.SetStateAction<number>>;
};

export function AppBarCustom({ setMenuItem }: Props) {
  return (
    <>
      <section className="hidden sm:flex justify-around p-3 shadow-sm shadow-red-950 bg-red-950 text-slate-50 border-none rounded-none">
        <div className="">
          <ul className="flex space-x-5 items-center font-semibold">
            <li>
              <img src={Logo} alt="" className="w-8" />
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setMenuItem(MenuTypes.inicio)}
            >
              Início
            </li>

            <li
              className="cursor-pointer"
              onClick={() => setMenuItem(MenuTypes.projetos)}
            >
              Projetos
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setMenuItem(MenuTypes.contato)}
            >
              Contato
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-5">
            <li>
              <FaLinkedinIn size="1.5rem" />
            </li>
            <li>
              <FaGithub size="1.5rem" />
            </li>
          </ul>
        </div>
      </section>

      <section className="flex sm:hidden justify-between p-5 shadow-sm shadow-red-950 bg-red-950 text-slate-50 border-none rounded-none">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IoMenu size="1.5rem" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel onClick={() => setMenuItem(MenuTypes.inicio)}>
              Inicio
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setMenuItem(MenuTypes.projetos)}>
              Projetos
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setMenuItem(MenuTypes.contato)}>
              Contato
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <img src={Logo} alt="" className="w-7" />
      </section>
    </>
  );
}
