import express from "express";
import routes from "../routes";
import {
    getUploadVideo, 
    postUploadVideo, 
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo
} from "../controllers/videoController"
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.uploadVideo, getUploadVideo);
videoRouter.post(routes.uploadVideo, uploadVideo, postUploadVideo);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;