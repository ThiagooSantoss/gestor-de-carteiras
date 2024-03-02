import { computaDiaEMes } from "@/utils/computaDiaEMes";
import { converterParaReal } from "@/utils/converterParaReal";
import { ArrowCircleDown, ArrowCircleUp } from "@phosphor-icons/react";

interface CardLogFinanceiroProps {
  isEntrada: boolean;
  valor: number;
  ultimoRegistro: string;
}

export const CardLogFinanceiro = (props: CardLogFinanceiroProps) => {
  const { isEntrada, valor, ultimoRegistro } = props;

  const fraseUltimoRegistro = `Última ${
    isEntrada ? "entrada" : "saída"
  } em ${computaDiaEMes(ultimoRegistro)}`;

  return (
    <div className="p-5 text-white w-80 bg-slate-800 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <span>{isEntrada ? "Entradas" : "Saídas"}</span>

        {isEntrada ? (
          <ArrowCircleUp className="text-green-500" size={30} />
        ) : (
          <ArrowCircleDown className="text-red-500" size={30} />
        )}
      </div>

      <p className="font-semibold text-xl">{converterParaReal(valor)}</p>

      <p className="mt-1 text-slate-400 text-sm">{fraseUltimoRegistro}</p>
    </div>
  );
};
