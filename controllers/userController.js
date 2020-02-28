import routes from "../routes";

/** route가 사용할 함수를 정의한 뒤 export */
export const getJoin = (req, res) => {
    console.log("get");
    res.render("join", {pageTitle: "Join"});
}
export const postJoin = (req, res) => {
    const {
        body: {name, email, password, password2}
    } = req;

    if (password !== password2) {
        res.status(400); // 400 상태코드 전달
        res.render("join", {pageTitle: "Join"})
    } else {
        // To do : register User
        // To do : log user in 
        res.redirect(routes.home);
    }
    res.render("join", {pageTitle: "Join"});
}


export const getLogin = (req, res) =>{
    res.render("login", {pageTitle: "LogIn"})
};
export const postLogin = (req, res) =>{
    res.redirect(routes.home);
};



export const logout = (req, res) => {
    // To Do: Process Log Out
    res.redirect(routes.home);
};


export const users = (req, res) =>
    res.render("users", {pageTitle: "Users"});
export const editProfile = (req, res) =>
    res.render("editProfile", {pageTitle: "EditProfile"});
export const changePassword = (req, res) =>
    res.render("changePassword", {pageTitle: "ChangePassword"});
export const userDetail = (req, res) =>
    res.render("userDetail", {pageTitle: "UserDetail"});



