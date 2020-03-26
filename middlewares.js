import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

// s3 유저 관련 정보
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-northeast-2"
});

/**
// ======= multer uploads files to Project Directory =======
// dest 를 "uploads/videos/" 하면 프로젝트 폴더 안에 upload 디렉토리 생성
// "/uploads/videos/" 하면 내 컴퓨터 root 에 upload 디렉토리 생성
const multerVideo = multer({ dest: "uploads/videos/" }); // server에 있는 videos/ 디렉토리에 파일의 링크를 저장한다.
const multerAvatar = multer({ dest: "uploads/avatars/" });
/*/
// ======= multer uploads files to AWS S3 =======
const multerVideo = multer({
  storage: multerS3({
    s3, // s3 유저 관련 정보
    acl: "public-read", // access control list
    bucket: "simyeong-wetube/video" // 만들어둔 bucket에 video라는 디렉토리 생성
  })
});
const multerAvatar = multer({
  storage: multerS3({
    s3, // s3 유저 관련 정보
    acl: "public-read", // access control list
    bucket: "simyeong-wetube/avatar" // 만들어둔 bucket에 avatar라는 디렉토리 생성
  })
});
/**/

export const localsMiddlewares = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null; // passport가 요청에 올린 user object
  console.log(req.user);
  next(); // request 전달. 다음 함수 혹은 라우터로 전달
};

// 로그인하면 이용할 수 없도록 하는 함수.
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};
// 로그인해야 이용할 수 있도록 하는 함수.
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile"); // single은 한 개의 파일만 upload 한다. // 안에 들어간 것은 HTML name tag
export const uploadAvatar = multerAvatar.single("avatar"); // single은 한 개의 파일만 upload 한다. // 안에 들어간 것은 HTML name tag
