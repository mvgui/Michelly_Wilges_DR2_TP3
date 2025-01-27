let lado = Number(prompt("Digite o comprimento do lado do quadrado em cm:"));
if (!Number.isNaN(lado) && lado !== 0) {
  let area = Math.pow(lado, 2);
  alert(`A área do quadrado de lado ${lado} é de ${area} cm2.`);
} else {
  alert("Este programa espera um número diferente de 0 como entrada.");
}
