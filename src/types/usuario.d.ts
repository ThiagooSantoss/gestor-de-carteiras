interface MovimentacaoGeral {
  valor: number;
  ultimo_registro: string;
}

export interface Usuario {
  nome_completo: string;
  primeiro_nome: string;
  sobrenome: string;
  patrimonio_total: number;
  conta_investimento: number;
  entrada: MovimentacaoGeral;
  saida: MovimentacaoGeral;
}
