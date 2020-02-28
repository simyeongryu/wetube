import { videos } from "../db";
import routes from "../routes";

/** route가 사용할 함수를 정의한 뒤 export */
/** for global router */
export const home = (req, res) => 
    res.render("home", {pageTitle: "Home", videos});

export const search = (req, res) => {
    // const searchingFor = req.query.term;  ES6+ 이전 방식
    const { 
        query: { term: searchingFor }
    } = req;
    res.render("search", {pageTitle: "Search", searchingFor: searchingFor, videos});
}

/** for video router */
export const getUploadVideo = (req, res) => 
    res.render("uploadVideo", {pageTitle: "Upload Video"});
export const postUploadVideo = (req, res) => {
    const {
        body: {file, titile, description}
    } = req;
    
    // todo: upload and save video
    res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => 
    res.render("videoDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => 
    res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => 
    res.render("deleteVideo", {pageTitle: "Delete Video"});