const octeto = Number(
  prompt("Digite os três primeiros números do endereço de IP:")
);

if (Number.isInteger(octeto)) {
  let classe;
  if (octeto >= 0 && octeto < 128) {
    classe = "A";
  } else if (octeto >= 128 && octeto < 192) {
    classe = "B";
  } else if (octeto >= 192 && octeto < 224) {
    classe = "C";
  } else if (octeto >= 224 && octeto < 240) {
    classe = "D";
  } else if (octeto >= 240) {
    classe = "E";
  }
  alert(`O endereço do IP ${octeto} é classe ${classe}.`);
} else alert("Este não é um endereço de IP válido.");
