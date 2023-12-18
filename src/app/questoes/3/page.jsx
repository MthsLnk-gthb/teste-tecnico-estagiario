const numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calcularSomaPares(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      soma += array[i];
    }
  }
  return soma;
}

export default function Questao3() {
  let soma = calcularSomaPares(numerosInteiros);

  return (
    <>
      <h1>Questão 3</h1>
      <p>
        Escreva uma função JavaScript que recebe uma matriz de números inteiros
        e retorna a soma de todos os números pares. Exiba a soma na tela.
      </p>
      <p style={{ fontSize: "1.4rem", marginTop: "5vh" }}>Soma: {soma}</p>
    </>
  );
}
