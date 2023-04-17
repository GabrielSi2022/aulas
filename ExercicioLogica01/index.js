//Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
//de uma imagem(number).
//Retorne true se a imagem estiver no modo paisagem.

// function ePaisagem(largura, altura) {
//   if (largura > altura) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const imagem = ePaisagem(300, 200);
// console.log(imagem);

const ePaisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(400, 200));
