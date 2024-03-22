import { api } from "@/services/api";
import { AtivoDoUsuario } from "@/types/ativoDoUsuario";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const ATIVOS_DO_USUARIO_KEY = "ativosDoUsuario";

export async function getAtivosDoUsuario(): Promise<AtivoDoUsuario[]> {
  const { data }: AxiosResponse<AtivoDoUsuario[]> = await api.get("carteira");

  const ativosDoUsuarioModificado = data.map((ativo: AtivoDoUsuario) => {
    return {
      ...ativo,
      total: ativo.precoComprado * ativo.quantidadeComprada,
    };
  });

  return ativosDoUsuarioModificado;
}

export function useAtivosDoUsuario() {
  return useQuery({
    queryKey: [ATIVOS_DO_USUARIO_KEY],
    queryFn: getAtivosDoUsuario,
    initialData: [],
  });
}
