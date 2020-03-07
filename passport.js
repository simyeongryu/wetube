import passport from "passport";
import User from "./models/User";

// passport이 사용할 strategy 설정
passport.use(User.createStrategy());
// passport가 쿠키에 user id만 담도록 설정
passport.serializeUser(User.serializeUser()); // 쿠키에 user.id 담기
passport.deserializeUser(User.deserializeUser()); // user.id로 사용자 찾기