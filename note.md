# website? webapp?

웹사이트: 컨텐츠를 생산하는 것이 아니라 단순히 소비하는 곳. 인터랙티브한 요소가 없는 것. 예) 뉴스페이지 등.

웹 어플: 내가 뭔가 클릭하고, 움직이고. 예) 왓챠플레이. 넷플릭스.

슈퍼 인터랙티브? -> 리액트.
리액트 네이티브는 모바일 어플리케이션
정적이다? -> Vanila JS 훨씬 반응속도가 빠르다.

인터랙티브적인 요소가 어느정도 있는 웹사이트를 만들 것이다. 

웹사이트는 바닐라 JS. 어플리케이션은 리액트 등의 라이브러리.

# Node.js 이론

node.js 는 **브라우저 밖의 JS**다. JS를 이용해서 서버를 만들거나 컴퓨를 조작할 수 있다.

## 언제 사용해야 할까?

백엔드, 서버를 빌드할 때.

언제 다른 백엔드 언어, 프레임 워크가 아니라 node.js를 써야할까?

1. JS를 좋아해서 백이나 프론트 둘 다 JS로 하고 싶다.
2. node.js는 내가 하나하나 다 customize 해야 한다. 즉, 어느정도 갖춰진 프레임워크를 원한다면 장고나 스프링 등이 더 좋다. node는 완전히 아무것도 없이 시작한다. 즉 필요한 것들만 추가해서 사용할 수 있다. 
3. 많은 데이터를 다뤄야 할 때 좋다. 데이터를 다루는 성능이 좋다. data. 알림. 실시간 처리 등등. - 채팅. 알림. (CRUD에 좋다.)
4. 이미지를 압축하거나, 이미지에 filter를 적용하거나 등등은 좋지 않다. 즉 컴퓨터의 하드웨어에 접근하는 것은 별로 좋지 않다. 
5. 비디오 인코딩, 디코딩, 혹은 서버의 하드웨어를 사용하는 등의 것들은 어렵다. 
    - 정적인 웹사이트와 인터렉티브한 웹사이트?

## 누가 node.js 를 사용하는가

우버, 페이팔, 넷플릭스

- 백엔드를 만들 때 한 가지 언어로만 하지 않아도 된다.
- 업무에 따라서 적합한 언어를 사용하는 것이 좋다.

## 설치방법

LTS 버젼을 받는 것이 좋다.

macOS 유저
- brew로 설치한다.

## 2.0 What is server?

물리적인 서버 = 컴퓨터. 맥북.. 윈도우즈.. 인터넷에 연결된 컴퓨터.

소프트웨어적 서버 = 네트워크, 인터넷에 연결된 코드 덩어리

접속을 받아주는 무언가.

## Express Server

기본적으로 node.js 에서 js 파일을 실행시키는 방법?

터미널에서

> node index.js

## package.json scripts

npm 서버가 시작하자마자 실행됭 명령어를 추가하고 싶다면 해당 파일에 scripts 라는 키를 만들고 원하는 명령어 입력

# express 설치 

express 를 설치하자 -> npm을 이용 (npm.js 검색)

Node Package Manager

node.js를 사용하는 모든 사람들의 라이브러리를 저장. 공유 등.

node.js를 설치하면 자동으로 npm을 받게 된다.

npm이 정한 방법으로 프로젝트를 시작하자.

> npm init

package name: 내 웹사이트 이름
description
entry point??
test command??
gir repo??
keywords??
author : 작성자

--> package.json 생성

npm 을 실행할 때는 package.json이 있는 프로젝트 폴더 내에서 실행해야 한다. 그래야 정보를 읽는다. 아니면 새로 만들어 버린다.

> npm install express

협업할 때 모든 모듈 파일들을 주고받을 필요 없다. 

package.json만 있으면 `npm install` 만으로도

package.json의 dependencies 를 읽어서 필요한 라이브러리들이 자동으로 설치된다.

## GET, POST

GET request는 정보를 전달할 수 없다? 예) 브라우저 접속
GET request는 정보를 전달할 수 있다 예) 로그인, 댓글

