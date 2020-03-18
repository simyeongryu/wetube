# #9.0 Getting User Media

자바스크립트를 이용해서 녹화.

uploadVideo.pug 수정

videoRecorder.scss 수정

카메라로부터 stream을 얻는다. 

media devices navigator mdn 검색

> https://developer.mozilla.org/ko/docs/Web/API/MediaDevices

getUserMedia() -> Media에 접근하기 위한 권한을 물어봄

# #9.1 Recording Video part One

녹화해서 저장하기

MediaRecorder() 사용

> https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder

### event

```js
// 1
recordButton.addEventListener("click", getVideo); // 등록
recordButton.removeEventListener("click", getVideo); // 삭제
// 2
recordButton.onclick = getVideo; // 등록
recordButton.onclick = null; // 삭제
```
위 둘은 똑같이 작동한다. 차이점은, 1번은 click 이벤트에 대해 여러 개를 등록할 수 있고, 삭제 또한 지정한 것만 삭제된다. 2번은 등록 시 오직 하나의 동작만 등록할 수 있고, 삭제 시 모든 것이 삭제된다. 

어떤 객체가 `onblahblah`하는 이벤트를 갖고 있다면, 우리는 `blahblah`에 해당하는 이벤트를 만들 수 있다.

# #9.2 Recording video part Two

데이터는 레코딩이 다 끝나야 얻을 수 있다. (dataavailable)

MediaRecorder는 녹화 중에 데이터를 저장하는 것이 아니라 녹화가 끝나면 한 번에 데이터를 저장한다. 그 이후에 해당 데이터에 접근할 수 있다.

start(1000); 함수를 주면 밀리세컨드초마다 정보를 저장한다. 이건 통화를 녹음하거나, 부분을 저장해서 어딘가 보낸다는 등의 기능에 적합

blob은 01010101100011 같은 데이터.