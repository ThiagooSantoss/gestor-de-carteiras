"use client";

import dynamic from "next/dynamic";
import { usuario } from "@/mocks/usuarioAtual";
import { computaMensagemDeBoasVindas } from "@/utils/computaMensagemDeBoasVindas";
import { converterParaReal } from "@/utils/converterParaReal";
import { TabelaAtivosDoUsuario } from "@/components/TabelaAtivosDoUsuario";
import { useAtivosDoUsuario } from "@/hooks/useAtivosDoUsuario";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Carteiras() {
  const { ativosDoUsuario } = useAtivosDoUsuario();

  const patrimonioFormatado = converterParaReal(usuario.patrimonio_total);

  const contaInvestimentoFormatado = converterParaReal(
    usuario.conta_investimento
  );

  const mensagemDeBoasVindas = computaMensagemDeBoasVindas(
    usuario.primeiro_nome
  );

  const series = ativosDoUsuario.map((ativo) => ativo?.total ?? 0);

  const options: ApexCharts.ApexOptions = {
    labels: ativosDoUsuario?.map((ativo) => ativo.codigo),
    tooltip: {
      y: {
        formatter: (val) => converterParaReal(val),
      },
    },
    legend: {
      show: false,
    },
    chart: {},
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

      <main className="mt-6 space-y-10">
        <ApexChart
          type="pie"
          series={series}
          options={options}
          width={"100%"}
          height={400}
        />

        <TabelaAtivosDoUsuario ativosDoUsuario={ativosDoUsuario} />
      </main>
    </div>
  );
}
