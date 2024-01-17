import { Wallet } from "lucide-react";

export const SidebarItem = () => {
  return (
    <li className="text-white flex gap-2 items-center">
      <Wallet />
      <p>Ativos</p>
    </li>
  );
};
