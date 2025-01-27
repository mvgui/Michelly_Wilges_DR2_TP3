let altura = prompt("Digite a sua altura em metros (ex.: 1,70):");
let peso = prompt("Digite o seu peso em quilos (ex.: 69,2):");
altura = altura !== null ? altura.replace(",", ".") : 0;
peso = peso !== null ? peso.replace(",", ".") : 0;

const alturaNum = Number(altura);
const pesoNum = Number(peso);

if (
  !Number.isNaN(alturaNum) ||
  !Number.isNaN(pesoNum) ||
  altura === 0 ||
  peso === 0
) {
  const imc = pesoNum / Math.pow(alturaNum, 2);
  if (imc < 18.5) {
    let mensagem;
    mensagem = "Magreza - Obesidade grau 0.";
  } else if (imc < 25) {
    mensagem = "Normal - Obesidade grau 0.";
  } else if (imc < 30) {
    mensagem = "Sobrepeso - Obesidade grau I.";
  } else if (imc < 40) {
    mensagem = "Obesidade grau II.";
  } else {
    mensagem = "Obesidade Grave grau III.";
  }
  alert(`Seu IMC é ${imc.toFixed(2)} e está classificado como ${mensagem}`);
} else alert("Este programa espera um número maior do que 0 como entrada.");
