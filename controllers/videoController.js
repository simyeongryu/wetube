/** route가 사용할 함수를 정의한 뒤 export */
export const home = (req, res) => res.send("Home");
export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("Videos");
export const uploadVideo = (req, res) => res.send("UploadVideo");
export const videoDetail = (req, res) => res.send("VideoDetail");
export const editVideo = (req, res) => res.send("EditVideo");
export const deleteVideo = (req, res) => res.send("DeleteVideo");