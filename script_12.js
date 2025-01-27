let valor = prompt("Digite o valor total da compra:");
valor = valor !== null ? valor.replace(",", ".") : 0;
let comprador = prompt(
  "Identifique o comprador:\n Digite A para Gestante\n Digite B para Aposentado\n Digite C para Pensionista"
);
let valorFinal = 0;
valor = Number(valor);
comprador = comprador.toUpperCase();

if (
  (comprador === "A" || comprador === "B" || comprador === "C") &&
  valor > 0
) {
  if (valor >= 80) {
    switch (comprador) {
      case "A":
        valorFinal = valor * 0.8;
        break;
      case "B":
        valorFinal = valor * 0.85;
        break;
      case "C":
        valorFinal = valor * 0.9;
        break;
    }
  } else {
    switch (comprador) {
      case "A":
        valorFinal = valor * 0.85;
        break;
      case "B":
        valorFinal = valor * 0.9;
        break;
      case "C":
        valorFinal = valor * 0.95;
        break;
    }
  }

  alert(
    `Para o cliente ${comprador}, o valor total da compra é de R$${valorFinal.toFixed(
      2
    )}.`
  );
} else {
  alert("Erro");
}
