# #11.0 Introduction to AWS S3

버킷 = 폴더

버킷을 퍼블릭 엑세스로 설정한다.

이래야 우리가 업로드할 수 있다.

버킷을 사용하는 이유

우리 서버가 multar를 이용해 s3 버킷에 파일을 저장하도록 한다.

AWS -> IAM으로 접속

사용자 생성

프로그래밍 방식 엑세스

다음 -> 그룹 지정 혹은 생성 -> 기존 정책 직접 연결 -> s3 검색 -> AmazonS3FullAccess

(사용자가 S3의 모든걸 할 수 있게 한다.)

아래 아이디와 키값은 반드시 복사해놔야 한다. 생성할 때 한 번만 확인할 수 있다.

아래 두 가지 설치한다

Amazon Software Development Kit,

multer-s3
```
$ npm i aws-sdk
$ npm i multer-s3
```

# #11.1 Multer Uploads to AWS S3

middlewares 수정

import
```js
import multerS3 from "multer-s3";
import aws from "aws-sdk";
```

multer 재설정

```js
const multerVideo = multer({
  storage: multerS3({
    s3, // s3 유저 관련 정보
    acl: "public-read", // access control list
    bucket: "simyeong-wetube/video", // 만들어둔 bucket에 video라는 디렉토리 생성
    region: "ap-northeast-2"
  })
});
```

여기까지 하면 s3에 업로드는 된다.

이제 controller 수정

file.path로 들어오던 파일 url 값이 file.location으로 들어온다. 관련해서 수정해준다.

mixins 수정

videoPlayer.pug
```pug
video(src=`/${video.src}`)

// 을

video(src=video.src)
```

아바타도 동일한 작업을 한다.

내 서버에 절대 유저의 파일을 저장하지 말자.

그 파일이 바이러스면 내 서버는 망ㅎ나다.

많은 서버가 필요해지면 돈이 많이 들고 여러 서버를 구해야 한다. 그러면 같은 파일을 여러 개 복사해야 하는 불상사가 생길 수도 있다.

# #11.2 Blob Duration Bug

blob(file)의 길이를 알려주는 라이브러리

> https://github.com/evictor/get-blob-duration

```shell
$ npm i get-blob-duration
```

get-blob-duration 을 설치하고 나서
front 쪽 서버 구동 시 (npm run dev:assests 할 때),
```
Module not found: Error: Can't resolve '@babel/runtime/helpers/builtin/taggedTemplateLiteralLoose' in '/home/node/app/node_modules/yup/lib'
```
이런 에러 발생 시

```shell
$ npm add @babel/runtime
```

한 뒤 다시 npm run dev:assests.

`videoPlayer.js` 파일 수정(totalTime 부분)

AWS S3 permission -> CORS 설정 -> 설정 저장(placeholder로 떠있는 내용을 개발자 도구를 이용해 복사하여 붙여넣는다.)

누구나 어떤 파일이든 GET 할 수 있게 한다.

```
<!-- Sample policy -->
<CORSConfiguration>
	<CORSRule>
		<AllowedOrigin>*</AllowedOrigin>
		<AllowedMethod>GET</AllowedMethod>
		<MaxAgeSeconds>3000</MaxAgeSeconds>
		<AllowedHeader>Authorization</AllowedHeader>
	</CORSRule>
</CORSConfiguration>
```

#### 샘플 비디오 영상
> http://techslides.com/sample-webm-ogg-and-mp4-video-files-for-html5