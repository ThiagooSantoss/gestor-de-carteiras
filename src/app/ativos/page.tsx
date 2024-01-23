export default function Ativos() {
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
    <div className="container bg-slate-700">
      <h1 className="text-center text-3xl text-blue-100">Ativos</h1>

      <ul className="border border-blue-100">
        {listaDeAtivos.map((item) => (
          <li key={item.codigo} className="p-3 text-gray-100">
            <span className="w-48 inline-block">{item.codigo}</span>
            <span className="w-48 inline-block">{item.descricao}</span>
            <span>{item.preco}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
