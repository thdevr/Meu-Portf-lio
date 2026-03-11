const dataFinal = new Date("2025-12-01 23:59:59").getTime();

function atualizar() {
    const agora = new Date().getTime();
    const dist = dataFinal - agora;

    if (dist <= 0) {
        document.getElementById("timer").innerHTML = "Promoção encerrada";
        return;
    }

    document.getElementById("dias").textContent =
        Math.floor(dist / (1000 * 60 * 60 * 24));

    document.getElementById("horas").textContent =
        Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutos").textContent =
        Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("segundos").textContent =
        Math.floor((dist % (1000 * 60)) / 1000);
}

setInterval(atualizar, 1000);
