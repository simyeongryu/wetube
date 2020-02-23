/** route가 사용할 함수를 정의한 뒤 export */
export const join = (req, res) =>
    res.render("join", {pageTitle: "Join"});
export const login = (req, res) =>
    res.render("login", {pageTitle: "LogIn"});
export const logout = (req, res) =>
    res.render("logout", {pageTitle: "LogOut"});
export const users = (req, res) =>
    res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) =>
    res.render("userDetail", {pageTitle: "UserDetail"});
export const editProfile = (req, res) =>
    res.render("editProfile", {pageTitle: "EditProfile"});
export const changePassword = (req, res) =>
    res.render("changePassword", {pageTitle: "ChangePassword"});