import { Icon } from "@phosphor-icons/react";

interface SidebarItemProps {
  texto: string;
  Icone: Icon;
  isAtivo?: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { texto, Icone, isAtivo = false } = props;

  const itemClassesExtras = isAtivo
    ? "bg-blue-100 p-2 rounded text-gray-700 hover:text-gray-700"
    : "text-white hover:text-blue-300 cursor-pointer";

  return (
    <li
      className={`${itemClassesExtras} w-fit transition-colors flex gap-2 items-center text-xl`}
    >
      <Icone size={32} />
      <p>{texto}</p>
    </li>
  );
};
