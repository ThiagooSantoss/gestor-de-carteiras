"use client";

import { computaMensagemDeBoasVindas } from "@/utils/computaMensagemDeBoasVindas";
import { converterParaReal } from "@/utils/converterParaReal";
import { TabelaAtivosDoUsuario } from "@/components/TabelaAtivosDoUsuario";
import { useAtivosDoUsuario } from "@/hooks/useAtivosDoUsuario";
import { Suspense, lazy } from "react";
import { Shimmer } from "@/components/Shimmer";
import { useUsuario } from "@/hooks/useUsuario";

const ApexChart = lazy(() => import("react-apexcharts"));

const ShimmerGrafico = () => (
  <Shimmer isRedondo className="mx-auto" height={379} width={370} />
);

const ShimmerLoading = () => (
  <main className="mt-6 space-y-10">
    <ShimmerGrafico />

    <div className="space-y-1">
      <Shimmer className="mb-2" height={56} width={"100%"} />

      <Shimmer height={40} width={"100%"} />
      <Shimmer height={40} width={"100%"} />
      <Shimmer height={40} width={"100%"} />
      <Shimmer height={40} width={"100%"} />
      <Shimmer height={40} width={"100%"} />
      <Shimmer height={40} width={"100%"} />
    </div>
  </main>
);

export default function Carteiras() {
  const { data: ativosDoUsuario, isFetching: carregando } =
    useAtivosDoUsuario();

  const { data: usuario } = useUsuario();

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

      {carregando ? (
        <ShimmerLoading />
      ) : (
        <main className="mt-6 space-y-10">
          <Suspense fallback={<ShimmerGrafico />}>
            <ApexChart
              type="pie"
              series={series}
              options={options}
              width={"100%"}
              height={400}
            />
          </Suspense>

          <TabelaAtivosDoUsuario ativosDoUsuario={ativosDoUsuario} />
        </main>
      )}
    </div>
  );
}
