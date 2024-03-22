import { format, parseISO } from "date-fns";

export const computaDiaEMes = (data: string) => {
  try {
    const dataFormatada = format(parseISO(data ?? 0), "dd 'de' MMMM");
    return dataFormatada;
  } catch (error) {
    return "-";
  }
};
