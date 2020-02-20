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

최신의 자바스크립트를 예전의 자바스크립트로 변환해줌.

사용할 수 있는 방법은 여러가지가 있지만(Babel loader) 여기선 `Babel node`를 사용한다.

```shell
npm install @babel/node
```

Babel은 stage가 있다. 

예) stage3 - 브라우저가 절반정도 이해할 수 있는 JS 코드// stage0 - 완전 실험적인 코드

프리셋이 많다. -> 여기서 사용할 건 `-env` 가장 최신이면서 너무 실험적이지 않음. 쓰고 싶은대로 JS 코드를 써도 되지만 그렇다고 너무 실험적인 수준의 코드가 나오진 않는다. 문법변환을 위한 세부조정이 필요 없다.

> https://babeljs.io/docs/en/babel-preset-env
> npm install --save-dev @babel/preset-env

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

> npm install @bablel/core

#### nodemon

서버를 자동으로 새로고침

package.json의 dependencies 는 프로젝트가 실행되려면 필요한 패키지.

근데 프로젝트에 필요하진 않지만 개발자를 편하게 만들어주는 패키지를 설치하는 방법은?

> npm install nodemon -D

이렇게 하면 dependencies에 포함되지 않음

`devDependencies`에 포함된다.

package.json script 부분에

> nodemon --exec babel-node index.js

실행하고, index.js 를 저장할 때마다 서버가 재실행되는 것을 확인할 수 있다.

> nodemon --exec babel-node index.js --delay 2

2초 기다리고 재시작. (babel이 코드 변환하는 시간.) ??? 뭔말

## middleware

express의 중요한 내용.

처리가 끝날 때까지 연결되어 있다? `처음 요청부터 마지막 응답까지 그 사이에 존재하는 무언가.`

express의 모든함수는 middleware가 될 수 있다.



