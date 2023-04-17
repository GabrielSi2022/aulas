// const pontuacaoUsuario = 10000;

// // if (pontuacaoUsuario >= 1000) {
// //   console.log("Usuário VIP");
// // } else {
// //   console.log("Usuario normal");
// // }  isso é a mesma coisa que a linha de baixo

// const nivelUsuario =
//   pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuário Normal";

// console.log(nivelUsuario);

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia);
// console.log(data.toString());

function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;

    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;

    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;

    case 3:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;

    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;

    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;

    case 6:
      diaSemanaTexto = "Sabado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "";
  }
}

const data = new Date("1987-04-20 00:00:00");
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
