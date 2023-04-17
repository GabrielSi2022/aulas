// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   falar() {
//     console.log(`${this.nome} está falando`);
//   }
// }

// function Pessoa2(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
// }

// Pessoa2.prototype.falar = function () {
//   console.log(`${this.nome} está falando`);
// };

// const p1 = new Pessoa("Gabriel", "Henrique");
// const p3 = new Pessoa("Gabriel2", "Henrique2");
// const p2 = new Pessoa2("Luiz", "Fernando");
// const p4 = new Pessoa2("Luiz2", "Fernando2");
// console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);

// const _velocidade = Symbol("velocidade");

// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }

//   get velocidade() {
//     return this[_velocidade];
//   }

//   set velocidade(valor) {
//     if (typeof valor !== "number") return;
//     if (valor > 100 || valor <= 0) return;
//     this[_velocidade] = valor;
//   }

//   acelerar() {
//     if (this[_velocidade] >= 100) return;
//     this[_velocidade]++;
//   }

//   freiar() {
//     if (this[_velocidade] <= 0) return;
//     this[_velocidade]--;
//   }
// }

// const c1 = new Carro("Fusca");

// // for (let i = 0; i <= 200; i++) {
// //   c1.acelerar();
// // }

// // for (let i = 0; i <= 200; i++) {
// //   c1.freiar();
// // }

// c1.velocidade = 100;
// console.log(c1);

// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   get nomeCompleto() {
//     return this.nome + " " + this.sobrenome;
//   }

//   set nomeCompleto(valor) {
//     valor = valor.split(" ");
//     this.nome = valor.shift();
//     this.sobrenome = valor.join(" ");
//   }
// }

// const p1 = new Pessoa("Gabriel", "Henrique");

// p1.nomeCompleto = "Gabriel Henrique Bueno";
// console.log(p1.nome);
// console.log(p1.sobrenome);

// class DispositivoEletronico {
//   constructor(nome) {
//     this.nome = nome;
//     this.ligado = false;
//   }

//   ligar() {
//     if (this.ligado) {
//       console.log("O " + this.nome + " ja está ligado");
//       return;
//     }

//     this.ligado = true;
//   }

//   desligar() {
//     if (!this.ligado) {
//       console.log("O " + this.nome + "ja esta desligado");
//       return;
//     }

//     this.ligado = false;
//   }
// }

// // const d1 = new DispositivoEletronico("Smartphone");
// // d1.ligar();
// // d1.ligar();
// // d1.desligar();
// // d1.desligar();
// // console.log(d1);

// class Smartphone extends DispositivoEletronico {
//   constructor(nome, cor, modelo) {
//     super(nome);
//     this.cor = cor;
//     this.modelo = modelo;
//   }
// }

// class Tablet extends DispositivoEletronico {
//   constructor(nome, temWifi) {
//     super(nome);
//     this.temWifi = temWifi;
//   }

//   ligar() {
//     console.log("Voce alterou o metodo ligar");
//   }
// }

// const s1 = new Smartphone("samsung", "Preto", "galaxi");
// const t1 = new Tablet("ipad", true);
// t1.ligar();
// console.log(t1.ligado);
// console.log(s1);

// const _volume = Symbol("volume");

// class ControleRemoto {
//   constructor(tv) {
//     this.tv = tv;
//     this[_volume] = 0;
//   }

//   get volume() {
//     return this[_volume];
//   }

//   set volume(valor) {
//     if (typeof valor !== "number") return;
//     if (valor > 100 || valor <= 0) return;
//     this[_volume] = valor;
//   }

//   aumentarVolume() {
//     this[_volume] += 2;
//   }

//   diminuirVolume() {
//     this[_volume] -= 2;
//   }

//   static trocaPilha() {
//     console.log("Ok mano tmj");
//   }
// }

// const controle1 = new ControleRemoto("LG");
// controle1.volume = 10;
// controle1.aumentarVolume();
// console.log(controle1);

/////////////////////////////////////////////////////////////////////////////////
///VALIDANDO CPF COM CLASSES /////////////////////////////////////////////////

class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  valida() {
    if (typeof this.cpfLimpo === "undefined") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    console.log(novoCpf);
    return novoCpf === this.cpfLimpo;
  }

  criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }
}

const cpf = new ValidaCPF("705.484.450-52");
console.log(cpf.valida());

//705.484.450-52
// 070.987.720-03
