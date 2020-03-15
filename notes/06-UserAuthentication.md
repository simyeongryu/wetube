# #6.0 Introduction to PassportJS


## passportJS

> 참고: http://www.passportjs.org/

인증 기능.

미들웨어. 사용자 인증을 구현한다.

브라우저에서 쿠키를 인식한다.

> $ npm install 

### cookie

브라우저에 저장할 수 있는 어떤 것들. 요청에 대해 백엔드로 넘어갈 정보가 담겨 있다. 

쿠키 생성, 브라우저에 쿠키 저장, 유저에게 준다.

`req.user`가 현재 사용자.

### passport-local-mongoose

기본적인 사용자 인증에 필요한 것들을 미리 다 만들어준다.

# #6.1 Local Authentication with Passport part One

`User.js` 생성 및 작성

mongoDB를 쓸 땐 이걸 쓰자.

> $ npm install passport-local-mongoose

passport-local-mongoose 는 설정 객체가 필요하다. 

> 참고: https://github.com/saintedlama/passport-local-mongoose


> $ npm install passport
> $ npm install passport-local

passport 설치. 

`local`은 username과 password를 쓰는 사용자 인증 방식(strategy)다. facebook, github 등이 있다.

### User.createStrategy()

strategy를 설정하는 passport-local-mongoose의 지름길.

passport의 고유 기능은 있으나 길다. passport docs 확인

# #6.2 Local Authentication with Passport part Two

serialization - 어떤 정보를 쿠키에게 주느냐. 브라우져(클라이언트)에 있는 사용자에 대해 어떤 정보를 가질 수 있느냐. 쿠키의 정보는 자동으로 백엔드로 넘어간다. 백엔드는 그 정보를 보고 사용자를 식별한다. 쿠키는 작아야 하고 민감한 정보는 넣으면 안 된다. 예) 아이디만 넣어라.

deserializeUser - 그 쿠키의 정보를 어떻게 사용자로 전환할까?

쿠키에 아이디를 담고, 그걸로 사용자 식별

# #6.3 Loggin the User In

가입 즉시 로그인하기.

> 참고: http://www.passportjs.org/docs/authenticate/

passport는 쿠키 값을 저장하고 시리얼라이즈, 디시리얼라이즈도 해주고, request에 user 정보가 담긴 `user`라는 객체 또한 올려준다(req.user)

### express-session

session을 관리하기 위한 것.

> npm install express-session

secret : required 옵션. 쿠키에 있는 id를 암호화. 아무 문자열이나 넣어줘도 된다.

resave: 드으..

session 의 옵션으로 쿠키 지속 시간 등을 수정할 수 있다.

> 참고: randomkeygen.com

# #6.4 Sessions on Express

익스프레스 세션을 이용해서 쿠키를 이용한다. 패스포트를 이용해 세션을 이용한다 -> 그 안의 쿠키를 디시리얼라이즈를 한다. 

# #6.5 MongoStore and Middlewares

몽고디비를 이용해서 세션을 저장한다.

> npm i connect-mongo

쿠키스토어와 mongoDB를 연결시킨다.

이 연결을 해야 서버가 재시작되어도 세션이 유지된다.

이미 로그인된 사람은 Join으로 못들어가게 한다든지 등의 처리가 필요하다.

# #6.6 Github Log In part One

패스포트-github.

```
$ npm install passport-github
```

전반적인 사용법은 passport 도큐먼트에 나와있다.

깃헙에서 어플리케이션을 생성해야 한다.

https://github.com/settings/applications/new

로 필요한 정보 기입.

passport.js에 깃헙 스트레터지 입력.

어플리케이션 등록 후 나오는 클라이언트 ID와 SECRET은 절대 남에게 알려주지 말자. env에 넣어둔다.

깃헙 갔다가 돌아오면서 실행되는 함수도 필요. 유저컨트롤러 githublogincallback

# #6.7 Github Log In part Two

route 만들기. GITHUB. GITHUB_CALLBACK

라우터, 컨트롤러 처리. 

깃헙 로그인으로 인증 -> 인증 완료 -> callbackURL 으로 이동하는 처리가 필요하다.

passport 공식문서 startey-github 페이지 대로 작성한 후 view도 손본다 (sociallogin)

require verify callback??

로그아웃??

```
req.logout();
```

깃헙 인증 url로 보내 -> 깃헙에서 승인 -> 콜백 url로 callback 함수와 함께 보내. -> 내가 오키오키 해줘야 함.

# #6.8 Github Log In part Three

아이디 이메일 이름 아바타만 신경쓴다.

함수에서 사용하지 않는 파라미터는 '_'로 바꿔줘도 된다. 그냥 지우면 파라미터 순서가 바뀌니까 절대 그냥 지우지 말자

예
```js
// 아래 함수에서 accessToken, refreshToken을 사용하지 않는다고 가정하면
export const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => { 블라블라}

// 이렇게 바꿀 수 있다.
export const githubLoginCallback = async (_, __, profile, cb) => { 블라블라}
```

# #6.9 Recap and User Profile

깃헙

깃헙 웹사이트로 이동 -> 깃헙은 우리한테 사용자 정보를 줌 callback url로 이동
-> 우리는 githubLoginCallback 함수 실행
-> cd(error, user)를 리턴 
-> error가 있으면 그냥 끝
-> user가 있으면 쿠키를 만들고, 쿠키를 저장하고 쿠키를 보낸다 세션.

