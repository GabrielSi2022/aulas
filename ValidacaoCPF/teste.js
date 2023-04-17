class Calculadora {
  constructor(a, b) {
    this.valor1 = a;
    this.valor2 = b;
  }

  soma() {
    return this.valor1 + this.valor2;
  }
  sub() {
    return this.valor1 - this.valor2;
  }
}

let calc = new Calculadora(1, 3);
let soma = calc.soma();

let sub = calc.sub();
