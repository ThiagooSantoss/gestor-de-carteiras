"use client";

import { format, parseISO } from "date-fns";
import { toast } from "react-toastify";

export const computaDiaEMes = (data: string) => {
  try {
    const dataFormatada = format(parseISO(data ?? 0), "dd 'de' MMMM");
    return dataFormatada;
  } catch (error) {
    toast.error("Data inválida");
    return "-";
  }
};
