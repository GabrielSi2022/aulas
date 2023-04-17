const pessoas = [
  { id: 3, nome: "Gabriel" },
  { id: 2, nome: "Lucas" },
  { id: 1, nome: "Joaquim" },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

for (const pessoas of novasPessoas) {
  console.log(pessoas);
}
