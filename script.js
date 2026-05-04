/* ===== CARROSSEL ===== */
let index = 0;
const images = document.querySelectorAll(".carousel img");

function showSlide() {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    showSlide();
}, 3000);

/* ===== BOTÕES ===== */
document.getElementById("btn1").addEventListener("click", () => {
    alert("Você é muito especial 💙");
});

document.getElementById("btn2").addEventListener("click", () => {
    alert("Isso aqui é só o começo ✨");
});

/* ===== CHUVA AZUL ===== */
const rain = document.getElementById("rain");

function createDrop() {
    const drop = document.createElement("div");
    drop.classList.add("drop");

    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = (Math.random() * 2 + 2) + "s";

    rain.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 4000);
}

setInterval(createDrop, 80);
