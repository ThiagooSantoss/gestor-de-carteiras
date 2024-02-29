import { ArrowCircleUp } from "@phosphor-icons/react";

export function CardLodFinanceiro() {
  return (
    <div className=" text-white w-80 bg-slate-800 border rounded-md">
      <div className="p-4 space-y-1">
        <div className="flex justify-between">
          Entradas <ArrowCircleUp size={30} />
        </div>
        <div className="font-semibold text-xl">R$ 200,00</div>
        <div className="text-slate-400 text-sm">
          Última entrada em 10 de outubro
        </div>
      </div>
    </div>
  );
}
