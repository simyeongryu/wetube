import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import passport from "passport"; // req.user 객체를 사용하기 위해 localsMiddlewares 보다 먼저 import
import session from "express-session";
import MongoStore from "connect-mongo";
import {localsMiddlewares} from "./middlewares";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

import "./passport";

const app = express(); // express를 실행해서 app에 담는다.
const CookieStore = MongoStore(session);

/** middlewares */
app.use(helmet()); // 보안 관련된 helmet이 주로 가장 위에 있어야 한다.
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads")); // 누군가 /uploads에 접근하면 uploads 폴더로 가라
app.use("/static", express.static("static")); // 누군가 /static에 접근하면 static 폴더로 가라
app.use(cookieParser());
app.use(bodyParser.json()); // JSON 읽기
app.use(bodyParser.urlencoded({ extended: true })); // form에서 온 데이터 읽기
app.use(morgan("dev"));
app.use(
    session({
        secret: process.env.COOKIE_SECRET, // 암호화를 위한 문자열이므로 env로 숨긴다
        resave: true,
        saveUninitialized: false,
        store: new CookieStore({ mongooseConnection: mongoose.connection })
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddlewares);

/** routers */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;