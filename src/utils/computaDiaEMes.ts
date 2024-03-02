import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const computaDiaEMes = (data: string | number | Date) =>
  format(data ?? new Date(), "dd 'de' MMMM", {
    locale: ptBR,
  });
