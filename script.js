const personagem = document.querySelector(".personagem");
const cato = document.querySelector(".cato");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")){
        jump();
    }
});

function jump() {
    if (!personagem.classList.contains("jump")){
        personagem.classList.add("jump");
        alreadyJump = true;

        setTimeout(() => {
            personagem.classList.remove("jump");

            alreadyJump = false;
            }, 1100); 
        }
    }

    setInterval(()=> { 
        let personagemBottom = parseInt(
            window.getComputedStyle(personagem).getPropertyValue("Bottom")
        );
        let catoLeft = parseInt(
            window.getComputedStyle(cato).getPropertyValue("left")
        );

        if (catoLeft > 40 && catoLeft < 270 && personagemBottom <= 50 && !alreadyJump){
            alert(`Fim do Jogo! Sua pontuação foi: ${count}`);
            count = 0;
        }

        count ++;
        score.innerHTML = `Pontuação: ${count}`;
    }, 10);