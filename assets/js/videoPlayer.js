// DOM
const videoContainer = document.getElementById("videoPlayer");
const videoPlayer = document.querySelector("#videoPlayer video");
const playButton = document.querySelector("#playButton");
const volumeButton = document.querySelector("#volumeButton");
const fullScreenButton = document.querySelector("#fullScreenButton");
const currentTime = document.querySelector("#currentTime");
const totalTime = document.querySelector("#totalTime");

function handleVolumeClick() {
  if (videoPlayer.muted) { // 음소거 상태면?
    videoPlayer.muted = false;
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function exitFullScreen() {
  // 브라우저 호환성을 위한 분기
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  fullScreenButton.innerHTML = '<i class="fas fa-expand"></i>';
  fullScreenButton.removeEventListener("click", exitFullScreen);
  fullScreenButton.addEventListener("click", goFullScreen);
}

function goFullScreen() {
  // 브라우저 호환성을 위한 분기
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen(); // div를 DOM으로 해야 우리가 디자인한 버튼들만 보인다.
  } else if (videoContainer.mozRequestFullscreen) {
    videoContainer.mozRequestFullscreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }
  fullScreenButton.innerHTML = '<i class="fas fa-compress"></i>';
  // 전체화면인 상태이므로 해당 이벤트 리스너 제거 후 새로운 이벤트 리스너 등록
  fullScreenButton.removeEventListener("click", goFullScreen);
  fullScreenButton.addEventListener("click", exitFullScreen);
}

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play(); // 비디오를 실행하는 함수.
    playButton.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause(); // 비디오 일시정지.
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
}

// seconds를 파라미터로 하는 시간 계산기
const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10); // 10진법
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  totalSeconds = totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds;

  return `${hours}:${minutes}:${totalSeconds}`;
}

// 현재 영상의 시간
function getCurrentTime() {
  currentTime.innerHTML = formatDate(videoPlayer.currentTime); // 영상의 현재 시간을 얻는 프로퍼티
  if (videoPlayer.currentTime === videoPlayer.duration) {
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
}

// 영상의 전체 시간
function setTotalTime() {
  totalTime.innerHTML = formatDate(videoPlayer.duration); // 영상의 총 길이를 double 타입으로 반환.
  // 현재 영상의 시간을 1초마다 얻는다.
  setInterval(getCurrentTime, 1000);
}

// videoContainer DOM이 있을 때만 addEventListener 사용
function init() {
  playButton.addEventListener("click", handlePlayClick);
  volumeButton.addEventListener("click", handleVolumeClick);
  fullScreenButton.addEventListener("click", goFullScreen);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
}

if (videoContainer) {
  init();
}