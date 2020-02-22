import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express(); // express를 실행해서 app에 담는다.

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); // form에서 온 데이터 읽기
app.use(bodyParser.json()); // JSON 읽기
app.use(morgan("dev"));

/** routers */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;