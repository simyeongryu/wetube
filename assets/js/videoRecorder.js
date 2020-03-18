const recordContainer = document.querySelector("#recordContainer");
const videoPreview = document.querySelector("#videoPreview");
const recordButton = document.querySelector("#recordButton");

// 비디오 녹화를 위한 변수
let videoRecorder;

// 녹화한 비디오 데이터 저장
const handleVideoData = (e) => {
  const { data: videoFile } = e;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile); // URL 얻기
  link.download = "recorded.webm"; // 파일명 
  // document.body.appendChild(link); // 불필요
  link.click();
};

// 녹화 중단 및 비디오 데이터 얻기
const stopRecording = () => {
  videoRecorder.stop();
  recordButton.removeEventListener("click", stopRecording);
  recordButton.addEventListener("click", getVideo);
  recordButton.innerHTML = "Start Recording";
};

// 녹화하기
const startRecording = stream => {
  videoRecorder = new MediaRecorder(stream);
  videoRecorder.start(); // 녹화 실행. 파라미터에 시간을 주면 해당 시간마다 조금씩 데이터를 저장한다.
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordButton.addEventListener("click", stopRecording)
};

// 비디오 얻기
const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      // 어떤 카메라와 마이크를 사용할지는 브라우저 url 창 카메라 아이콘
      audio: true,
      video: { width: 1280, heigth: 720 } // 녹화 비디오 크기 조절 // true
    }); // 우리가 media에 접근할 수 있는지 여부를 알 때까지 기다린다.
    videoPreview.srcObject = stream; // 파일이 아니라 객체
    videoPreview.muted = true; // 녹음되는 소리를 듣지 못하게 한다.
    videoPreview.play();
    recordButton.innerHTML = "Stop Recording";
    startRecording(stream);
  } catch (e) {
    // 카메라 접근 권한이 없다면
    console.log(e);
    recordButton.innerHTML = "You Can't Record";
  } finally { // try 든 catch든 실행되면 그 이후 반드시 실행
    recordButton.removeEventListener("click", getVideo);
  }
};

function init() {
  recordButton.addEventListener("click", getVideo);
}

if (recordContainer) {
  init();
}