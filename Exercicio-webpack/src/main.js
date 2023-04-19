import GeraCPF from "./modules/geraCpf";

import "./assets/css/style.css";

(function () {
  const cpfGerado = document.querySelector(".cpf-gerado");
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();
