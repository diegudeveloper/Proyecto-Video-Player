const video = document.querySelector(".video")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")

play.addEventListener('click', clickPlay);
pause.addEventListener('click', clickPause);

function clickPlay () {
    video.play();
    play.hidden = true
    pause.hidden =false
}

function clickPause () {
    video.pause();
    pause.hidden = true
    play.hidden = false
}