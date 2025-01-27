let salarioAtual = prompt("Digite o valor do atual salário:");
let percentualReajuste = prompt("Digite o percentual de reajuste:");

let salAtual = Number(salarioAtual.replace(",", "."));
let reajuste = Number(percentualReajuste.replace(",", "."));

if (!Number.isNaN(salAtual) && !Number.isNaN(reajuste)) {
  if (salAtual > 0 && reajuste > 0) {
    let salReajustado = salAtual * (reajuste / 100) + salAtual;
    alert(
      `O valor do salário passa a ser de R$ ${salReajustado} após o reajuste de ${reajuste}%.`
    );
  } else alert("Digite um número maior que 0.");
} else alert("Este programa espera receber números como entrada.");