> $ ctrl+c = 서버끄기?

일반적으로 request에 대한 response는 HTML 이다.

## Babel

최신의 자바스크립트를 예전의 자바스크립트로 변환해준다. 몇몇 브라우저는 최신의 JS(ES6+)를 지원하지 않기 때문에, 코드 작성의 편의를 위해 ES6+로 작성하고 예전 자바스크립트 문법으로 컴파일해주는 바벨을 이용하는 것.

사용할 수 있는 방법은 여러가지가 있지만(Babel loader) 여기선 `Babel node`를 사용한다.

> $ npm install @babel/node

Babel은 stage가 있다. 

예) stage3 - 브라우저가 절반정도 이해할 수 있는 JS 코드// stage0 - 완전 실험적인 코드

프리셋이 많다. -> 여기서 사용할 건 `-env` 가장 최신이면서 너무 실험적이지 않음. 쓰고 싶은대로 JS 코드를 써도 되지만 그렇다고 너무 실험적인 수준의 코드가 나오진 않는다. 문법변환을 위한 세부조정이 필요 없다.

> https://babeljs.io/docs/en/babel-preset-env
> $ npm install --save-dev @babel/preset-env

`.babelrc` 파일 생성해서 우리가 원하는 모든 설정을 박는다. node와 JS와 관련된 것. preset을 설정하는 곳. 아래 내용 추가.
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}
```
package.json 에 node index.js 를 babel-node index.js 로 바꾸면

첫 에러로 @babel/core를 찾지 못한다고 뜬다.

> $ npm install @bablel/core

#### nodemon

서버를 자동으로 새로고침

package.json의 dependencies 는 프로젝트가 실행되려면 필요한 패키지.

근데 프로젝트에 필요하진 않지만 개발자를 편하게 만들어주는 패키지를 설치하는 방법은?

> $ npm install nodemon -D

이렇게 하면 dependencies에 포함되지 않음

`devDependencies`에 포함된다.

package.json script 부분에 아래 구문을 삽입한다.

> nodemon --exec babel-node index.js

실행하고, index.js 를 저장할 때마다 서버가 재실행되는 것을 확인할 수 있다.

> nodemon --exec babel-node index.js --delay 2

babel이 코드를 변환하는 시간(2초) 기다리고 서버 재시작.

## middleware

express의 중요한 내용.

처리가 끝날 때까지 연결되어 있다? `처음 요청부터 마지막 응답까지 그 사이에 존재하는 무언가.`

express의 모든함수는 middleware가 될 수 있다.

그냥 함수인데 라우터 처리 중간에 들어가면 middleware

### 미들웨어로 라우터 접근 막기.
```js
// 라우트에 도달하기 전에 미들웨어가 res.send() 하면 연결이 끊긴다. , next() 가 아니라.
const stopConnection = (req, res, next) => {
    res.send("stop!");
    // res.redirect(위치); 로 특정 라우터로 강제 이동시킬 수도 있다.
}
```

## morgan?

> https://github.com/expressjs/morgan

middleware 

log 에 도움을 줌

> npm install morgan


## helmet 

> https://github.com/helmetjs/helmet
보안

> npm install helmet

## middleware: cookie-parser, body-parser 

> https://github.com/expressjs/body-parser
> https://github.com/expressjs/cookie-parser

누군가 form을 채워서 보낸다면 서버에 의해 받아져야 한다. 특정한 형태로. 예: 아이디 비번 등
body-parser = body 로부터 정보를 얻는다.
cookie-parser = cookie에 유저 정보를 저장. session을 다루기 위해.

JSON, from 등 request 하는 정보의 종류의 따라 옵션을 설정해야 한다.



```
/** 라우트 */
// require는 괄호 안의 것을 찾아서 가져온다.
// 'express'를 현재 폴더 내에서 찾고, 없으면 node_modules 에서 찾는다.
// require나 import로 작은 블럭들을 쌓아간다.
// 아래 코드는 express를 import했다고 생각하자.
// const express = require('express'); // 아래의 것과 같다.
import express from "express";
```

```
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {userRouter} from "./router";

