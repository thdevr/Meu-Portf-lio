const eventoData = new Date("2025-09-30T09:00:00").getTime();
const contador = document.getElementById("contador");

function atualizarContador() {
  const agora = new Date().getTime();
  const distancia = eventoData - agora;

  if (distancia < 0) {
    contador.innerHTML = "O evento já começou!";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  contador.innerHTML = `Faltam ${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
