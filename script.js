document.addEventListener("DOMContentLoaded", function () {
    const siBtn = document.getElementById("siBtn");
    const noBtn = document.getElementById("noBtn");
    const question = document.getElementById("question");
    const gifContainer = document.getElementById("gifContainer");
    const happyGifContainer = document.getElementById("happyGifContainer");
    const sadGifContainer = document.getElementById("sadGifContainer");

    // Cuando se presiona "Sí"
    siBtn.addEventListener("click", function () {
        question.innerText = "¡Sabía que dirías que sí! 💖";
        gifContainer.style.display = "none";
        happyGifContainer.style.display = "block";
        siBtn.style.display = "none";
        noBtn.style.display = "none";
    });

    // Cuando se presiona "No"
    noBtn.addEventListener("mouseover", function () {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });

    noBtn.addEventListener("click", function () {
        question.innerText = "😢 Bueno, lo intenté...";
        gifContainer.style.display = "none";
        sadGifContainer.style.display = "block";
        siBtn.style.display = "none";
        noBtn.style.display = "none";
    });
});
