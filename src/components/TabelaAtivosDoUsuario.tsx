import { AtivoDoUsuario } from "@/types/ativo";
import { converterParaReal } from "@/utils/converterParaReal";

interface TabelaAtivosDoUsuarioProps {
  ativosDoUsuario: AtivoDoUsuario[];
}

export const TabelaAtivosDoUsuario = (props: TabelaAtivosDoUsuarioProps) => {
  const { ativosDoUsuario } = props;

  return (
    <div className="rounded-lg w-full border border-slate-400 overflow-y-hidden">
      <table className="w-full rounded-lg">
        <thead>
          <tr className="text-xl h-14 bg-indigo-200 font-medium">
            <th>
              <div className="text-center pl-6">Código</div>
            </th>

            <th>
              <div className="text-center">Descrição</div>
            </th>

            <th>
              <div className="text-center">Preço Médio</div>
            </th>

            <th>
              <div className="text-center">Preço Atual</div>
            </th>

            <th>
              <div className="text-center">Qtd. Comprada</div>
            </th>

            <th>
              <div className="text-center pr-6">Total Comprado</div>
            </th>
          </tr>
        </thead>

        <tbody>
          {ativosDoUsuario.map((item) => (
            <tr
              className="even:bg-slate-200 odd:bg-white h-10"
              key={item.codigo}
            >
              <td className="w-[10%] pl-6 text-center">{item.codigo}</td>

              <td className="w-[30%] text-center">{item.descricao}</td>

              <td className="w-[20%] text-center">
                {converterParaReal(item.preco_medio)}
              </td>

              <td className="w-[20%] text-center">
                {converterParaReal(item.preco)}
              </td>

              <td className="w-[20%] text-center">{item.qtde}</td>

              <td className="w-[20%] text-center pr-6">
                {converterParaReal(item.total ?? 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
