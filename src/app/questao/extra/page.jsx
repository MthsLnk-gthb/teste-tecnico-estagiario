"use client";

import "./style.css";

import { useEffect, useState } from "react";

export default function QuestaoExtra() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (task === "") {
      alert("Adicione uma tarefa");
      return;
    }

    if (taskList.includes(task)) {
      setTask("");
      alert("Esta tarefa já está na lista");
      return;
    }

    const newTaskList = [...taskList, task];
    setTaskList(newTaskList);
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
    setTask("");
  };

  const removeTask = (index) => {
    let newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
  };

  const clearList = () => {
    setTaskList([]);
    localStorage.removeItem("tasks");
  };


  //Aqui ao carregar a página é verificado se existe a chave tasks no localStorage, caso não exista, o valor será um array vazio
  //Enfrentei um erro, por isso o bloco try catch
  useEffect(() => {
    try {
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTaskList(savedTasks);
    } catch (error) {
      console.error("Erro ao analisar JSON:", error);
      setTaskList([]);
    }
  }, []);

  return (
    <>
      <h1>Questão Extra</h1>
      <p>
        Crie um to-do app que adiciona e remove itens de uma lista. O app deve
        ter um pequeno formulário e um botão azul para adicionar itens. Cada
        item deve ter um botão para removê-lo. Deve existir também um botão
        verde para zerar a lista. Todos os botões precisam ser redondos e
        ficarem quadrados quando o mouse estiver sobre eles. A lista deve ser
        salva no localStorage.
      </p>
      <article>
        <form
          onSubmit={(e) => {
            e.preventDefault(), handleSubmit();
          }}
          className="form"
        >
          <label>Digite uma tarefa:</label>

          <div className="div-input">
            <input
              type="text"
              value={task}
              onChange={addTask}
              placeholder="Insira uma tarefa"
            />
            <button type="submit" className="send-btn">
              Enviar
            </button>
          </div>
        </form>

        {taskList.map((task, index) => {
          return (
            <section className="task" key={index}>
              <h3>{task}</h3>
              <button className="remove-task" onClick={() => removeTask(index)}>
                Remover
              </button>
            </section>
          );
        })}

        <button className="clear-btn" onClick={clearList}>
          Limpar
        </button>
      </article>
    </>
  );
}
