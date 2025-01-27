const qtdDoces = Number(prompt("Digite a quantidade de doces:"));
let tamanho = prompt("Digite o tamanho da caixa (P, M ou G):");
let tamCaixa = tamanho.toUpperCase();
let numCaixas = 0;

if (
  (Number.isInteger(qtdDoces) && tamCaixa === "P") ||
  tamCaixa === "M" ||
  tamCaixa === "G"
) {
  if (tamCaixa === "P") {
    numCaixas = qtdDoces / 20;
    if (qtdDoces % 20 > 0) {
      numCaixas = numCaixas + 1;
    }
  } else if (tamCaixa === "M") {
    numCaixas = qtdDoces / 50;
    if (qtdDoces % 50 > 0) {
      numCaixas = numCaixas + 1;
    }
  } else if (tamCaixa === "G") {
    numCaixas = qtdDoces / 100;
    if (qtdDoces % 100 > 0) {
      numCaixas = numCaixas + 1;
    }
  }
  alert(
    `Para ${qtdDoces} doces serão necessárias ${Math.floor(
      numCaixas
    )} caixas do tamanho ${tamCaixa}.`
  );
} else alert("Os valores passados são inválidos.");
