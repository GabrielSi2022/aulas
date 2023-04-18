class ValidaFormulario {
  constructor(nome, sobrenome, cpf, usuario, senha) {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert("Formulario enviado.");
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    let valid = true;
    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, "Campos senha e repetir senha precisao ser iguais.");
      this.criaErro(
        repetirSenha,
        "Campos senha e repetir senha precisam ser iguais"
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, "A senha deve ter entre 6 e 12 caracteres!");
    }
    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let campo of this.formulario.querySelectorAll(".validar")) {
      const label = campo.previousElementSibling.innerText;

      if (!campo.value) {
        this.criaErro(campo, `Campo ${label} nao pode estar em branco`);
        valid = false;
      }

      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }

  validaUsuario(campo) {
    const user = campo.value;
    let valid = true;
    if (user.length < 3 || user.length > 12) {
      this.criaErro(campo, "Usuario precisa ter entre 3 e 12 caracteres.");
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "Usuario precisa conter apenas letras ou numeros");
      valid = false;
    }

    return true;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF invalido");
      return false;
    }
    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
