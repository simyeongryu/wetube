/** 모던 자바스크립트를 사용할 수 없다. */
const path = require("path"); // == import path = from "path";
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");


const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); // __dirname은 현재 프로젝트 디렉토리 이름. 어디서든 접근할 수 있는 node.js 전역 변수. 
const OUTPUT_DIR = path.join(__dirname, "static"); // static이라는 폴더로 export.
// web pack의 output은 object여야 한다.
const config = {
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: { // 모듈을 발견하면
        // 이 룰을 따르라
        rules: [ 
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/, // 어떤 파일을 만나면 그게 scss 혹은 sass 파일인지 확인.
                use: ExtractCSS.extract([ // scss, sass면 해당 플러그인을 사용해라. // 내부에서 또 플러그인 사용. SCSS 파일을 CSS로 통역하기 위해
                    // 실제 실행의 역순으로 작성한다.
                    {
                        loader: "css-loader" // 3) 호환성이 부여된 CSS를 webpack이 받는다.
                    },
                    {
                        loader: "postcss-loader", // 2) 변환된 CSS에 호환성 부여.
                        options: {
                            plugins() {
                                return [autoprefixer({ browsers: "cover 99.5%" })]; // plugin으로 구성된 배열 // 시중에 나온 브라우저의 99.5% 커버하는 옵션
                            }
                        }
                    },
                    {
                        loader: "sass-loader" // 1) SCSS를 CSS로 변환
                    }
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [new ExtractCSS("styles.css")] // 여러 개의 플러그인을 넣을 것을 대비해서 배열로 준비
};

module.exports = config; // export default 와 같다.