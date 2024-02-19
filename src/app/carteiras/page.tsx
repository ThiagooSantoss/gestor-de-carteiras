import { TabelaAtivos } from "@/components/TabelaAtivos";
import { usuario } from "@/mocks/usuarioAtual";
import { computaMensagemDeBoasVindas } from "@/utils/computaMensagemDeBoasVindas";
import { converterParaReal } from "@/utils/converterParaReal";

export default function Carteiras() {
  const patrimonioFormatado = converterParaReal(usuario.patrimonio_total);

  const contaInvestimentoFormatado = converterParaReal(
    usuario.conta_investimento
  );

  const mensagemDeBoasVindas = computaMensagemDeBoasVindas(
    usuario.primeiro_nome
  );

  return (
    <div>
      <header className="space-y-4">
        <h1 className="text-4xl font-medium">{mensagemDeBoasVindas}</h1>

        <h6 className="text-xl">
          Seu patrimônio total é de{" "}
          <b className="text-green-700">{patrimonioFormatado}</b> e você tem
          disponível <b>{contaInvestimentoFormatado}</b> em sua conta
          investimento
        </h6>
      </header>

      <main className="mt-6">
        <TabelaAtivos />
      </main>
    </div>
  );
}
