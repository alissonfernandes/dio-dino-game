const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

const handleKeyUp =  function(event) {
    if (event.keyCode === 32) {
        console.log('Pressionou espaço');
        if (!isJumping) {
            jump();
        }
    }
}

// faz o dino pular
 function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {

        if (position >= 150) { 

            // faz o dino descer
            clearInterval(upInterval);

            let dowInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(dowInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {

            // faz o dino subir
            position += 20;
            dino.style.bottom = position + 'px';
        }

    }, 20);
}

// faz cacto aparecer
function createCactus() {
    const cactus = document.createElement('div');
    cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus);
    
    let leftInterval = setInterval(() => {

        if (cactusPosition < -60) {

            // faz cacto desaparecer
            clearInterval(leftInterval);
            background.removeChild('cactus');
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {

            // game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {

            // faz cacto se mover
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20);
    setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp);

console.log(dino);


