let votoRobo = Number(prompt("Digite a quantidade de votos do RoboRat:"));
let votoSuper = Number(
  prompt("Digite a quantidade de votos do SuperKeyboard:")
);
let votoInvalido = Number(prompt("Digite a quantidade de votos inválidos:"));
if (
  !Number.isInteger(votoRobo) ||
  !Number.isInteger(votoSuper) ||
  votoRobo > 0 ||
  votoSuper > 0
) {
  let porcentagemRobo = 0;
  let porcentagemSuper = 0;
  let porcentagemInvalido = 0;
  let totalVotoVal = votoRobo + votoSuper;
  let totalVoto = votoRobo + votoSuper + votoInvalido;
  let porcValRobo = 0;
  let porcValSuper = 0;
  let novoMascote;

  porcentagemRobo = (votoRobo / totalVoto) * 100;
  porcentagemSuper = (votoSuper / totalVoto) * 100;
  porcentagemInvalido = (votoInvalido / totalVoto) * 100;
  porcValRobo = (votoRobo / totalVotoVal) * 100;
  porcValSuper = (votoSuper / totalVotoVal) * 100;

  if (porcValRobo > porcValSuper) {
    novoMascote = "RoboRat";
  } else if (porcSuper > porcRobo) {
    novoMascote = "SuperKeyboard";
  } else novoMascote = "Empate";

  alert(`O total de votos, incluindo votos inválidos, foi de ${totalVoto}.
Nesse cenário, a porcentagem de votos do RoboRat foi de ${porcentagemRobo}% 
e de SuperKeyboard foi de ${porcentagemSuper}%.
A porcentagem de votos inválidos é de ${porcentagemInvalido}%.
Considerando apenas os votos válidos,
a porcentagem de votos do RoboRat foi de ${porcValRobo}% 
e de SuperKeyboard foi de ${porcValSuper}%.
Com esse resultado, o novo mascote é ${novoMascote}.`);
}
alert("Digite um número válido.");
