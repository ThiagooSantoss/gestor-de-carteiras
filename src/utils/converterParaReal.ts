export const converterParaReal = (valor: number) => {
  const valorFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(valor ?? 0);

  return valorFormatado;
};
