"use client";

import { CardLogFinanceiro } from "@/components/CardLogFinanceiro";
import { CardShimmer } from "@/components/CardLogFinanceiro/Card.shimmer";
import { useUsuario } from "@/hooks/useUsuario";
import { computaMensagemDeBoasVindas } from "@/utils/computaMensagemDeBoasVindas";

export default function ContaPessoal() {
  const { data: usuario, isFetching: carregando } = useUsuario();

  const { entradas, saidas } = usuario;

  const mensagemDeBoasVindas = computaMensagemDeBoasVindas(
    usuario.primeiro_nome
  );

  return (
    <div>
      <header className="space-y-4 mb-5">
        <h1 className="text-4xl font-medium">{mensagemDeBoasVindas}</h1>
        <h6 className="text-xl">Esta é sua conta pessoal:</h6>
      </header>

      <main className="flex items-center gap-4">
        {carregando ? (
          <>
            <CardShimmer />
            <CardShimmer />
          </>
        ) : (
          <>
            <CardLogFinanceiro
              isEntrada
              valor={entradas?.total}
              ultimoRegistro={entradas?.ultimo_registro}
            />

            <CardLogFinanceiro
              isEntrada={false}
              valor={saidas?.total}
              ultimoRegistro={saidas?.ultimo_registro}
            />
          </>
        )}
      </main>
    </div>
  );
}
