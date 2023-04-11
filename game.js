const peter = $('.peter').get(0);
const pipe = $('.pipe').get(0);



$(document).on('keydown', function jump () {
    peter.classList.add('jump')
    setTimeout(() => {
        peter.classList.remove("jump")
    },500)
});

function secondAudio () {
    let audio2 = new Audio();
    audio2.src = "./sound/peter-hurt2.mp3"
    audio2.play();
    audio2.loop = true;
}

const loop = setInterval (() => {
    const pipePosition = pipe.offsetLeft;
    const peterPosition = +window.getComputedStyle(peter).bottom.replace("px", "");
    console.log(peterPosition)

    if (pipePosition <= 140 && pipePosition > 0 && peterPosition < 115) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        peter.style.animation = "none";
        peter.style.bottom = `${peterPosition}px`
        peter.src = "./images/peter-death.png"
        peter.style.width = "150px";
        peter.style.marginLeft = "50px";
        audio.src = "";
        secondAudio();
        clearInterval(loop);
    };


},10);

var audio, playbtn;

function initAudioPlayer() {
  audio = new Audio();
  audio.src = "./sound/brasileirinho.mp3";
  audio.play();
}

$("#play").one("click", function () {
    initAudioPlayer();
})

