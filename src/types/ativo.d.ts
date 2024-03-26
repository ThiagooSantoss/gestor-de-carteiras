import { Transacoes } from "./transacao";

export interface Ativo {
  codigo: string;
  descricao: string;
  preco: number;
}

export interface AtivoDoUsuario extends Ativo {
  transacoes: Transacao[];
}
