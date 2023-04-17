// function convertDate() {
//   const data = new Date();

//   let diaSemana = data.getDay();
//   let mesAno = data.getMonth() + 1;
//   let anoAtual = data.getFullYear();
//   let horaAtual = data.getHours();
//   let minAtual = data.getMinutes();

//   function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`;
//   }

//   const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
//   const mesTexto = getDiaMesTexto(mesAno);

//   const resultado = document.getElementById("resultado");

//   resultado.innerHTML = `${diaSemanaTexto}, ${mesAno} de ${mesTexto} de ${anoAtual}  ${zeroAEsquerda(
//     data.getHours()
//   )}:${zeroAEsquerda(data.getMinutes())}`;

//   function getDiaSemanaTexto(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//       case 0:
//         diaSemanaTexto = "Domingo";
//         return diaSemanaTexto;

//       case 1:
//         diaSemanaTexto = "Segunda";
//         return diaSemanaTexto;

//       case 2:
//         diaSemanaTexto = "Terça";
//         return diaSemanaTexto;

//       case 3:
//         diaSemanaTexto = "Quarta";
//         return diaSemanaTexto;

//       case 4:
//         diaSemanaTexto = "Quinta";
//         return diaSemanaTexto;

//       case 5:
//         diaSemanaTexto = "Sexta";
//         return diaSemanaTexto;

//       case 6:
//         diaSemanaTexto = "Sabado";
//         return diaSemanaTexto;
//       default:
//         diaSemanaTexto = "";
//     }
//   }

//   function getDiaMesTexto(mesAno) {
//     let mesTexto;

//     switch (mesAno) {
//       case 1:
//         mesTexto = "janeiro";
//         return mesTexto;

//       case 2:
//         mesTexto = "Fevereiro";
//         return mesTexto;

//       case 3:
//         mesTexto = "Março";
//         return mesTexto;

//       case 4:
//         mesTexto = "Abril";
//         return mesTexto;

//       case 5:
//         mesTexto = "Maio";
//         return mesTexto;

//       case 6:
//         mesTexto = "Junho";
//         return mesTexto;

//       case 7:
//         mesTexto = "Julho";
//         return mesTexto;

//       case 8:
//         mesTexto = "Agosto";
//         return mesTexto;

//       case 9:
//         mesTexto = "Setembro";
//         return mesTexto;

//       case 10:
//         mesTexto = "Outubro";
//         return mesTexto;

//       case 11:
//         mesTexto = "Novembro";
//         return mesTexto;

//       case 12:
//         mesTexto = "Dezembro";
//         return mesTexto;
//       default:
//         diaSemanaTexto = "";
//     }
//   }
// }

// convertDate();

const resultado = document.getElementById("resultado");
const data = new Date();
const opcoes = {
  dateStyle: "full",
  timeStyle: "short",
};

resultado.innerHTML = data.toLocaleDateString("pt-BR", opcoes);
