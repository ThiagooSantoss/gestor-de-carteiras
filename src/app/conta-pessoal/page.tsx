"use client";

import { CardLogFinanceiro } from "@/components/CardLogFinanceiro";
import { CardShimmer } from "@/components/CardLogFinanceiro/Card.shimmer";
import { useUsuario } from "@/hooks/useUsuario";

export default function ContaPessoal() {
  const { data, isFetching: carregando } = useUsuario();

  const { entradas, saidas } = data;

  return (
    <div className="flex items-center gap-4">
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
    </div>
  );
}
