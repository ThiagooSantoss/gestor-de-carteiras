"use client";

import { CaretDown, CaretRight, Icon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SubMenuProps {
  texto: string;
  url: string;
}

interface SidebarItemProps {
  texto: string;
  Icone: Icon;
  isAtivo?: boolean;
  url: string;
  subMenu?: SubMenuProps[];
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { url, texto, Icone, isAtivo = false, subMenu = [] } = props;

  const { push } = useRouter();

  const [estaEscondidoSubMenu, setEstaEscondidoSubMenu] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const itemClassesExtras = isAtivo
    ? "bg-blue-100 p-2 rounded text-gray-700 hover:text-gray-700"
    : "text-white hover:text-blue-300";

  const Seta = estaEscondidoSubMenu ? CaretRight : CaretDown;

  function handleCliqueNoItem() {
    push(url);
    setEstaEscondidoSubMenu(!estaEscondidoSubMenu);
    setIsLoading(true);
  }

  useEffect(() => {
    if (isAtivo) setIsLoading(false);
  }, [isAtivo]);

  return (
    <li className={"space-y-2"}>
      <div
        className={`${itemClassesExtras} w-fit transition-colors flex gap-2 items-center text-xl ${
          isLoading ? "cursor-wait" : "cursor-pointer"
        }`}
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
              onClick={() => push(`${url}/${subMenuItem.url}`)}
              key={subMenuItem.texto}
              className="text-white cursor-pointer w-fit hover:opacity-80 transition-opacity"
            >
              {subMenuItem.texto}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
