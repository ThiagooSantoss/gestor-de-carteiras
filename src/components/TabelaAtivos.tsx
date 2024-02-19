import { listaDeAtivos } from "@/mocks/listaDeAtivos";
import { converterParaReal } from "@/utils/converterParaReal";

export const TabelaAtivos = () => {
  return (
    <div className="rounded-lg border border-slate-400 overflow-y-hidden">
      <table className="w-full rounded-lg">
        <thead>
          <tr className="text-xl bg-indigo-200 font-medium">
            <th>
              <div className="text-left p-2">Código</div>
            </th>

            <th>
              <div className="text-left">Descrição</div>
            </th>

            <th>
              <div className="text-left">Preço</div>
            </th>
          </tr>
        </thead>

        <tbody>
          {listaDeAtivos.map((item) => (
            <tr className="even:bg-slate-200" key={item.codigo}>
              <td className="w-[33%] p-2">{item.codigo}</td>
              <td className="w-[33%]">{item.descricao}</td>
              <td className="w-[33%]">{converterParaReal(item.preco)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
