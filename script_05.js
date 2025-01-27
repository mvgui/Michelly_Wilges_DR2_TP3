let tempC = Number(prompt("Digite a temperatura em Celsius:"));
if (!Number.isNaN(tempC)) {
  tempF = (tempC * 9) / 5 + 32;
  alert(`${tempC}º Celsius equivale à ${tempF}º Fahrenheit`);
} else {
  alert("Este programa espera receber números como entrada.");
}
