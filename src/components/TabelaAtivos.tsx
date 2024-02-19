import { table } from "console";

export const TabelaAtivos = () => {
  const listaDeAtivos = [
    {
      codigo: "MGLU3",
      descricao: "Magalu",
      preco: 1.95,
    },
    {
      codigo: "BBAS3",
      descricao: "Banco do Brasil",
      preco: 55.55,
    },
    {
      codigo: "CPFE3",
      descricao: "CPFL Energia",
      preco: 36.03,
    },
    {
      codigo: "ITSA4",
      descricao: "Itausa S.A",
      preco: 9.91,
    },
    {
      codigo: "PBR",
      descricao: "Petróleo brasileiro",
      preco: 15.65,
    },
  ];

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
              <td className="w-[33%]">{item.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
