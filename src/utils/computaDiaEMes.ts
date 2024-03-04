import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const computaDiaEMes = (data: string | number | Date) =>
  format(data ?? 0, "dd 'de' MMMM", {
    locale: ptBR,
  });
