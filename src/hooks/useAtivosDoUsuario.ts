import { ativosDoUsuario as ativosDoUsuarioMock } from "@/mocks/ativosDoUsuario";

export const useAtivosDoUsuario = () => {
  const ativosDoUsuario = ativosDoUsuarioMock.map((ativo) => {
    return {
      ...ativo,
      total: ativo.precoComprado * ativo.quantidadeComprada,
    };
  });

  return { ativosDoUsuario };
};
