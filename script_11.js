let saque = Number(prompt("Digite o valor do saque em múltiplo de 10:"));
let qtdCem = 0;
let qtdCinq = 0;
let qtdVinte = 0;
let qtdDez = 0;

if (Number.isInteger(saque) && saque > 9 && saque % 10 === 0) {
  if (saque > 100) {
    qtdCem = Math.floor(saque / 100);
    saque = saque % 100;
  }
  if (saque >= 50) {
    qtdCinq = Math.floor(saque / 50);
    saque = saque % 50;
  }
  if (saque >= 20) {
    qtdVinte = Math.floor(saque / 20);
    saque = saque % 20;
  }
  if (saque >= 10) {
    qtdDez = Math.floor(saque / 10);
    saque = saque % 10;
  }
  console.log(qtdCem, qtdCinq, qtdVinte, qtdDez);
  alert(
    `Você receberá ${qtdCem} notas de R$100,
    ${qtdCinq} notas de R$50,
    ${qtdVinte} notas de R$20,
    ${qtdDez} notas de R$10.`
  );
} else alert("Este não é um valor válido.");
