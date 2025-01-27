let idade = Number(prompt("Digite  a idade:"));
if (Number.isInteger(idade)) {
  if (idade >= 18 && idade < 70) {
    alert("O voto é obrigatório.");
  } else if (idade >= 16 && idade >= 70) {
    alert("O voto é eletivo.");
  } else alert("O voto não é permitido.");
} else {
  alert("Este programa espera receber um número inteiro como entrada.");
}