const app = express(); // express를 실행해서 app에 담는다.

// request object: 누군가 페이지에 접속을 요청, 혹은 정보를 전달하면 그걸 이 obj로 얻는다.
// response object: 
// function handleHome(req, res) {
//     // console.log(req);
//     res.send('Hello from Home');
// }
/** arrow function */
// const handleProfile = (req, res) => res.send('You are on my profile');

// express에서 route 같이 connection을 다루는 모든 것들은 req, res, next를 갖고 있다. next는 일종의 권한키로, 어떤 요청에 대해 어떤 응답을 할지 말지 결정한다.
// 마지막 함수(응답)에는 대개 필요 없다.
// const betweenHome = (req, res, next) => {
//     console.log("middleware");
//     next();
// }
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); // form에서 온 데이터 읽기
app.use(bodyParser.json()); // JSON 읽기
// app.use(betweenHome); // 이렇게 하면 이 라인 아래의 route 들 모두에게 middleware로 적용
/* 옵션 종류(args)에 따라 표시되는 log의 구체성이 달라진다. */ 
app.use(morgan("dev"));

/** GET, POST */
// 누군가 "/"로 접근한다면, handleHome 함수 실행
// 요청이 "/"로 온다 -> betweenHome 실행(middleware) -> handleHome 실행.(마지막 응답)
// app.get("/", betweenHome ,handleHome); // middleware 를 이런 식으로 요청과 응답 사이에 넣어도 되지만, 이렇게 하면 해당 라우트에만 적용이 된다. 
// app.get("/", stopConnection, handleHome); // 라우트에 도달하기 전에 미들웨어가 response 하면 연결이 끊긴다.
// "/profile" 로 접근하면 handleProfile 실행
app.use("/user", userRouter); // use? 누군가 /user로 접속하면 userRouter 객체를 사용.

export default app;
```

## Express core : Routing

모듈 : 다른 파일에서 객체를 불러다 쓸 수 있다. import. require.

> export default app;
>> import app from "./app";
위와 같이 설정한 파일을 import 하면 해당 파일의 app 객체를 받을 수 있다.

> export const uesrRouter = express.Router();
>> 해당 변수만 export 이때 import 방식은 아래와 같다.
>>> import {userRouter} from "./routers/userRouter";

## MVC

Model : data 데이터 .데이터베이스
View : how does the data look 데이터를 보여주는 것 .템플레이트
Control : function that looks for the data 데이터를 찾는 함수
->> 일종의 구조. structure. 

URL과 함수를 분리 데이터의 모습에 맞춰서. 

controller : /** route가 사용할 함수를 정의한 뒤 export */

### 애로우 펑션 암시적 리턴

```javascript
function arrow() {
  return "arrow";
}

// 와

const arrow = () => "arrow"; 

// 는 같다.
```

## Pug - view engine

> $ npm install pug

https://expressjs.com/ko/4x/api.html#app.set 참조.

```js
// 어플리케이션을 설정하는 함수. -> "view engine"이라는 설정의 값을 "pug"로 바꾸겠다.
// view engine의 기본값은 undefined
app.set("view engine", "pug");

