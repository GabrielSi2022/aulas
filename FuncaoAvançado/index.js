//declaraçao de função , você pode declarar onde quiser a função que ela vai funcionar
// falaOI();
// function falaOI() {
//   console.log("oie");
// }

// const souUmDado = () => {
//   console.log("Sou um dado.");
// };

// souUmDado();

// const executaFuncao = (funcao) => {
//   console.log("Vou Executar sua Função abaixo");
//   funcao();
// };

// executaFuncao(souUmDado);

// function funcao() {
//   console.log("Oie");
// }
// funcao("Valor");

// function funcao() {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }
//   console.log(total);
// }

// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

// function criaPessoa(nome,sobrenome){
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa('Luiz', 'Otavio');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Oliveira'
// };

// const nome = "Luiz";

// function falaNome() {
//   console.log(nome);
// }
// falaNome();

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} esta ${assunto}.`;
    },
  };
}

const p1 = criaPessoa("Luiz", "Otavio");
console.log(p1.fala("Falando sobre JS"));
