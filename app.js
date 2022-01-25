const playBtn = document.querySelector("#play-btn");
const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");
const musicImage = document.querySelector("#music-image");
const muteVolume = document.querySelector("#volume");
const adjustVolume = document.querySelector("#adjust-volume");
const songDuration = document.querySelector("#song-duration");
const songNameH3 = document.querySelector(".song-name");
const singerNameH4 = document.querySelector(".singer-name");

let index = 0;

let musics = [
  {
    artist: "Geralt & Jaskier",
    songName: "Burn Butcher, burn",
    songSource: "music/burn.mp3",
    songImage: "images/photos/10.jpg",
  },
  {
    artist: "Imagine Dragons",
    songName: "Enemy",
    songSource: "music/enemy.mp3",
    songImage: "images/photos/10.jpg",
  },
  {
    artist: "Rag'n'Bone Man",
    songName: "Skin",
    songSource: "music/skin.mp3",
    songImage: "images/photos/10.jpg",
  },
];

var myAudio = new Audio(musics[index].songSource);
musicImage.src = musics[index].songImage;
songNameH3.innerHTML = musics[index].songName;
singerNameH4.innerHTML = musics[index].artist;

playBtn.addEventListener("click", function () {
  if (playBtn.className == "fas fa-play-circle") {
    myAudio.play();
    playBtn.className = "fas fa-pause-circle";
  } else {
    myAudio.pause();
    playBtn.className = "fas fa-play-circle";
  }
});

nextBtn.addEventListener("click", function () {
  try {
    if (index == 2) {
      index = -1;
    }
  } catch (error) {}

  myAudio.pause();
  playBtn.className = "fas fa-play-circle";
  index++;

  musicImage.src = musics[index].songImage;
  songNameH3.innerHTML = musics[index].songName;
  singerNameH4.innerHTML = musics[index].artist;
  myAudio = new Audio(musics[index].songSource);
});

previousBtn.addEventListener("click", function () {
  myAudio.pause();
  playBtn.className = "fas fa-play-circle";
  if (index == 0) {
    index = 2;
  } else if (index == 2) {
    index = 1;
  } else if (index == 1) {
    index = 0;
  }

  musicImage.src = musics[index].songImage;
  songNameH3.innerHTML = musics[index].songName;
  singerNameH4.innerHTML = musics[index].artist;
  myAudio = new Audio(musics[index].songSource);
});

let clicks = 0;

muteVolume.addEventListener("click", function () {
  clicks++;

  if (clicks % 2 == 0) {
    muteVolume.className = "fas fa-volume-up";
    setHighVolume(myAudio);
    adjustVolume.value = 1;
  } else {
    muteVolume.className = "fas fa-volume-mute";
    setLowVolume(myAudio);
    adjustVolume.value = 0;
  }
});

function setLowVolume(myAudio) {
  myAudio.volume = 0;
}

function setHighVolume(myAudio) {
  myAudio.volume = 1;
}

adjustVolume.addEventListener("click", function () {
  myAudio.volume = adjustVolume.value;
  if (adjustVolume.value == "0") {
    muteVolume.className = "fas fa-volume-mute";
  } else if (adjustVolume.value < 0.5) {
    muteVolume.className = "fas fa-volume-down";
  } else {
    muteVolume.className = "fas fa-volume-up";
  }
});
