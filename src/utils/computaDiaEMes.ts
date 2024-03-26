import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const computaDiaEMes = (data: string) => {
  try {
    const dataFormatada = format(parseISO(data ?? 0), "dd 'de' MMMM", {
      locale: ptBR,
    });
    return dataFormatada;
  } catch (error) {
    return "-";
  }
};
