/** 자주 사용하는 URL */

// GLOBAL
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const USER_DETAIL = "/:id";
const ME = "/me";

// Videos
const VIDEOS = "/videos";
const UPLOAD_VIDEO = "/upload";
const VIDEO_DETAIL = "/:id"; // express는 이런 값을 변수로 인식한다 ':id'. 'id'는 그냥 문자열로 인식.
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

// Gihub
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";
// Naver
const NAVER = "/auth/naver";
const NAVER_CALLBACK = "/auth/naver/callback";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    uploadVideo: UPLOAD_VIDEO,
    videoDetail: (id) => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: (id) => {
        if (id) {
            return `/videos/${id}/edit`;
        } else {
            return EDIT_VIDEO;
        }
    },
    deleteVideo: (id) => {
        if (id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    },
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    naver: NAVER,
    naverCallback: NAVER_CALLBACK,
    me: ME
}

export default routes;