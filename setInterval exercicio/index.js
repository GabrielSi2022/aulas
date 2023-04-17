function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

// function funcaoDoInterval() {
//   console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);

const timer = setInterval(() => {
  console.log(mostraHora());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 3000);

setTimeout(() => {
  console.log("Olá Mundo");
}, 5000);
