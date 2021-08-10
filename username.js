const nameForm = document.getElementById("name_form"),
  nameInput = nameForm.querySelector("input"),
  greeting = document.querySelector(".greeting");

const HIDDEN_CN = "hidden";
const USERNAME_KEY = "username";

function onNameSubmit(e) {
  e.preventDefault();
  nameForm.classList.add(HIDDEN_CN);
  //   서밋이 들어오면 네임Form을 숨겨줌

  const userName = nameInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  //   USERNAME_KEY라고 저정된 곳에 userName을 저장해줌
  showGreeting(userName);
}

function showGreeting(username) {
  greeting.innerText = `Hi! ${username}`;
  greeting.classList.remove(HIDDEN_CN);
}

// 저장된 유저네임 받아오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
  // 만약유저네임이 없으면
  nameForm.classList.remove(HIDDEN_CN);
  //   그걸 받아오기위한 폼이 생김(기본 hidden으로 해주고)

  //   폼에 서밋이 들어오면 함수로 이동
  nameForm.addEventListener("submit", onNameSubmit);
  // form에 이벤트를 막으려면 폼에 서밋으로 해야해
} else {
  // 유저네임이 있으면
  showGreeting(savedUsername);
}
