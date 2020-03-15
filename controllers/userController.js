import passport from "passport";
import routes from "../routes";
import User from "../models/User";

/** route가 사용할 함수를 정의한 뒤 export */
export const getJoin = (req, res) => {
    console.log("get");
    res.render("join", {pageTitle: "Join"});
};

export const postJoin = async (req, res, next) => {
    const {
        body: {name, email, password, password2}
    } = req;

    if (password !== password2) { // 비밀번호 확인 유효성 검사
        res.status(400); // 400 상태코드 전달
        res.render("join", {pageTitle: "Join"})
    } else {
        // Register User
        try {
            const user = await User({ // user 생성
                name,
                email
            });
            await User.register(user, password); // db에 등록
            next(); // 가입 이후 바로 로그인 시키기 위해 다음 미들웨어로 넘긴다. 
        } catch(error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};

export const getLogin = (req, res) => res.render("login", {pageTitle: "LogIn"});

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login, // 로그인에 실패했다면(username(email)이나 password가 틀려서) 로그인 화면 redirect
    successRedirect: routes.home // 로그인에 성공했다면 홈으로 redirect
});

// 깃헙 로그인을 실행하는 함수.
export const githubLogin = () => {
    passport.authenticate("github")
};

// 깃헙 로그인을 마치고 돌아오는 함수
export const githubLoginCallback = (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken, refreshToken, profile, cb)
};

// 로그아웃
export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", {pageTitle: "Users"});

export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "EditProfile"});

export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "ChangePassword"});

export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "UserDetail"});
