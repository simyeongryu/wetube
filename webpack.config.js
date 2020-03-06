/** 모던 자바스크립트를 사용할 수 없다. */
const path = require("path"); // == import path = from "path";
const extractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); // __dirname은 현재 프로젝트 디렉토리 이름. 어디서든 접근할 수 있는 node.js 전역 변수. 
const OUTPUT_DIR = path.join(__dirname, "static"); // static이라는 폴더로 export.
// web pack의 output은 object여야 한다.
const config = {
    entry: ENTRY_FILE,
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/, // 어떤 파일을 만나면 그게 scss 혹은 sass 파일인지 확인.
                use: extractCSS.extract()
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].[format]"
    }
};

module.exports = config; // export default 와 같다.