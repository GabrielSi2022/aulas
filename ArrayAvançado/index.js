// const removido = nomes.shift();
// console.log(nomes, removido);
// console.log(nomes.length);
// for (let valor of nomes) {
//   console.log(valor);
// }
// const nomes = ["gabriel", "lucas", "felipe", "Leticia", "Fernando"];

//nome.splice(indice,delete,elem1,elem2,elem3);

// const removidos = nomes.splice(-2, 0, "Chakabum");
// console.log(nomes, removidos);

// const removidos = nomes.splice(0, 0, "chuakarara");
// nomes.unshift("chuakarara");
// console.log(nomes);

//contatenação de array
// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = a1.concat(a2);

// console.log(a3);

//////////////////////////////////////////////////////////////////////////

// FILTERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados); //essa é a maneira simplificada

// const numerosFiltrados = numeros.filter(filtrarNumeros);

// function filtrarNumeros(valor) {
//   if (valor > 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(numerosFiltrados);

// const pessoas = [
//   { nome: "Luiz", idade: 62 },
//   { nome: "Maria", idade: 23 },
//   { nome: "Eduardo", idade: 55 },
//   { nome: "Leticia", idade: 19 },
//   { nome: "Rosana", idade: 32 },
//   { nome: "Wallace", idade: 47 },
// ];

// const pessoasComNomeGrande = pessoas.filter((valor) => valor.nome.length >= 5);
// const pessoasComIdadeVeia = pessoas.filter((valor) => valor.idade > 50);
// const pessoasTerminaA = pessoas.filter((valor) =>
//   valor.nome.toLocaleLowerCase().endsWith("c")
// );

// console.log(pessoasComNomeGrande);
// console.log(pessoasComIdadeVeia);
// console.log(pessoasTerminaA);

//////////////////////////////////////////////////////////////////////////

//MAP //MAP // MAP //MAP //MAP // MAP //MAP //MAP // MAP //MAP //MAP // MAP //MAP //MAP // MAP

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const dobrarNumero = numeros.map((valor) => valor * 2);

// console.log(dobrarNumero);

// const pessoas = [
//   { nome: "Luiz", idade: 62 },
//   { nome: "Maria", idade: 23 },
//   { nome: "Eduardo", idade: 55 },
//   { nome: "Leticia", idade: 19 },
//   { nome: "Rosana", idade: 32 },
//   { nome: "Wallace", idade: 47 },
// ];

// const arrayPessoas = pessoas.map((obj) => obj.nome);
// const arraySemNome = pessoas.map((obj) => ({ idade: obj.idade }));
// const arrayID = pessoas.map((obj, indice) => {
//   const newObj = { ...obj };
//   newObj.id = indice;
//   return newObj;
// });

// console.log(arrayPessoas);
// console.log(arraySemNome);
// console.log(arrayID);
// console.log(pessoas);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
/////REDUCE///////////REDUCE///////////REDUCE///////////REDUCE///////////REDUCE//////
/////REDUCE///////////REDUCE///////////REDUCE///////////REDUCE///////////REDUCE//////
/////REDUCE///////////REDUCE///////////REDUCE///////////REDUCE///////////REDUCE//////

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce((acumulador, valor) => {
//   acumulador += valor;
//   return acumulador;
// }); // reduzir o numero a 1 só elemento usando reduce

// const parReduce = numeros.reduce((acumulador, valor) => {
//   if (valor % 2 == 0) acumulador.push(valor);
//   return acumulador;
// }, []); // pegar somente os numeros pares de um array usando reduce

// const par = numeros.filter((valor) => valor % 2 !== 0); // pares usando filter

// const dobro = numeros.reduce((acumulador, valor) => {
//   acumulador.push(valor * 2);
//   return acumulador;
// }, []); // dobrar os valores do array usando reduce

// const dobroMap = numeros.map((valor) => valor * 2); // dobrar valor usando map

// const somarPar = numeros.reduce((acumulador, valor) => {
//   if (valor % 2 !== 0) {
//     acumulador += valor;
//   }

//   return acumulador;
// }, 0);

// // console.log(somarPar);
// // console.log(dobroMap);
// // console.log(parReduce);
// // console.log(dobro);
// // console.log(par);
// // console.log(total);

// const pessoas = [
//   { nome: "Luiz", idade: 62 },
//   { nome: "Maria", idade: 23 },
//   { nome: "Eduardo", idade: 55 },
//   { nome: "Leticia", idade: 19 },
//   { nome: "Rosana", idade: 64 },
//   { nome: "Wallace", idade: 47 },
// ];

// const pessoaVelha = pessoas.reduce((acumulador, obj) => {
//   if (acumulador.idade > obj.idade) return acumulador;
//   return obj;
// });

// console.log(pessoaVelha);

///////////////////////////////////////////////////////////////////////////////
/////REDUCE , MAPS , FILTER //////////////////REDUCE , MAPS , FILTER /////////////
/////REDUCE , MAPS , FILTER //////////////////REDUCE , MAPS , FILTER /////////////
/////REDUCE , MAPS , FILTER //////////////////REDUCE , MAPS , FILTER /////////////

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosPares = numeros
//   .filter((valor) => valor % 2 == 0)
//   .map((valor) => valor * 2)
//   .reduce((acumulador, valor) => acumulador + valor);

// console.log(numerosPares);

//////////////////////////////////////////////////////////////////////////////
//////FOR EACH/////////////////FOR EACH/////////////////FOR EACH/////////////////FOR EACH///////////
//////FOR EACH/////////////////FOR EACH/////////////////FOR EACH/////////////////FOR EACH///////////
//////FOR EACH/////////////////FOR EACH/////////////////FOR EACH/////////////////FOR EACH///////////

// const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let total = 0;
// a1.forEach((valor) => {
//   total += valor;
// });

// console.log(total);
// é a mesma coisa que o reduce só que menos performatico
