"use client";

import { usePathname, useRouter } from "next/navigation";
import { SidebarItem } from "./SidebarItem";
import {
  ChartLineUp,
  CurrencyCircleDollar,
  PiggyBank,
  Wallet,
} from "@phosphor-icons/react";

export const Sidebar = () => {
  const pathname = usePathname();
  const { push } = useRouter();

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
        <SidebarItem
          isAtivo={pathname == "/ativos"}
          url="/ativos"
          texto="Ativos"
          Icone={ChartLineUp}
        />
        <SidebarItem
          isAtivo={pathname == "/proventos"}
          url="/proventos"
          texto="Proventos"
          Icone={PiggyBank}
        />
        <SidebarItem
          isAtivo={pathname == "/carteiras"}
          url="/carteiras"
          texto="Carteiras"
          Icone={Wallet}
        />
      </ul>
    </aside>
  );
};
