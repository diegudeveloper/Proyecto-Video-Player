const video = document.querySelector(".video")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const avanza = document.querySelector("#avanza")
const retrocede = document.querySelector("#retrocede")

play.addEventListener('click', clickPlay);
pause.addEventListener('click', clickPause);
avanza.addEventListener('click', clickAvanza);
retrocede.addEventListener('click', clickRetrocede);

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

function clickAvanza () {
    console.log("vamos bien");
    
}
function clickRetrocede () {
    console.log("vamos Superbien");
    
}