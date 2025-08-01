console.log("WELCOME TO ROTIFY");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio("STARBOY.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");

// Songs list (simplified, update names as needed)
let songs = [
    { songName: "STARBOY", filepath: "STARBOY.mp3", coverpath: "cover1.jpeg" },
    // Add other songs here
];

// Handle Play/Pause
masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
    } else {
        audioElement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
    }
});

// Progress bar update
audioElement.addEventListener("timeupdate", () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myprogressbar.value = progress;
});

// Seek bar (optional but useful)
// myprogressbar.addEventListener("change", () => {
//     audioElement.currentTime = (myprogressbar.value * audioElement.duration) / 100;
// });
