/* CONTROLE DO CARROSSEL */
let index = 0;
const images = document.querySelectorAll(".carousel img");

function rotateImages() {
    if (images.length > 0) {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }
}
setInterval(rotateImages, 3000);

/* BOTÃO 1 - FRASES NO ALERT */
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

let i1 = 0;
document.getElementById("btn1").onclick = () => {
    alert(mensagens1[i1]);
    i1 = (i1 + 1) % mensagens1.length;
};

/* BOTÃO 2 - MOSTRAR POP-UP */
const msgBox = document.getElementById("msgBox");
document.getElementById("btn2").onclick = () => {
    msgBox.style.display = "block";
};

function closeMsg() {
    msgBox.style.display = "none";
}

/* EFEITO DE CHUVA */
const rainContainer = document.getElementById("rain");

function createDrop() {
    const drop = document.createElement("div");
    drop.classList.add("drop");

    const startLeft = Math.random() * window.innerWidth;
    drop.style.left = startLeft + "px";
    drop.style.animationDuration = (Math.random() * 2 + 1.5) + "s";
    drop.style.opacity = Math.random() * 0.5 + 0.2;

    rainContainer.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 3000);
}

setInterval(createDrop, 80);
