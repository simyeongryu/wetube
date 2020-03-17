import passport from "passport";
import routes from "../routes";
import User from "../models/User";

/** route가 사용할 함수를 정의한 뒤 export */
export const getJoin = (req, res) => {
  console.log("get");
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) { // 비밀번호 확인 유효성 검사
    res.status(400); // 400 상태코드 전달
    res.render("join", { pageTitle: "Join" })
  } else {
    // Register User
    try {
      const user = await User({ // user 생성
        name,
        email
      });
      await User.register(user, password); // db에 등록
      next(); // 가입 이후 바로 로그인 시키기 위해 다음 미들웨어로 넘긴다. 
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "LogIn" });

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login, // 로그인에 실패했다면(username(email)이나 password가 틀려서) 로그인 화면 redirect
  successRedirect: routes.home // 로그인에 성공했다면 홈으로 redirect
});

// 깃헙 로그인을 실행하는 함수.
export const githubLogin = passport.authenticate("github");

// 깃헙 로그인 시 사용자가 있는지 인증하는 함수
export const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
  const { _json: { id, avatar_url: avatarUrl, name, email } } = profile;
  try {
    // 깃헙으로 로그인하려는 유저와 email이 같은 유저가 이미 있는지 확인
    const user = await User.findOne({ email });
    // 있다면 해당유저의 정보 업데이트
    if (user) {
      user.githubId = id;
      user.save();
      // cd(error, cookie에 넣을 값);
      return cb(null, user); // 여기서 값을 return 하므로 else 필요없음
    }
    // 없다면 신규 유저 생성
    const newUser = await User.create({
      name,
      email,
      avatarUrl,
      githubId: id
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error); // 에러가 발생하면 인증 후 보내지는 콜백함수에 에러를 집어넣는다.
  }
};

// 깃헙 로그인이 성공한 뒤 홈 화면으로 보내는 함수
export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

// 네이버 로그인을 실행하는 함수.
export const naverLogin = passport.authenticate("naver");

// 네이버 로그인 시 사용자가 있는지 인증하는 함수
export const naverLoginCallback = async (accessToken, refreshToken, profile, done) => {
  const { id, displayName: name, _json: { email, profile_image: avatarUrl } } = profile;
  try {
    const user = await User.findOne({ email });

    if (user) {
      user.naverId = id;
      user.save();
      return done(null, user)
    }

    const newUser = await User.create({
      name,
      email,
      avatarUrl,
      naverId: id
    });
    return done(null, newUser);
  } catch (e) {
    return done(e);
  }
}

// 네이버 로그인이 성공한 뒤 홈 화면으로 보내는 함수
export const postNaverLogin = (req, res) => {
  res.redirect(routes.home);
};

// 로그아웃
export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const me = (req, res) => {
  res.render("userDetail", { pageTitle: "UserDetail", user: req.user })
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const getEditProfile = (req, res) => res.render("editProfile", { pageTitle: "EditProfile" });

export const postEditProfile = async (req, res) => {
  const {
    body: { name, email },
    file
  } = req;
  try {
    // ID로 유저 찾고 수정.
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl // 아바타를 수정하지 않는다면 기존 아바타 유지
    });
    res.redirect(`/users${routes.me}`);
  } catch (e) {
    res.render("editProfile", { pageTitle: "EditProfile" });
  }
};

export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "ChangePassword" });

export const userDetail = async (req, res) => {
  const { params: { id } } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "UserDetail", user })
  } catch (e) {
    // 존재하지 않는 ID의 유저 탐색 시 홈으로 이동.
    res.redirect(routes.home)
  }
};