// pug와 express에는 view 파일들의 위치에 관한 기본 설정들이 있다.
// html 파일을 저장해야 하는 폴더의 기본값은 '프로젝트작업디렉토리/views'
// 그걸 바꿔주려면 application의 화면이 담긴 디렉토리나 디렉토리의 배열을 담으면 된다.
// views라는 폴더 만들고. home.pug 만들기
app.set("views", )
```

- pug : 템플릿 언어. express의 view engine. html파일들이 더 멋져 보이게 해준다.

```html
<p>Hello</p>
```
를 pug 파일에선
```pug
p Hello
```
라고 쓴다. pug가 해당 코드를 일반적은 html 코드로 변환시킨다.

#### res.render(템플릿파일이름)

html 코드 response 하기

해당 이름을 갖고 있고 확장자가 pug 인 템플릿 파일을 views 폴더에서 찾는다.

`block (name)` 을 이용해서 다른 파일들의 내용을 이용한다.

- pug 는 들여쓰기를 사용한다. 스페이스4칸. 파이썬과 비슷.
- 여기서는 views - layouts - main.pug에 기본 레이아웃을 짠다. 해당 폴더의 main 태그 안에 home 화면 등의 코드가 들어간다.
- main tag 안에 block을 집어 넣고 그 block의 name을 content라고 한다.
- extends 파일경로.
    - 파일경로의 코드를 사용하고(복붙), 거기에 현재 파일의 코드를 더하겠다.
- 파이썬과 같은 방식으로 html을 쓴다고 생각하자.

## partials

페이지의 일부분. portions of pages

조직적인 목적으로 만들어진다?

header.pug와 footer.pug를 만들자.

pug 는 html 코드도 인식한다.

아래 두 코드는 같은 것.
```pug
<i class="fab fa-youtube"></i>
i.fab.fa-youtube
```

원하는 부분에 `include 경로` 하면 해당 파일을 사용한다.

pug에서 js를 사용하는 방법 = `#{}` 사용.

div 태그는 클래스 등을 사용할 땐 생략이 가능하다.

```pug
div.classname

.classname
```

One Single Source of Truth(한 곳에서만 정보를 보관하고 이 곳의 정보가 바뀌면 관련된 모든 곳들의 정보가 변하는 것.)



### 템플릿에 정보 추가하기.

컨트롤러 -> 템플릿.

개별적으로, 전체적으로도 가능. 

헤더가 routes.js 에 접근하도록.

https://expressjs.com/ko/4x/api.html#res.locals
- local variable 을 global variable로 바꿔주자.
    - `res.locals` 를 이용한다. 이 안에 있는 것들은 템플릿의 변수로 이용된다. 
- 미들웨어 위에 있는 라우터들은 해당 미들웨어를 사용할 수 없다.
- locals 에 있는 변수들은 템플릿과 views에서 전역적으로 사용이 가능하다. 템플릿들을 수정할 필요 없이, 해당 변수만 수정하면 다 적용이 된다.

> 항상 알파벳 순으로 import하는 것이 좋은 습관이다.

- 개별적으로 변수 추가하기.
`res.render()` 함수의 첫번째 인자는 템플릿 파일의 이름. 두번째 인자는 그 템플릿에서 사용될 객체.

```js
// home이라는 이름의 템플릿 파일과 그 템플릿에서 사용될 객체. 객체에 pageTitle이라는 key가 있다.
res.render("home", { pageTitle: "HOME"});
```

### console.log(req.query);

form 태그의 get method 로 정보를 보내면 파라미터의 이름은 name 태그가 되고, 입력값은 req.query라는 객체에 담긴다. 

`req.query.name` 을 하면 해당 파라미터의 값을 구할 수 있다.

> url?name=

`&`을 이용해 파라미터를 추가할 수 있다.

```js
const searchingBy = req.query.term;  // ES6+ 이전 방식

const { 
    query: { term: searchingBy }
} = req;
```

컨트롤러가 쿼리에 접근하려면 method가 get이어야 한다. url에 접근해야 하기 때문.

## |Continue with Github
pug 파일에서 text만 쓰려고 한다면 텍스트 앞에 `|` 파이프라인을 붙여준다.

두 번 이상 사용하는 부분이 있다면 모듈화 하자.

## /:id

라우터에서 경로값이 변수(:id)면 그 경로값이 밑에 있어야 한다. 

변수가 아닌 경로들을 위로 올려서 먼저 인식 시키고 변수 경로들을 아래로 깔자. 

변수인 경로가 위에 있으면 그아래 고정값 경로를 변수로 인식해서 잘못된 경로로 간다.

## video file 샘플

html video mdn 서치 -> 비디오 데모 파일 얻을 수 있다.

