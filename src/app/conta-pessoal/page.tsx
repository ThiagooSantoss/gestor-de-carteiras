"use client";
import { CardLodFinanceiro } from "@/components/CardLogFinanceiro";

export default function ContaPessoal() {
  return <CardLodFinanceiro
   entradas="Entradas" 
   valor={200} 
   texto="Última entrada em 10 de outubro" 
   />;
}
