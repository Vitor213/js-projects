const calcular = document.getElementById("calcular-btn");

function imc() {
  const nome = document.getElementById("nome");
  const altura = document.getElementById("altura");
  const peso = document.getElementById("peso");
  const resultado = document.getElementById("resultado-imc");

  if (nome.value !== "" && altura.value !== "" && peso.value !== "") {
    const valorImcNum =
      parseFloat(peso.value) /
      (parseFloat(altura.value) * parseFloat(altura.value));
    const valorImc = valorImcNum.toFixed(2);

    let classificacao = "";
    if (valorImcNum < 18.5) {
      classificacao = "abaixo do peso";
    } else if (valorImcNum < 25) {
      classificacao = "com o peso ideal";
    } else if (valorImcNum < 30) {
      classificacao = "acima do peso";
    } else if (valorImcNum < 35) {
      classificacao = "obeso";
    } else {
      classificacao = "obesidade grave";
    }

    resultado.textContent = `${nome.value} seu IMC é ${valorImc} e você esta ${classificacao}.`;
  } else {
    resultado.textContent = "Preencha todos os campos!";
  }
}

calcular.addEventListener("click", imc);
