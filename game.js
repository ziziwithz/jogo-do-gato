const gato = document.getElementById("gato");
const pao = document.getElementById("pao");

function jump() {
    const gato = document.getElementById("gato");
    if (gato.classList != "jump") {
        gato.classList.add("jump");

        setTimeout(function () {
            gato.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(() => {
    let randomTime = Math.random() * 6000; //criar gato com pão de maneira aleatória
const gato = document.getElementById("gato");
const pao = document.getElementById("pao");
    console.log(gato, pao);
    // gato posição
    let gatoTop = parseInt(window.getComputedStyle(gato).getPropertyValue("top"));
    // gato do pão posição,
    let paoLeft = parseInt(window.getComputedStyle(pao).getPropertyValue("left"));

    // analisar se ambos se tocam
    if (paoLeft < 50 && paoLeft > 0 && gatoTop >= 140){
        alert("Opa, game over :(");
        document.body.innerHTML = '<h1 class="game-over""> Atualize a página e jogue novamente </h1>'; // criando título ao final do jogo
    }

    setTimeout(isAlive, randomTime);
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});