/* ===== CARROSSEL + BOTÃO 1 SINCRONIZADO ===== */
const mensagens1 = [
    "Você é especial 💙",
    "Eu te amo 💙 e Jesus também te ama 💙",
    "Você é o siz do meu sevem 💙",
    "Você é a AU da minha aura 💙",
    "Você ilumina tudo ao seu redor 💙",
    "Mesmo nos dias difíceis, você continua incrível 💙",
    "Eu gosto muito de você de verdade 💙",
    "Seu sorriso muda qualquer dia 💙",
    "Você é única, não existe outra igual 💙",
    "Eu acredito em você e no seu valor 💙"
];

const imagens = document.querySelectorAll(".carousel img");

let i1 = 0;

document.getElementById("btn1").onclick = () => {
    alert(mensagens1[i1]);

    imagens.forEach(img => img.classList.remove("active"));
    imagens[i1 % imagens.length].classList.add("active");

    i1 = (i1 + 1) % mensagens1.length;
};

/* ===== BOTÃO 2 ===== */
document.getElementById("btn2").onclick = () => {
    document.getElementById("msgBox").style.display = "block";
};

function closeMsg() {
    document.getElementById("msgBox").style.display = "none";
}

/* ===== CHUVA AZUL ===== */
const rain = document.getElementById("rain");

function createDrop() {
    const drop = document.createElement("div");
    drop.classList.add("drop");

    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = (Math.random() * 2 + 2) + "s";

    rain.appendChild(drop);

    setTimeout(() => drop.remove(), 4000);
}

setInterval(createDrop, 70);
