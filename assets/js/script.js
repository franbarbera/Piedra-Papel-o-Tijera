let triunfos = 0;
let perdidas = 0;

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jugar(jugador) {
  let opciones = ["Piedra", "Papel", "Tijera"];
  let pc = aleatorio(0, 2);

  let resultado = "";

  if (jugador === pc) {
    resultado = "Empate";
  } else if (
    (jugador === 0 && pc === 2) ||
    (jugador === 1 && pc === 0) ||
    (jugador === 2 && pc === 1)
  ) {
    resultado = "Ganaste";
    triunfos = triunfos + 1;
  } else {
    resultado = "Perdiste";
    perdidas = perdidas + 1;
  }
  document.getElementById("pelea").innerHTML = `
<p>Tú elegiste: <strong>${opciones[jugador]}</strong></p>
<p>La PC eligió: <strong>${opciones[pc]}</strong></p>
<p>${resultado}</p>
<p>Triunfos: ${triunfos} - Derrotas: ${perdidas}</p>
`;

  if (triunfos === 3) {
    alert("Felicidades ganaste el juego");
    reiniciarJuego();
  } else if (perdidas === 3) {
    alert("Perdiste, Suerte la proxima");
    reiniciarJuego();
  }
}

function reiniciarJuego() {
  triunfos = 0;
  perdidas = 0;
  document.getElementById("pelea").innerHTML = "<p> Nuevo juego iniciado </p>";
}

document.getElementById("piedra").addEventListener("click", () => jugar(0));
document.getElementById("papel").addEventListener("click", () => jugar(1));
document.getElementById("tijera").addEventListener("click", () => jugar(2));
