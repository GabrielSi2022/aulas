/*let nome = "Henrique"; // String

console.log(nome, "nasceu em 1984.");
console.log("Em 2000 ", nome, "conheceu Maria");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com ", nome, "em 2015");
console.log("O filho de", nome, "se chama Eduardo.");

*/

/*let nome; // Declarei a variavel

nome = "João"; //Inicializando a Variavel

console.log(nome); // Mostrando o valor da Variavel

nome = "Otávio";

console.log(nome);
*/

/* Luiz Otávio Miranda tem 30 anos ,  pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925924
Luiz Otávio nasceu em 1980
*/

const nome = "Gabriel Henrique";
const sobrenome = "Bueno";
const idade = 27;
const peso = 73;
const alturaEmCm = 1.75;
let indiceDeMassaCorporea; //peso / (altura * altura)
let anoNascimento;

indiceDeMassaCorporea = peso / (alturaEmCm * alturaEmCm);

anoNascimento = 2023 - idade;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${alturaEmCm} de altura e seu IMC é de  ${indiceDeMassaCorporea} ${nome} ${sobrenome} nasceu em ${anoNascimento}`
);

if (indiceDeMassaCorporea > 30) {
  console.log("Você está gordo");
} else {
  console.log("Você está magro");
}
