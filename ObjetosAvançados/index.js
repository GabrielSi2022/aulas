// const pessoa = {
//   nome: "Gabriel",
//   sobrenome: "Henrique",
// };

// const chave = "nome";
// console.log(pessoa[chave]);

// const pessoa1 = new Object();

// pessoa1.nome = "Gabriel";
// pessoa1.sobrenome = "Henrique";
// pessoa1.idade = 27;
// pessoa1.falarNome = function () {
//   return `${this.nome} está falando seu nome`;
// };

// pessoa1.getDataNascimento = function () {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// };

// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }

//função de fabrica
// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     },
//   };
// }

// const p1 = criaPessoa("Luiz", "Otavio");
// console.log(p1.nomeCompleto);

//função contrutora

// function Pessoa(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// }

// const p1 = new Pessoa("Gabriel", "Henrique");
// const p2 = new Pessoa("Luck", "Marve");

// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   Object.defineProperty(this, "estoque", {
//     enumerable: true,
//     configurable: true,
//     get: function () {
//       return estoque;
//     },
//     set: function (valor) {
//       console.log(valor);
//     },
//   });

//   //   Object.defineProperties(this, {
//   //     nome: {
//   //       enumerable: true,
//   //       value: nome,
//   //       writable: true,
//   //       configurable: true,
//   //     },
//   //     preco: {
//   //       enumerable: true,
//   //       value: preco,
//   //       writable: true,
//   //       configurable: true,
//   //     },
//   //   });
// }

// const p1 = new Produto("Camiseta", 20, 3);
// console.log(p1);
// console.log(p1.estoque);

// const produto = { nome: "Caneca", preco: 1.8 };
// Object.defineProperty(produto, "nome", {
//   writable: false,
//   configurable: false,
// });
// console.log(Object.getOwnPropertyDescriptors(produto, "nome", "preco"));

//Construtora -> molde (classe)
// function Pessoa(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// }

// Pessoa.prototype.nomeCompleto = () => this.nome + "  " + this.sobrenome;

// //Instancia

// const pessoa1 = new Pessoa("Gabriel", "H.");
// const pessoa2 = new Pessoa("Lucas", "T.");

// console.dir(pessoa1);
// console.dir(pessoa2);

// function Produto(nome, preco) {
//   this.nome = nome;
//   this.preco = preco;
// }

// Produto.prototype.desconto = (percentual) => {
//   this.preco = this.preco - this.preco * (percentual / 10);
// };

// Produto.prototype.aumento = (percentual) => {
//   this.preco = this.preco + this.preco * (percentual / 10);
// };

// const p1 = new Produto("Camiseta", 50);

// const p2 = {
//   nome: "Caneca",
//   preco: 15,
// };
// Object.setPrototypeOf(p2, Produto.prototype);

// const p3 = Object.create(Object.prototype);

// console.log(p3);
// console.log(p1);
// console.log(p2);

//Produto
//CAMISETA , CANECA

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  return (this.preco += quantia);
};
Produto.prototype.desconto = function (quantia) {
  return (this.preco -= quantia);
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.construtor = Camiseta;

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: () => {
      return estoque;
    },
    set: (valor) => {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.construtor = Caneca;

const produto = new Produto("Gen", 111);
const camiseta = new Camiseta("Regata", 7.5, "Preta");
const caneca = new Caneca("Versati", 16.5, "Plastico", 5);
caneca.estoque = 100;

console.log(produto);
camiseta.aumento(15);
console.log(camiseta);
caneca.aumento(10);
console.log(caneca);
