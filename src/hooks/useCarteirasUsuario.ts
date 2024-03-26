import { api } from "@/services/api";
import { CarteiraUsuario } from "@/types/carteiraUsuario";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const ATIVOS_DO_USUARIO_KEY = "carteirasUsuario";

export async function getCarteirasUsuario(): Promise<CarteiraUsuario> {
  const { data }: AxiosResponse<CarteiraUsuario[]> = await api.get(
    "carteira?user_id=2"
  );

  const carteirasUsuarioModificado = data[0].ativos.map((ativo) => {
    return {
      ...ativo,
      total: ativo.preco * ativo.,
    };
  });

  return data[0]; //carteirasUsuarioModificado;
}

export function useCarteirasUsuario() {
  return useQuery({
    queryKey: [ATIVOS_DO_USUARIO_KEY],
    queryFn: getCarteirasUsuario,
    initialData: {} as CarteiraUsuario,
  });
}
