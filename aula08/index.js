let varA = "A"; // tem pegar o valor de B
let varB = "B"; // tem que pegar o valor de C
let varC = "C"; // tem que pegar o valor de A

const varAtemp = varA;

varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC);