## res.render("home", {pageTitle: "Home", videos});
```js
res.render("home", {pageTitle: "Home", videos:videos});

// 과

res.render("home", {pageTitle: "Home", videos});
// 는 같다.
```

키와 밸류의 이름이 같으면 하나만 써도 되는 듯?

## Iteration in pug
```pug
each item in array
  h1= array.property
```

item 에는 어떤 변수가 들어가도 상관 없다.

array는 우리가 반복할 배열 등.

반복이 수행되면서 array의 요소가 item에 하나씩 들어간다.

## mixin 

html 코드 재활용하기 ㅜ위해 사용한다.

각각 다른 정보를 가지지만 같은 구조를 지니는 데이터를 표시하기 위한 코드를 캡슐화.

다른 정보, 같은 구조의 데이터를 다루기 위한 기법

## html video tag

`autoplay=true` = 자동재생 속성

`controls=true` = 컨트롤러 속성

```
video.videoBlock__thumbnail(src=video.videoFile, controls=true, autoplay=true)
```

## app.post(경로, 미들웨어)

경로로 post request가 오면 미들웨어 실행

`req.body` -> consol.log 하면 어떤 요청이 왔는지 볼 수 있음

**이건 bodyparser가 있어야 가능하다.**
```
{
  name: '1234',
  email: 'rsm0503@gmail.com',
  password: '1234',
  password2: '1234'
}
```

## status code

웹 브라우저가 이해할 수 있는 상태 코드

200 : 정상
400 : 잘못된 request
404 : 잘못된 링크
500 : 백엔드 에러

res.status(400); // 400 상태코드 전달

이걸 res.render 하면 상태 잘못된 상태코드를 화면에 표시한다. 

render는 화면을 표시하는 것.

## :id 변경하기

express 는 이해하지만 브라우저는 이해하지 못한다.

:id 값에 url을 집어넣어야 한다.

## HTML input tag required

required=true

로 설정하면 필수 조건이 되어 입력하지 않으면 안된다.

## router 의 역할

A router is in charge of mapping URLS with Controller Functions

## MongoDB

NoSQL. 규칙이 적고 유연하다.

모든 게 크고 실험적이다. (규약이 적다.)

Relationship(?)이 적은 프로젝트에 적합.

www.mongodb.com 으로 이동

download center에서 

mongoDB community server를 받는다. (enterprise 말고)

db와 관련된 것을 하고, 영상을 보고, 영상을 업로드할 수 있도록.

```
npm install dotenv
```

```
npm install mongoose
```

mongoose.js는 mongodb와 node.js 를 연결시키는 adaptor



dotenv는 숨기고 싶은 데이터를 숨기는 것.

mongod로 port 확인

init.js에 db를 import. 서버가 시작되자마자 연결해줘야 하니까.

## dotenv 구성

.env라는 파일을 생성(이름은 상관없음)

dotenv.config이라는 함수로 .env 파일 안의 정보를 불러올 수 있다.

그 정보들은 `process.env.(KEY)`로 저장된다.

.env 파일을 .gitignore에 반드시 추가해야 한다. 그렇지 않으면 이렇게 정보를 숨긴 게 헛수고가 된다.

## MODELS

몽고디비의 장점은 문서가 적다. 

우리의 문서들이 어떻게 생성되어야 할지 정해줘야 한다. 아무렇게나 생성되면 안되니까.

model: data

schema: shap. table 같은 거.

비디오를 db에 저장하지 않는다. bytes가 아니라 link를 저장한다.

amamzon에 비디오를 저장한다 db에는 비디오의 링크를 저장

now() 메소드는 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리 초를 Number 형으로 반환합니다. now()는 Date의 정적 메소드이기 때문에, 항상 Date.now() 처럼 사용하셔야 합니다.

schema 설정 때 함수에 ()을 붙이지 않는 이유는 해당 데이터가 저장될 때 실행시켜야 하기 때문이다. ()을 붙이면 서버가 시작되자마자 실행된다.

MogoDB adds IDs automatically.

> schema 옵션 참고: https://mongoosejs.com/ 이동, documentation - schema


