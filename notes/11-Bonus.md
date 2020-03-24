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
$ npm i aws-skd
$ npm i multer-s3
```