


const audio1 = document.getElementById("audioPlayer");
const durationSpan = document.getElementById("duration");
const currentTimeSpan = document.getElementById("currentTime");

audio1.addEventListener("loadedmetadata", function() {
    const duration = audio1.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    durationSpan.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
});

audio1.addEventListener("timeupdate", function() {
    const currentTime = audio1.currentTime;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    currentTimeSpan.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
});





