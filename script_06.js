let numero = prompt("Digite um número inteiro:");

if (!Number.isInteger(numero)) {
  if (numero == 0) {
    alert("O número é 0.");
  } else if (numero > 0) {
    alert(`O número ${numero} é positivo.`);
  } else alert(`O número ${numero} é negativo.`);
} else alert("Este programa espera um número inteiro como entrada.");
