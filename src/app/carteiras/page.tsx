"use client";

import dynamic from "next/dynamic";
import { usuario } from "@/mocks/usuarioAtual";
import { computaMensagemDeBoasVindas } from "@/utils/computaMensagemDeBoasVindas";
import { converterParaReal } from "@/utils/converterParaReal";
import ApexCharts from "apexcharts";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Carteiras() {
  const patrimonioFormatado = converterParaReal(usuario.patrimonio_total);

  const contaInvestimentoFormatado = converterParaReal(
    usuario.conta_investimento
  );

  const mensagemDeBoasVindas = computaMensagemDeBoasVindas(
    usuario.primeiro_nome
  );

  const series = [44, 55, 13, 43, 22];

  const options: ApexCharts.ApexOptions = {
    chart: {
      width: 380,
    },
    labels: ["MGLU4", "TAURS4", "BSBBA3", "HGLG11", "IBAS3"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div>
      <header className="space-y-4">
        <h1 className="text-4xl font-medium">{mensagemDeBoasVindas}</h1>

        <h6 className="text-xl">
          Seu patrimônio total é de{" "}
          <b className="text-green-700">{patrimonioFormatado}</b> e você tem
          disponível <b>{contaInvestimentoFormatado}</b> em sua conta
          investimento
        </h6>
      </header>

      <main className="mt-6">
        <ApexChart
          type="pie"
          series={series}
          options={options}
          height={200}
          width={500}
        />
      </main>
    </div>
  );
}
