# #7.0 User Profile

프로필 수정 시 아바타 사진이 변경 되지 않음.

# #7.2 ChangePassword

passportlocalmongoose

get post로 나눠서 하자

# #7.3 Adding Creator to Video

db.collection.remove({})  - 해당 콜렉션 내용 전체 삭제
```
$ db.videos.remove({})
```
db.collection.find({})  - 해당 콜렉션 내용 전체 조회
```
$ db.videos.find({})
```

비디오 업로드 시 작성자를 추가하자. Video 모델 파일과 postUploadVideo 확인

Comment 모델에도 creator 컬럼 추가

User는 자신이 작성한 댓글과 비디오를 갖는다.

작성자가 비디오를 만들 때 작성자의 유저 아이디를 저장할 필요가 있다. 

ID를 이용해서 값 찾기 .populate 메소드 사용

# #7.4 Protecting Video Routes

일단 프론트단에서 아무나 비디오 등을 수정할 수 없게 막았지만(버튼 삭제) 

url로 접근하는 것은 막지 못했다. 그걸 막는다. 

