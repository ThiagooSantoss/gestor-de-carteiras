import { TabelaAtivos } from "@/components/TabelaAtivos";
import { usuario } from "@/mocks/usuarioAtual";
import { computaMensagemDeBoasVindas } from "@/utils/computaMensagemDeBoasVindas";

export default function Ativos() {
  const mensagemDeBoasVindas = computaMensagemDeBoasVindas(
    usuario.primeiro_nome
  );

  return (
    <div className="container">
      <header className="space-y-4 mb-5">
        <h1 className="text-4xl font-medium">{mensagemDeBoasVindas}</h1>
        <h6 className="text-xl">Estes são os ativos disponíveis no momento:</h6>
      </header>
      <TabelaAtivos />
    </div>
  );
}
