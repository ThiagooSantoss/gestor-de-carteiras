import { Transacoes } from "./transacao";

export interface Ativo {
  codigo: string;
  descricao: string;
  id: number;
  preco: number;
}

export interface AtivoDoUsuario extends Ativo {
  preco_medio: number;
  qtde: number;
  total: number;
}
