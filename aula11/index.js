const numero = Number(prompt("Digite um numero:"));

const numeroTitulo = document.getElementById("numero-titulo");

const texto = document.getElementById("texto");

// console.log(texto);

numeroTitulo.innerHTML = numero;
texto.innerHTML = "";
texto.innerHTML += `<p> Seu número + 2 é ${numero + 2}</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro ? ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> ${numero} é NaN ? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> ${numero} arredondado para baixo é ${Math.floor(
  numero
)}</p>`;
texto.innerHTML += `<p> ${numero} arredondado para cima é ${Math.ceil(
  numero
)}</p>`;
texto.innerHTML += `<p> O numero com duas casas decimais ${numero.toFixed(
  2
)}</p>`;
