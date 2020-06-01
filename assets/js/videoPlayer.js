import getBlobDuration from "get-blob-duration";

// DOM
const videoContainer = document.getElementById("videoPlayer");
const videoPlayer = document.querySelector("#videoPlayer video");
const playButton = document.querySelector("#playButton");
const volumeButton = document.querySelector("#volumeButton");
const volumeRange = document.querySelector("#volumeRange");
const fullScreenButton = document.querySelector("#fullScreenButton");
const currentTime = document.querySelector("#currentTime");
const totalTime = document.querySelector("#totalTime");

// 조회수 증가
const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  // 원한다면 await 등의 비동기 처리가 가능하나 여기선 별로 할 필요가 없다.
  // get이 기본값.
  fetch(`/api/${videoId}/view`, {
    method: "POST"
  });
};

function handleVolumeClick() {
  if (videoPlayer.muted) {
    // 음소거 상태면?
    videoPlayer.muted = false;
    volumeRange.value = videoPlayer.volume; // 현재 볼륨 상태로 볼륨 단추 이동
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else {
    videoPlayer.muted = true;
    volumeRange.value = 0; // 볼륨 단추 0으로
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
};

// 현재 영상의 시간
function getCurrentTime() {
  // 현재 시간이 전체 시간에 도달하자마자 재생이 종료되는 것처럼 보이기 위해
  // floor를 활용해서 재생 시간의 소수점을 버리고 출력한다.
  const currentTimeFloor = Math.floor(videoPlayer.currentTime);
  currentTime.innerHTML = formatDate(currentTimeFloor); // 영상의 현재 시간을 얻는 프로퍼티
}

// 영상의 전체 시간
async function setTotalTime() {
  //
  const blob = await fetch(videoPlayer.src).then(response => response.blob());
  const duration = await getBlobDuration(blob);
  console.log(duration);
  totalTime.innerHTML = formatDate(duration); // 영상의 총 길이를 double 타입으로 반환.
  // 현재 영상의 시간을 1초마다 얻는다.
  setInterval(getCurrentTime, 1000);
}

function handleEnded() {
  registerView(); // 동영상이 끝나면 조회수 증가
  videoPlayer.currentTime = 0; // 현재 재생시간을 0으로 세팅
  playButton.innerHTML = '<i class="fas fa-play"></i>'; // 버튼 모양 변경
}

function handleRange(e) {
  const {
    target: { value }
  } = e;
  // video HTMLElement의 실제 볼륨값에 range의 value 할당
  videoPlayer.volume = value;
  // 볼륨 크기에 따라 아이콘 모양 변경
  if (value > 0.7) {
    volumeButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (value > 0.4) {
    volumeButton.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else if (value > 0) {
    volumeButton.innerHTML = '<i class="fas fa-volume-off"></i>';
  } else {
    volumeButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

// videoContainer DOM이 있을 때만 addEventListener 사용
function init() {
  videoPlayer.volume = 0.5; // 비디오 볼륨 초기화
  playButton.addEventListener("click", handlePlayClick);
  volumeButton.addEventListener("click", handleVolumeClick);
  fullScreenButton.addEventListener("click", goFullScreen);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  videoPlayer.addEventListener("ended", handleEnded); // 비디오가 끝나면
  volumeRange.addEventListener("input", handleRange);
}

if (videoContainer) {
  init();
}
