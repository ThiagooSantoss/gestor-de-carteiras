import { api } from "@/services/api";
import { Ativo } from "@/types/ativo";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const LISTA_DE_ATIVOS_KEY = "listaDeAtivos";

export async function getListaDeAtivos(): Promise<Ativo[]> {
  const { data }: AxiosResponse<Ativo[]> = await api.get("ativos");

  return data;
}

export function useListaDeAtivos() {
  return useQuery({
    queryKey: [LISTA_DE_ATIVOS_KEY],
    queryFn: getListaDeAtivos,
    initialData: [],
  });
}
