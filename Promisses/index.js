// function rand(min, max) {
//   min *= 1000;
//   max *= 1000;
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//   return new Promise((resolve, reject) => {
//     if (typeof msg != "string") reject(false);
//     setTimeout(() => {
//       resolve(msg);
//     }, tempo);
//   });
// }

// esperaAi("Conectando com a base de dados!!", rand(1, 3))
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi("Transferindo resultados", rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi(222222222222222, rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((e) => {
//     console.log("ERRO:", e);
//   });

// function rand(min, max) {
//   min *= 1000;
//   max *= 1000;
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {
//   return new Promise((resolve, reject) => {
//     if (typeof msg != "string") reject(false);
//     setTimeout(() => {
//       resolve(msg.toUpperCase() + "- Passei na promise");
//     }, tempo);
//   });
// }

// const promises = [
//   "Primeiro valor",
//   esperaAi("Promise 1", 3000),
//   esperaAi("Promise 2", 500),
//   esperaAi("Promise 3", 1000),
//   "Outro valor",
// ];

// Promise.all(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg != "string") {
      reject(new Error("EITA PORRA"));
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + "- Passei na promise");
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", rand());
    console.log(fase1);
    const fase2 = await esperaAi(222, rand());
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);
    console.log("Terminamos na fase:", fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();
