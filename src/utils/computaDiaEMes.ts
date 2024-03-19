import { format, formatISO, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const computaDiaEMes = (data: string) =>

  format(parseISO( data ?? 0), "dd 'de' MMMM");
