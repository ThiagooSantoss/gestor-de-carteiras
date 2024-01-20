"use client";

import { Icon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  texto: string;
  Icone: Icon;
  isAtivo?: boolean;
  url: string;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { url, texto, Icone, isAtivo = false } = props;

  const { push } = useRouter();

  const itemClassesExtras = isAtivo
    ? "bg-blue-100 p-2 rounded text-gray-700 hover:text-gray-700"
    : "text-white hover:text-blue-300";

  return (
    <li
      className={`${itemClassesExtras} w-fit transition-colors flex gap-2 items-center text-xl cursor-pointer`}
      onClick={() => push(url)}
    >
      <Icone size={32} />
      <p>{texto}</p>
    </li>
  );
};
