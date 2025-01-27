let numX = Number(prompt("Digite o primeiro número maior que 0:"));
let numA = Number(prompt("Digite o segundo número:"));
let numB = Number(prompt("Digite o terceiro número:"));
let numC = Number(prompt("Digite o quarto número:"));
let maior;
let menor;
let meio;

if (
  numX > 0 &&
  Number.isInteger(numX) &&
  !isNaN(numA) &&
  !isNaN(numB) &&
  !isNaN(numC)
) {
  if (numA > numB && numA > numC) {
    maior = numA;
    if (numB > numC) {
      meio = numB;
      menor = numC;
    } else {
      meio = numC;
      menor = numB;
    }
  } else if (numB > numA && numB > numC) {
    maior = numB;
    if (numA > numC) {
      meio = numA;
      menor = numC;
    } else {
      meio = numC;
      menor = numA;
    }
  } else {
    maior = numC;
    if (numB > numA) {
      meio = numB;
      menor = numA;
    } else {
      meio = numA;
      menor = numB;
    }
  }
  switch (numX) {
    case 1:
      alert(`Os números digitados foram: ${numX}, ${numA}, ${numB}, ${numC}.
        Os números ordenados são: ${menor} - ${meio} - ${maior}`);
      break;
    case 2:
      alert(`Os números digitados foram: ${numX}, ${numA}, ${numB}, ${numC}.
    Os números ordenados são: ${maior} - ${meio} - ${menor}`);
      break;
    case 3:
      alert(`Os números digitados foram: ${numX}, ${numA}, ${numB}, ${numC}.
        Os números ordenados são: ${meio} - ${maior} - ${menor}`);
      break;
    default:
      alert(
        "O valor do primeiro número não corresponde a nenhuma das condições acima."
      );
  }
} else alert("Erro");
