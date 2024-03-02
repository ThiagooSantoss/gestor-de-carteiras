import { api } from "@/services/api";
import { Usuario } from "@/types/usuario";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const USUARIO_KEY = "usuario";

export async function getUsuario(): Promise<Usuario> {
  const { data: usuario }: AxiosResponse<Usuario> = await api.get("usuario");

  return {
    ...usuario,
    nome_completo: `${usuario.primeiro_nome} ${usuario.sobrenome}`,
  };
}

export function useUsuario() {
  return useQuery({
    queryKey: [USUARIO_KEY],
    queryFn: getUsuario,
    initialData: {} as Usuario,
  });
}
