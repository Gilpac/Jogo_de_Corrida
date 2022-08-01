const personagem = document.querySelector(".personagem");
const cato = document.querySelector(".cato");
const score = document.querySelector("score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")){
        jump();
    }
})