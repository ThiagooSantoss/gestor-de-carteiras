import { api } from "@/services/api";
import { AtivoDoUsuario } from "@/types/ativoDoUsuario";
import { useEffect, useState } from "react";

export const useAtivosDoUsuario = () => {
  const [ativosDoUsuario, setAtivosDoUsuario] = useState<AtivoDoUsuario[]>([]);

  useEffect(() => {
    const getAtivosDoUsuario = async () => {
      const { data } = await api.get("ativos_usuario");

      const ativosDoUsuarioModificado: AtivoDoUsuario[] = data.map(
        (ativo: AtivoDoUsuario) => {
          return {
            ...ativo,
            total: ativo.precoComprado * ativo.quantidadeComprada,
          };
        }
      );

      setAtivosDoUsuario(ativosDoUsuarioModificado);
    };

    getAtivosDoUsuario();
  }, []);

  return { ativosDoUsuario };
};
