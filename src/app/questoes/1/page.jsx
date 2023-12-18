"use client";

export default function Questao1() {
  const handleClickBotao = () => {
    window.alert("Botão Clicado !");
  };

  return (
    <>
      <h1>Questão 1</h1>
      <p>
        Crie um botão vermelho com as bordas arredondadas que exiba "Clique-me!"
        como texto. Ao clicar no botão, um alerta deve ser disparado avisando
        que o botão foi clicado.
      </p>

      <button
        onClick={handleClickBotao}
        style={{
          backgroundColor: "#de190b",
          width: "100px",
          height: "50px",
          borderRadius: "20px",
          border: "none",
          marginTop: "3vh",
          cursor: "pointer",
          fontSize: "1.1rem",
        }}
      >
        Clique-Me!
      </button>
    </>
  );
}
