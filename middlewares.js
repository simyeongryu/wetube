import multer from "multer";
import routes from "./routes";
// dest 를 "uploads/videos/" 하면 프로젝트 폴더 안에 upload 디렉토리 생성
// "/uploads/videos/" 하면 내 컴퓨터 root 에 upload 디렉토리 생성
const multerVideo = multer({ dest: "uploads/videos/" }); // server에 있는 videos/ 디렉토리에 파일의 링크를 저장한다.

export const localsMiddlewares = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: false,
        id: 1
    }
    next(); // request 전달. 다음 함수 혹은 라우터로 전달
};

export const uploadVideo = multerVideo.single("videoFile"); // single은 한 개의 파일만 upload 한다. // 안에 들어간 것은 HTML name tag