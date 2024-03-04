interface MovimentacaoGeral {
  total: number;
  ultimo_registro: string;
}

export interface Usuario {
  nome_completo: string;
  primeiro_nome: string;
  sobrenome: string;
  patrimonio_total: number;
  conta_investimento: number;
  entradas: MovimentacaoGeral;
  saidas: MovimentacaoGeral;
}
