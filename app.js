import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import {localsMiddlewares} from "./middlewares";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express(); // express를 실행해서 app에 담는다.

/** middlewares */
app.use(helmet()); // 보안 관련된 helmet이 주로 가장 위에 있어야 한다.
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json()); // JSON 읽기
app.use(bodyParser.urlencoded({ extended: true })); // form에서 온 데이터 읽기
app.use(morgan("dev"));

app.use(localsMiddlewares);

/** routers */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;