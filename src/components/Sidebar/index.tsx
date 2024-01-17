import { Wallet, PiggyBank, LineChart } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <aside className="bg-slate-900 h-screen w-72 p-6">
      <header className="text-white flex gap-2 justify-center items-center pb-6 mb-6 -mx-6 border-b text-xl">
        <Wallet />
        <p>Gestor de Carteiras</p>
      </header>
      <ul className="space-y-6">
        <SidebarItem texto = "Ativos" Icone = {LineChart} />
        <SidebarItem texto = "Proventos" Icone = {PiggyBank} />
        <SidebarItem texto = "Carteiras" Icone = {Wallet} />
      </ul>
    </aside>
  );
};
