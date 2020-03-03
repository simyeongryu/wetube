import routes from "../routes";
import Video from "../models/Video"; // model. element가 아니라.

/** route가 사용할 함수를 정의한 뒤 export */
/** for global router */
export const home = async (req, res) => {
    try {
        // await: 이 과정이 다 끝난 이후에 render 진행.
        // sort({_id: -1}) : 위 아래 순서를 바꾸겠다.아이디 기준으로 오름 차순에서 내림차순.
        const videos = await Video.find({}).sort({ _id: -1 });
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

export const search = async (req, res) => {
    // const searchingFor = req.query.term;  ES6+ 이전 방식
    const {
        query: { term: searchingFor }
    } = req;
    let videos = [];
    try {
        // 내가 검색한 단어를 포함하는 것들을 검색 // "i" 는 insensitive. 대소문자 구분하지 않음.
        videos = await Video.find({ 
            title: { $regex: searchingFor, $options: "i" } 
        })
    } catch (error) {
        console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingFor, videos });
};

/** for video router */
export const getUploadVideo = (req, res) =>
    res.render("uploadVideo", { pageTitle: "Upload Video" });

export const postUploadVideo = async (req, res) => {
    const {
        body: { title, description }, // form 으로부터 받아오는 것들
        file: { path } // multer를 통해 얻는 것들. req.file.path
    } = req;
    const newVideo = await Video.create({
        // Video model schema: req.body || req.file 변수
        fileUrl: path,
        title: title,
        description: description
    });
    // console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id)); // id는 자동 생성.
};

export const videoDetail = async (req, res) => {
    // console.log(req.params);
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async (req, res) => {
    // 수정 페이지 form에 기존 값을 미리 채워넣기 위한 작업
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;

    try {
        // _id가 id인 비디오의 title을 title로, descriptio을 description으로
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Video.findOneAndRemove({ _id: id });
    } catch (error) {
        console.log(error);
    }
    // try와 catch의 결과가 res.redirect(routes.home 으로 똑같다.)
    res.redirect(routes.home);
};
