import passport from "passport";
import GithubStrategy from "passport-github";
import NaverStrategy from "passport-naver";
import User from "./models/User";
import { githubLoginCallback, naverLoginCallback } from "./controllers/userController";
import routes from "./routes";

// passport이 사용할 strategy 설정
passport.use(User.createStrategy());

// github strategy
passport.use(new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `http://localhost:4000${routes.githubCallback}`
}, githubLoginCallback));

// naver strategy
passport.use(new NaverStrategy({
  clientID: process.env.NAVER_ID,
  clientSecret: process.env.NAVER_SECRET,
  callbackURL: `http://localhost:4000${routes.naverCallback}`
}, naverLoginCallback));

// passport가 쿠키에 user id만 담도록 설정
passport.serializeUser(User.serializeUser()); // 쿠키에 user.id 담기
passport.deserializeUser(User.deserializeUser()); // user.id로 사용자 찾기
