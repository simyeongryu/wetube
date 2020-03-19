# #10.0 API Registering a View part One

조회수 등록. 

AJAX = Asynchronouse Javascript And XML

비동기 자바스크립트, XML 통신

자바스크립트는 웹사이트에서 동작한다.

렌더링? http status code?

일단 routes 생성

apiRouter 만들고 app.js에 use!

# #10.1 API Registering a View part Two

영상 끝자락에 가면 저절로 조회수 1 증가시키기.

프론트엔드에 axios 임폴트 request를 위한 모듈

```
$ npm install axios
```

```js
// 아래 구문으로 수동 request가 가능.
fetch("url")
```

조회수는 fetch로 ajax 구현

댓글은 axios로 ajax 구현

데이터베이스 내용을 변경해야 한다? post requeset로 보안

그럴 필요 없이 조회만 한다? get request


#### URL에서 ID 값 얻기
```js
// 현재 URL 값 얻기.
window.location.href
// http://localhost:4000/videos/5e70a89a8b8dea13fee75791

// .split() 이용
window.location.href.split("/videos/");

// 하면
["http://localhost:4000", "5e70a89a8b8dea13fee75791"]
// 리턴
```

영상이 끝날 때 개발자도구 network를 보면 view 가 생긴다.

# #10.2 API Adding a Comment part One

댓글

비디오 디테일에 폼과 리스트 작성

routes, router, controller 작성

특히 컨트롤러 videoDetail에서 populate("comments")

모델에서 몽고디비 ObjectId를 쓴다 하면 populate 쓰자.

# #10.3 API Adding a Comment part Two

ajax로 댓글 달기

axios는 status code를 바로 알려준다.

# #10.4 API Adding a Comment part Three

fake 댓글

데이터베이스에서는 확인할 수 없지만 axios의 상태코드를 확인해서 단다.

실시간처럼 보이게 하는것?

데이터베이스에 저장되는 것은 실시간으로 보여줄 수 없다. 따라서, 새로고침하면 사라지는 fake 댓글을 만들어 줘서 실시간처럼 보이게 해야 한다.

데이터 베이스에 저장된 것들이 최근 순으로 보여지게 하기 위해선?

1. view에서 reverse() 함수를 사용한다. - 배열을 역순
2. 저장할 때 push가 아니라 unshift를 사용한다.
3. 데이터 베이스 조회 단에서 시간 내림차순으로 조회한다.


#### tmi

API 는 views 없이 서버와 연결하는 것이다.