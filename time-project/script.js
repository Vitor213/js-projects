function atualizarHora() {
  var display = document.querySelector(".display");

  var agora = new Date();
  var hora =
    corrigirHora(agora.getHours()) +
    ":" +
    corrigirHora(agora.getMinutes()) +
    ":" +
    corrigirHora(agora.getSeconds());

  display.textContent = hora;
}

function corrigirHora(numero) {
  if (numero < 10) {
    numero = "0" + numero;
  }
  return numero;
}
atualizarHora();
setInterval(atualizarHora, 1000);

console.log(hora);
