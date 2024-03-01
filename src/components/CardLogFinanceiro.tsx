import { ArrowCircleUp } from "@phosphor-icons/react";

interface CardLodFinanceiroProps {
  entradas: string;
  valor: number;
  texto: string;
}

export const CardLodFinanceiro = (props: CardLodFinanceiroProps) => {
  const { entradas, valor, texto } = props;

  return (
    <div className=" text-white w-80 bg-slate-800 border rounded-md">
      <div className="p-4 space-y-1">
        <div className="flex justify-between">
          {entradas}
          <ArrowCircleUp size={30} />
        </div>
        <div className="font-semibold text-xl">R$ {valor}</div>
        <div className="text-slate-400 text-sm">
          {texto}
        </div>
      </div>
    </div>
  );
};
