import express from "express";
import routes from "../routes";
import {
    getUploadVideo, 
    postUploadVideo, 
    videoDetail,
    editVideo, 
    deleteVideo
} from "../controllers/videoController"

const videoRouter = express.Router();

videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, postUploadVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;