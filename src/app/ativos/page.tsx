import { TabelaAtivos } from "@/components/TabelaAtivos";

export default function Ativos() {
  return (
    <div className="container">
      <header className="mb-5">
        <h1 className="text-4xl font-medium">Olá, Matheus.</h1>
        <h6 className="text-xl">Estes são os ativos disponíveis no momento:</h6>
      </header>
      <TabelaAtivos />
    </div>
  );
}
