import { LucideIcon, Wallet } from "lucide-react";

interface SidebarItemProps{
  texto: string;
  Icone: LucideIcon;
}


export const SidebarItem = (props: SidebarItemProps) => {
  const {texto, Icone} = props;

  return (
    <li className="text-white flex gap-2 items-center text-lg">
      <Icone />
      <p>{texto}</p>
    </li>
  );
};
