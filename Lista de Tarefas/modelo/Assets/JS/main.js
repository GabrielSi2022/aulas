const inputTarefa = document.getElementById("input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const listTarefa = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpainput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "Apagar";
  botaoApagar.setAttribute("class", "apagar");
  botaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  listTarefa.appendChild(li);
  limpainput();
  criaBotaoApagar(li);
  salvarTarefas();
}

document.addEventListener("click", (e) => {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
  if (!inputTarefa.value) return;
  if (el.classList.contains("btn-tarefa")) criaTarefa(inputTarefa.value);
});

function salvarTarefas() {
  const liTarefas = listTarefa.querySelectorAll("li");
  const listaDeTarefas = [];

  for (let listTarefa of liTarefas) {
    let tarefaTexto = listTarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem("listTarefas", tarefasJSON);
}

function adicionaTarefasSalvas() {
  const listTarefa = localStorage.getItem("listTarefas");
  const listaDeTarefas = JSON.parse(listTarefa);

  for (let listTarefa of listaDeTarefas) {
    criaTarefa(listTarefa);
  }
}

adicionaTarefasSalvas();
