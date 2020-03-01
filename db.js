import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// 데이터베이스가 저장된 경로
// 몽구스는 configuration을 보낼 수 있다. 
// 몽고디비를 사용할 때 기본 설정.
mongoose.connect(
    process.env.MONGO_URL, 
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
); 

const db = mongoose.connection; // 몽고디비와의 연결을 담는 변수

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen) // 한 번만 실행된다. 
db.on("error", handleError) // 한 번만 실행된다. 