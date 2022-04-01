const dino = document.querySelector('.dino');
let isJumping = false;

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
    let position = 0;
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

document.addEventListener('keyup', handleKeyUp);

console.log(dino);


