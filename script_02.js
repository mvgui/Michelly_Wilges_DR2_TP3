let altura = Number(
  prompt("Digite o comprimento da altura do retângulo em cm:")
);
let base = Number(prompt("Digite o comprimento da base do retângulo em cm:"));
if (
  !Number.isNaN(altura) &&
  altura !== 0 &&
  !Number.isNaN(base) &&
  base !== 0
) {
  let area = altura * base;
  alert(
    `A área do retângulo de altura ${altura} e base ${base} é de ${area} cm2.`
  );
} else {
  alert("Este programa espera um número diferente de 0 como entrada.");
}
