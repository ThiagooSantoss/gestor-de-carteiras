import { getHours } from "date-fns";

export const computaMensagemDeBoasVindas = (primeiroNome: string) => {
  const horaAtual = getHours(new Date());

  const isManha = horaAtual > 0 && horaAtual < 12;
  const isTarde = horaAtual >= 12 && horaAtual < 19;

  let saudacaoComDia = "Boa noite";

  if (isManha) {
    saudacaoComDia = "Bom dia";
  } else if (isTarde) {
    saudacaoComDia = "Boa tarde";
  }

  return `${saudacaoComDia}, ${primeiroNome}.`;
};
