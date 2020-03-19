import axios from "axios";

const addCommentForm = document.getElementById("addComment");
const commentsList = document.getElementById("commentsList");
const commentNumber = document.getElementById("commentNumber");

// 댓글 수 증가(실시간용)
const increaseNumber = () => {
  // commentNumber.innerHTML 값을 가져와서 거기에 1 증가
  // 기본 값이 string 이니까 int로 변환해서 연산
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

// 댓글 실시간처럼 보이게 하기
const addFakeComment = comment => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentsList.prepend(li); // 새로운 댓글을 위로 추가
  increaseNumber();
};

// 댓글 ajax
const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: { comment }
  });
  if (response.status === 200) {
    addFakeComment(comment);
  }
};

const handleSubmitComment = (e) => {
  e.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  if (comment !== "") { // 댓글이 공백이 아닐 때만 저장
    sendComment(comment);
  }
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmitComment)
}

if (addCommentForm) {
  init();
}