"use client";

import { usePathname, useRouter } from "next/navigation";
import { SidebarItem } from "./SidebarItem";
import {
  Calendar,
  ChartLineUp,
  Coins,
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
      isAtivo: pathname.includes("/conta-pessoal"),
      url: "/conta-pessoal",
      texto: "Conta Pessoal",
      Icone: Coins,
    },
    {
      isAtivo: pathname.includes("/ativos"),
      url: "/ativos",
      texto: "Ativos",
      Icone: ChartLineUp,
    },
    {
      isAtivo: pathname.includes("/proventos"),
      url: "/proventos",
      texto: "Proventos",
      Icone: PiggyBank,
    },
    {
      isAtivo: pathname.includes("/carteiras"),
      url: "/carteiras",
      texto: "Carteiras",
      Icone: Wallet,
      subMenu: [
        {
          texto: "Configuração",
          url: "/configuracao",
        },
        {
          texto: "Rentabilidade",
          url: "/rentabilidade",
        },
        {
          texto: "Transações",
          url: "/transacoes",
        },
      ],
    },
    {
      isAtivo: pathname.includes("/calendario"),
      url: "/calendario",
      texto: "Calendário",
      Icone: Calendar,
      subMenu: [
        {
          texto: "Configuração",
          url: "/configuracao",
        },
      ],
    },
    {
      isAtivo: pathname.includes("/buscas"),
      url: "/buscas",
      texto: "Buscas Salvas",
      Icone: MagnifyingGlass,
    },
  ];

  return (
    <aside className="bg-slate-900 h-screen min-w-72 p-6">
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
