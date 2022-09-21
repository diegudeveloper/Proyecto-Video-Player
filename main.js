const video = document.querySelector(".video")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const avanza = document.querySelector("#avanza")
const retrocede = document.querySelector("#retrocede")
const progres = document.querySelector("#progres")

play.addEventListener('click', clickPlay);
pause.addEventListener('click', clickPause);
avanza.addEventListener('click', clickAvanza);
retrocede.addEventListener('click', clickRetrocede);
video.addEventListener('loadedmetadata', videoProgress);
video.addEventListener('timeupdate', videoTimeUpdate);

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
    video.currentTime = video.currentTime + 10
    
}
function clickRetrocede () {
    video.currentTime = video.currentTime - 10
    
}

function videoProgress () {
    progres.max = video.duration
    console.log("vamos bien", video.duration);
    
}
function videoTimeUpdate () {
    
    
}

 