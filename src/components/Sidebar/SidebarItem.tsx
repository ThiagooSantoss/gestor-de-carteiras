"use client";

import { CaretDown, CaretRight, Icon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  const [estaEscondidoSubMenu, setEstaEscondidoSubMenu] = useState(true);

  const itemClassesExtras = isAtivo
    ? "bg-blue-100 p-2 rounded text-gray-700 hover:text-gray-700"
    : "text-white hover:text-blue-300";

  const Seta = estaEscondidoSubMenu ? CaretRight : CaretDown;

  function handleCliqueNoItem() {
    push(url);
    setEstaEscondidoSubMenu(!estaEscondidoSubMenu);
  }

  return (
    <li className={"space-y-2"}>
      <div
        className={`${itemClassesExtras} w-fit transition-colors flex gap-2 items-center text-xl cursor-pointer`}
        onClick={() => handleCliqueNoItem()}
      >
        {subMenu.length > 0 && <Seta size={16} />}

        <Icone size={32} />
        <p>{texto}</p>
      </div>

      {subMenu.length > 0 && !estaEscondidoSubMenu && (
        <ul className="ml-6">
          {subMenu.map((subMenuItem) => (
            <li
              onClick={() => push("subItemURL")}
              key={subMenuItem}
              className="text-white cursor-pointer w-fit"
            >
              {subMenuItem}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
