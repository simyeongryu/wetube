/** 라우트 */
// require는 괄호 안의 것을 찾아서 가져온다.
// 'express'를 현재 폴더 내에서 찾고, 없으면 node_modules 에서 찾는다.
// require나 import로 작은 블럭들을 쌓아간다.
// 아래 코드는 express를 import했다고 생각하자.
// const express = require('express'); // 아래의 것과 같다.
import express from "express";
// express를 실행해서 app에 담는다.
const app = express();

const PORT = 4000;

function handListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

// 4000번 포트를 listen
// 이것만 쓰면 서버에 보여줄 게 없다. 근데 서버는 있다.
app.listen(PORT, handListening); // 4000번 포트???

// request object: 누군가 페이지에 접속을 요청, 혹은 정보를 전달하면 그걸 이 obj로 얻는다.
// response object: 
function handleHome(req, res) {
    // console.log(req);
    res.send('Hello from Home');
}
/** arrow function */
const handleProfile = (req, res) => res.send('You are on my profile');

// express에서 route 같이 connection을 다루는 모든 것들은 req, res, next를 갖고 있다. next는 일종의 권한키로, 어떤 요청에 대해 어떤 응답을 할지 말지 결정한다.
// 마지막 함수(응답)에는 대개 필요 없다.
const betweenHome = (req, res, next) => {
    console.log("middleware");
    next();
}

app.use(betweenHome); // 이렇게 하면 이 라인 아래의 route 들 모두에게 middleware로 적용

/** GET, POST */
// 누군가 "/"로 접근한다면, handleHome 함수 실행
// 요청이 "/"로 온다 -> betweenHome 실행(middleware) -> handleHome 실행.(마지막 응답)
// app.get("/", betweenHome ,handleHome); // middleware 를 이런 식으로 요청과 응답 사이에 넣어도 되지만, 이렇게 하면 해당 라우트에만 적용이 된다. 
app.get("/", handleHome);
// "/profile" 로 접근하면 handleProfile 실행
app.get("/profile", handleProfile);