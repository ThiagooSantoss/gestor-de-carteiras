import { api } from "@/services/api";
import { AtivoDoUsuario } from "@/types/ativoDoUsuario";

export const useAtivosDoUsuario: Promise<AtivoDoUsuario[]> = async () => {
  const { data } = await api.get("ativos_usuario");

  const ativosDoUsuario = data.map((ativo: AtivoDoUsuario) => {
    return {
      ...ativo,
      total: ativo.precoComprado * ativo.quantidadeComprada,
    };
  });

  return ativosDoUsuario;
};
