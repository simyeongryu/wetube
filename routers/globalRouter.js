import express from "express";
import routes from "../routes";
import passport from "passport";
import { home, search } from "../controllers/videoController";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout,
    githubLogin,
    postGithubLogin,
    facebookLogin,
    postFacebookLogin

} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();
// JOIN
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin); // 가입 이후 바로 로그인
// LOGIN 
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
// ETC
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, onlyPrivate, logout);
// GITHUB
globalRouter.get(routes.github, githubLogin);
globalRouter.get(routes.githubCallback, passport.authenticate("github", { failureRedirect: routes.login }), postGithubLogin);
// FACEBOOK
globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(routes.facebookCallback, passport.authenticate("facebook", { failureRedirect: routes.login }), postFacebookLogin);

export default globalRouter;
