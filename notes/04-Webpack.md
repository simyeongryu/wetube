# #4.0 Introduction to Webpack

프론트엔드.

모듈 번들러

파일을 웹팩에 주면 그걸 호환이 되는 static ㅠ일로 전환한다.

모던 JS를 웹팩에 넣으면 매우 노멀한 JS로 만들어서 호환성을 높인다.

## 1) 셋업

### 설치 

> $ npm install webpack webpack-cli

`webpack`: 은 파일에서 webpack을 사용하기 위한 것

`webpack-cli`: 터미널에서 webpack-cli 사용하게 하는 것.

`webpack.config.js`: 해당 이름으로 파일 생성

`package.json` 으로 이동해서 `start` 명령어를 `dev:server`로 변경

`dev:assets` 명령어 추가

이제 서버 실행 시 각자 다른 콘솔에서 명령어 실행

> $ npm run dev:server
> $ npm run dev:assets

`$ npm run dev:assets` 이라고 하면 webpack을 불러오도록 셋업

웹팩은 자동으로 `webpack.config.js` 라는 파일을 찾는다. 따라서 해당 이름은 바꿔선 안된다. 바꾸고 싶다면 dev:assets에 "webpack --config blahblah" 해야 하지만 별로 안 중요.

웹팩은 exported configuration object를 찾는다.

## webpack.config.js

server 코드와는 연관시키면 안된다. 

100% client 코드다.

바벨 노드는 아직 쓸 수 없다.

웹팩 config에서는 모던 자바스크립트를 쓸 수 없다.

webpack이 갖고 있는 두 가지 키.

entry: 파일이 어디에서 왔나, output: 파일을 어디에 넣을까

프로젝트 폴더에 assets 폴더 만들고 셋업.

### path

node.js 에 내장된 절대경로 생성 모듈

`npm install --save-dev style-loader css-loader`

# #4.1 Styles with Webpack part One

.env 수동 설정

package.json -> scripts -> dev:assets: "WEBPACK_ENV=development webpack" (mode 설정 가능)

build:assets -> ""(코드를 서버에 올린다.)

## 웹팩 scss 이해시키기

웹팩은 기본적으로 아무것도 할 수 없다. 어떤 파일을 만났을 때 어떤 로더를 실행시킬지 정해줘야 한다.

어떤 파일을 만나면 scss 인지 확인

scss면 css로 변환, css 핸들링 방법 설정, css 텍스트 추출, css 파일 생성

`extract text webpack plugin` 설치

> 참고: https://github.com/webpack-contrib/extract-text-webpack-plugin

> npm install extract-text-we
bpack-plugin@next

`@2.3`등으로 특정 버젼을 설치할 수도 있다.

`@next`를 붙이면 가장 최신의 베타 버젼 설치

