import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required", // fileUrl 없이 업로드하면 이 메세지 출력
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    views: {
        type: Number,
        default: 0 // 기본값 설정
    },
    createdAt: {
        type: Date,
        default: Date.now // 현재 날짜를 반환하는 함수. document를 저장할 때마다 해당 function을 사용해서 현재 날짜를 반환한다.
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});
// model("name", "schema")
const model = mongoose.model("Video", VideoSchema);

export default model;