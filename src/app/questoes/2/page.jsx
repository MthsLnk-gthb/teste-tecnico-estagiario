"use client";
import React, { useState, useEffect } from "react";

export default function Questao2() {
  const [counter, setCounter] = useState(0);

  const incrementarValor = () => {
    setCounter((counter) => counter + 1);
  };
  const decrementarValor = () => {
    setCounter((counter) => counter - 1);
  };

  useEffect(() => {
    setCounter(10);
  }, []);

  return (
    <>
      <h1>Questão 2</h1>
      <p>
        Crie um contador inicializado em 0. A tela deve exibir dois botões: um
        para incrementar o contador e outro para decrementar o contador. Ao
        carregar a tela, o contador deve ser atualizado para 10. Implemente a
        lógica para atualizar o contador quando a tela for carregada e a lógica
        para atualizar o contador quando os botões forem clicados.
      </p>

      <section style={{ marginTop: '5vh' }}>
        <button onClick={decrementarValor}>Decrementar</button>
        <button onClick={incrementarValor} style={{ marginLeft: '2vw' }}>
          Incrementar
        </button>
        <h3 style={{ marginTop: '5vh' }}>Valor atual do contador: {counter}</h3>
      </section>
    </>
  );
}
