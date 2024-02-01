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
    // <ul className="border border-slate-400 rounded">
    //   {listaDeAtivos.map((item) => (
    //     <li key={item.codigo} className="p-3">
    //       <span className="w-48 inline-block">{item.codigo}</span>
    //       <span className="w-48 inline-block">{item.descricao}</span>
    //       <span>{item.preco}</span>
    //     </li>
    //   ))}
    // </ul>
    <table className="border border-slate-400 rounded">
      <thead>
        <tr>
          <th>Código</th>
          <th>Descrição</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {listaDeAtivos.map((item) => (
          <tr key={item.codigo}>
            <td className="w-48 inline-block p-2">{item.codigo}</td>
            <td className="w-48 inline-block">{item.descricao}</td>
            <td>{item.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
