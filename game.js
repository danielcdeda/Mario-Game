const mario = $('.mario').get(0);
const pipe = $('.pipe').get(0);


$(document).on('keydown', function jump () {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove("jump")
    },500)
});

const loop = setInterval (() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
    console.log(marioPosition)

    if (pipePosition <= 140 && pipePosition > 0 &&marioPosition < 115) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`
        mario.src = "./images/mario-death.png"
        mario.style.width = "130px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
    };


},10);