# #8.0 Starting the Video Player

비디오플레이어를 CSS 등으로 만든다.

mixins에 비디오 플레이어를 위한 파일 생성

# #8.1 Play Pause Functionallity

assets/main.js
assets/videoPlayer.js


DOM 객체를 이용해 addEventListner 등을 사용할 때는 , 해당 DOM이 null이면 사용할 수 없다. 오류가 뜬다. -> if를 활용해서 그 객체가 존재할 때, 실행시키고자 하는 함수를 실행시키도록 방어 코드를 작성한다.

> video element mdn: https://developer.mozilla.org/ko/docs/Web/HTML/Element/Video

.paused -> 비디오가 일시정지인지 아닌지를 판단해서 boolean 리턴
.play() 비디오 재생
.pause() 비디오 일시정지

# #8.2 Mute Unmute


# #8.3 Enter Fullscreen Exit Fullscreen

풀스크린은 이벤트리스너를 바꾸는 형태로 구현한다.

requestFullScreen

> https://developer.mozilla.org/ko/docs/Web/API/Element/requestFullScreen

requestFullScreen()을 할 때 div를 DOM으로 해야 우리가 디자인한 버튼들만 보인다.

또 div로 하면 video의 width를 100%로 해줘야 비디오도 전체 화면이 된다.

# #8.4 Total Time and Current Time

get/set Time

HTMLMediaElement

mdn video duration

element.duration -> 초 단위의 미디어 길이를 double 값으로 리턴

currentTime

totalTime

시간을 비디오에 붙일 때, 비디오가 로드된 후에 duration을 해야 NaN이 뜨지 않는다. 

loadedmetadata 이벤트 사용