relationship == 참조.

비디오와 댓글과의 연관. 어떤 것이 어떤 것과 연결되어 있는지 알아야 한다.

1. 첫 번째 방법.
    - Video와 Comment를 그대로 두고, Comment 스키마에 video라는 키 생성
    - type: mongoose.Schema.Types.ObjectId
    - ref: 참조하려는 model에서 만든 model 의 name
```js
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }
```
2. 두번째
   - Video에 comment 들의 id를 담을 배열 설정.
```js
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
```

즉, 부모 schema 에 자식 id 를 배열로 담을 것인지 자식 schema에 부모 id를 하나씩 넣어줄 것인지 정하면 된다.

## async await

나를 기다리는 무언가.

이 function의 어떤 부분은 반드시 기다려야 한다, 고 입력하는 것과 같다.

`await` : 이 과정이 끝날 때까지 잠시 기다려라

어떤 부분을 다 끝낸 다음에 작업을 시작할 수 있게 한다. 

성공적으로 끝나든 말든 그냥 끝날 때까지 기다린다.

error가 있어도 다음 과정을 진행한다.

## 그 error를 잡기 위해 try catch

error 가 thorw 하면 그 에러를 catch 할 수 있게 한다. 

try catch 구문은 프로그램이 멈추는 것을 막는다. 예외처리.

## upload

파일 자체를 저장하는 것이 아니라 그 파일의 link를 저장하는 것이다. 용량 문제.

Video가 아닌 file이 들어오지 않게 보호하는 것.

view 에서 `accept="video/*"` 사용

file 을 업로드하고 해당 링크를 반환하는 middleware가 필요하다.

## multer

file 을 업로드하고 해당 링크를 반환하는 middleware

```shell
$ npm install multer
```

**이후 upload form의 encType 에 `multipart/form-data` 추가**


middlewares 에 multer import 및 처리.

videorouter 에 postUpload 사이에 미들웨어 처리 삽입

## 팁
```js
const {
    body: {videoFile, title, description}
} = req;

// 이렇게 하면 body는 존재하지 않고 videoFile, title, description 이 변수들이 존재한다. (req.body.title)

// 이러면 존재한다. req.body
const { body } = req;
```
videoController upload post 함수에서

console.log(req.file);

하면 파일의 경로를 찾을 수 있다.

## 몽고디비 comment로 비디오 수정하기

mongod

mongo

show databases

use databaseName

show collections

db.collectionName.remove({}) - 삭제

uploads 를 위한 route 가 필요하다.

app.js 에

```js
app.use("/uploads", express.static("uploads"));
```

추가. 

express.static()은 directory에서 file을 보내주는 middleware

어떤 것이 uploads에 접근하면 컨트롤러나 view를 확인하지 않고 file 만 확인한다.

### # 3.7 파일관리법 설명.

/uploads에 접근하면 uploads라는 디렉토리로 들어간다.

user file들을 server에 저장하는 건 좋지 않다. 관리도 어렵고 서버 이전도 어렵다.

user나 video 처럼 생성된 content는 server와 분리되어야 한다.

static file은 JS나 CSS에서 사용하는 이미지 조각들이다.

.gitignore에 uploads 디렉토리 추가하기

## :id

controller에서 어떤 값을 갖고 있다는 것을 router 등에서 표현할 땐? `:`을 사용한다.

`:id`에서 `id`는 req.params 등에서 나타나는 key 이름과 같다.

```
{ id: '5e5de4ab0ea9240609fb5195' }
```

만약 `:potato`로 바꾸면 req.params 는

```
{ potato: '5e5de4ab0ea9240609fb5195' }
```

가 된다. url에서 무언가를 받아오는 방법이다.

## const video = await Video.findById();

parameter 는 id . id는 query로 전해진다. 

## get, post

get은 정보를 얻고 렌더링. post는 update 하고 어디론가 redirect

## try ~ catch 를 반복하지 않고도 어떤 id로 접근하건 다 예외처리를 할 수 있는 방법???

## Model.findOneAndUpdate