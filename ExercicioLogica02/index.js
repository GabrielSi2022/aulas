//Escreva uma função que recebe um número e retorne o seguinte:
//Número é divisivel por 3 = Fizz
//Número é divisivel por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Numero nao é divisivel por 3 e 5 = retorna o proprio numero
//Chegar se o numero é realmente um número
//Use a função com números de 0 a 100

function recebeNum(num) {
  if (typeof num !== "number") return num;
  if (num % 5 == 0 && num % 3 == 0) return "FizzBuzz";
  if (num % 3 == 0) return "Fizz";
  if (num % 5 == 0) return "Buzz";
  return num;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, recebeNum(i));
}

const resultado = recebeNum(15);
console.log(resultado);
