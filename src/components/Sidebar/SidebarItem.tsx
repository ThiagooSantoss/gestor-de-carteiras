"use client";

import { CaretDown, Icon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

interface SidebarItemProps {
  texto: string;
  Icone: Icon;
  isAtivo?: boolean;
  url: string;
  subMenu?: string[];
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { url, texto, Icone, isAtivo = false, subMenu = [] } = props;

  const { push } = useRouter();

  const itemClassesExtras = isAtivo
    ? "bg-blue-100 p-2 rounded text-gray-700 hover:text-gray-700"
    : "text-white hover:text-blue-300";

  return (
    <li className={"space-y-2"} onClick={() => push(url)}>
      <div
        className={`${itemClassesExtras} w-fit transition-colors flex gap-2 items-center text-xl cursor-pointer`}
      >
        {subMenu.length > 0 && <CaretDown size={16} />}
        <Icone size={32} />
        <p>{texto}</p>
      </div>
      <ul>
        {subMenu.map((item) => (
          <li className="text-white" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
};
