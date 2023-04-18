import { MD5 } from "./md5.js";

function Validation(value, msg) {
  if (value.length === 0) {
    const newMsg = msg ? msg : "Campo vazio";
    alert(newMsg);
    throw new Error(newMsg);
  }
}

const keyUsers = "usersAccess";

const users = JSON.parse(localStorage.getItem(keyUsers)) || [];

class Access {
  constructor(login, password) {
    Validation(login, "Preencha um login válido!");
    Validation(password, "Preencha uma senha válida!");

    this.username = login;
    this.password = MD5(password);

    this.name;
  }

  get register() {
    users.push({
      username: this.username,
      password: this.password,
      name: "Gabriel Pensador",
    });

    localStorage.setItem(keyUsers, JSON.stringify(users));

    console.log(users);
  }

  get logar() {
    const user = users.find(
      (u) => u.username === this.username && u.password === this.password
    );

    if (!user) {
      let msg = "Acesso inválido!";
      alert(msg);
      throw new Error(msg);
    }
    this.name = user.name;
    this.logged;
  }

  get getUser() {
    return `${this.username}, ${this.password}`;
  }

  get logged() {
    const main = document.getElementById("main");
    main.innerHTML = `<h1>Bem Vindo ${this.name}</h1>`;
  }
}

function Submit(e) {
  e.preventDefault();

  let user = document.getElementById("login");
  let password = document.getElementById("password");

  let access = new Access(user.value, password.value);

  if (e.submitter.value === "logar") {
    access.logar;
  }
  if (e.submitter.value === "cadastrar") {
    access.register;
  }
}

let form = document.getElementById("form");
form.addEventListener("submit", Submit);
