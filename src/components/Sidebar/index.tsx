import { Wallet } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <aside className="bg-slate-900 h-screen w-72 p-6">
      <header className="text-white flex gap-2 justify-center items-center pb-6 mb-6 -mx-6 border-b">
        <Wallet />
        <p>Gestor de Carteiras</p>
      </header>
      <ul>
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
        <SidebarItem />
      </ul>
    </aside>
  );
};
