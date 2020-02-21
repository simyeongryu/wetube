/** 라우트 */
// require는 괄호 안의 것을 찾아서 가져온다.
// 'express'를 현재 폴더 내에서 찾고, 없으면 node_modules 에서 찾는다.
// require나 import로 작은 블럭들을 쌓아간다.
// 아래 코드는 express를 import했다고 생각하자.
// const express = require('express'); // 아래의 것과 같다.
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import {userRouter} from "./router";

// express를 실행해서 app에 담는다.
const app = express();

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
app.get("/", handleHome);
// "/profile" 로 접근하면 handleProfile 실행
app.get("/profile", handleProfile);
app.use("/user", userRouter); // use? 누군가 /user로 접속하면 userRouter 전체를 사용한다. -> 

export default app;