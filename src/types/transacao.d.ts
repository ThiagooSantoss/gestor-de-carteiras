export interface Transacao {
  data: string;
  preco: number;
  qtde: number;
  tipo: "C" | "V";
}
