import { useState, useMemo } from "react";

function HookUseMemo() {
  let [numero1, setNumero1] = useState(1);
  let [numero2, setNumero2] = useState(1);
  let [numero3, setNumero3] = useState(1);
  let [numero4, setNumero4] = useState(1);

  let potencia = useMemo(() => {
    const future = Date.now() + 1000;
    while (Date.now() < future) {}
    return numero1 ** numero2;
  }, [numero1, numero2]);

  let soma = numero3 + numero4;

  return (
    <div className="container-useMemo">
      <h2 className="container-useMemo__title">useMemo</h2>
      {/* useMemo -> armazena resultado de chamas a funções específicas */}
      {/* Usar em casos de funções longas ou calculos complicados. */}

      <div className="container-useMemo__calc-potencia">
        <h3>{`${numero1}^${numero2}:${potencia}`}</h3>
        <div className="container-useMemo__buttons">
          <input
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(Number(e.target.value))}
          />
          <input
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="container-useMemo__calc-soma">
        <h3>{numero3 + "+" + numero4 + ":" + soma}</h3>
        <div className="container-useMemo__buttons">
          <input
            type="number"
            value={numero3}
            onChange={(e) => setNumero3(Number(e.target.value))}
          />
          <input
            type="number"
            value={numero4}
            onChange={(e) => setNumero4(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default HookUseMemo;
