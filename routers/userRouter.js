import express from "express";
import routes from "../routes";
import { users, userDetail, changePassword, me, getEditProfile, postEditProfile } from "../controllers/userController"
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.me, me);

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
