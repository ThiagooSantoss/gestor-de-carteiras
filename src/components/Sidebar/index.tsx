"use client";

import { usePathname, useRouter } from "next/navigation";
import { SidebarItem } from "./SidebarItem";
import {
  Calendar,
  ChartLineUp,
  CurrencyCircleDollar,
  MagnifyingGlass,
  PiggyBank,
  Wallet,
} from "@phosphor-icons/react";

export const Sidebar = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const sidebarItemArr = [
    {
      isAtivo: pathname == "/ativos",
      url: "/ativos",
      texto: "Ativos",
      Icone: ChartLineUp,
    },
    {
      isAtivo: pathname == "/proventos",
      url: "/proventos",
      texto: "Proventos",
      Icone: PiggyBank,
    },
    {
      isAtivo: pathname == "/carteiras",
      url: "/carteiras",
      texto: "Carteiras",
      Icone: Wallet,
    },
    {
      isAtivo: pathname == "/calendario",
      url: "/calendario",
      texto: "Calendário",
      Icone: Calendar,
    },
    {
      isAtivo: pathname == "/buscas",
      url: "/buscas",
      texto: "Buscas Salvas",
      Icone: MagnifyingGlass,
    },
  ];

  return (
    <aside className="bg-slate-900 h-screen w-72 p-6">
      <header
        onClick={() => push("/")}
        className="text-white flex gap-2 justify-center items-center pb-6 mb-6 -mx-6 border-b text-xl cursor-pointer"
      >
        <CurrencyCircleDollar size={32} />
        <p>Gestor de Carteiras</p>
      </header>

      <ul className="space-y-6">
        {sidebarItemArr.map((item) => (
          <SidebarItem key={item.texto} {...item} />
        ))}
      </ul>
    </aside>
  );
};
