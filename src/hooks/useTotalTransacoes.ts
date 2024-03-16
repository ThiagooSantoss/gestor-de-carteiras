import { api } from "@/services/api";
import { TotalTransacoes } from "@/types/totalTransacoes";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const TOTAL_TRANSACOES_KEY = "totalTransacoes";

export async function getTotalTransacoes(): Promise<TotalTransacoes> {
  const { data: totalTransacoes }: AxiosResponse<TotalTransacoes> =
    await api.get("transacao_totais/2");

  return totalTransacoes;
}

export function useTotalTransacoes() {
  return useQuery({
    queryKey: [TOTAL_TRANSACOES_KEY],
    queryFn: getTotalTransacoes,
    initialData: {} as TotalTransacoes,
  });
}
