"use client";

import { useEffect, useState } from "react";

export default function Test() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`O contador é: ${contador}`);
  }, [contador]);

  return (
    <div>
      <span className="text-3xl">Contador: {contador}</span>

      <div className="space-x-2 mt-6">
        <button
          onClick={() => setContador(contador + 1)}
          className="bg-slate-700 p-2 rounded-md text-white"
        >
          Aumentar 1
        </button>

        <button
          onClick={() => setContador(contador - 1)}
          className="bg-slate-700 p-2 rounded-md text-white"
        >
          Diminuir 1
        </button>
      </div>
    </div>
  );
}
