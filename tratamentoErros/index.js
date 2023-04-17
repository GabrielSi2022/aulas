// try {
//   console.log(nãoExisto);
// } catch (error) {
//   console.log("naoExisto não existe.");
// }

// function soma(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new ReferenceError("x e y precisam ser numeros.");
//   }

//   return x + y;
// }
// try {
//   console.log(soma(1, 3));
//   console.log(soma("1", 3));
// } catch (error) {
//   //console.log(error);
//   console.log("Alguma coisa mais amigável pro usuario");
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw TypeError("Esperando instância de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  console.log(e);
} finally {
  console.log("tenha um bom dia");
}
