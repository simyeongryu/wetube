/** route가 사용할 함수를 정의한 뒤 export */
export const home = (req, res) => res.render("home");
export const search = (req, res) => res.render("search");
export const videos = (req, res) => res.render("videos");
export const uploadVideo = (req, res) => res.render("uploadVideo");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");