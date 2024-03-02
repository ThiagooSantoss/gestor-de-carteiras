"use client";

import { CardLogFinanceiro } from "@/components/CardLogFinanceiro";
import { useUsuario } from "@/hooks/useUsuario";

export default function ContaPessoal() {
  const { data } = useUsuario();

  const { entrada, saida } = data;

  return (
    <div className="flex items-center gap-4">
      <CardLogFinanceiro
        isEntrada
        valor={entrada?.valor}
        ultimoRegistro={entrada?.ultimo_registro}
      />

      <CardLogFinanceiro
        isEntrada={false}
        valor={saida?.valor}
        ultimoRegistro={saida?.ultimo_registro}
      />
    </div>
  );
}
