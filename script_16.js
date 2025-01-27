let passo = Number(
  prompt("Escolha a número do passo que deseja iniciar (de 1 a 10):")
);
if (Number.isInteger(passo) && passo >= 1 && passo <= 10) {
  switch (passo) {
    case 1:
      alert(`1 - Pegar os grãos de café`);
    case 2:
      alert(`2 - Colocar na máquina para torrar`);
    case 3:
      alert(`3 - Pegar os grãos torrados`);
    case 4:
      alert(`4 - Colocar os grãos torrados para moer`);
    case 5:
      alert(` 5 - Colocar o grão moído no local adequado`);
    case 6:
      alert(`6 - Colocar água na máquina`);
    case 7:
      alert(`7 - Escolher a quantidade de café`);
    case 8:
      alert(`8 - Apertar o botão de iniciar`);
    case 9:
      alert(`9 - Aguardar o término do preparo`);
    case 10:
      alert(`10 - Pegar o copo e beber o café.`);
  }
} else alert("Digite um número válido.");
