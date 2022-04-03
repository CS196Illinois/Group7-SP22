function homeBtnClick() {
  window.location.href = "../html/home.html";
}

function submitBtnClick() {
  /* add "add websites to storage" code here */
}

var name = document.getElementById("title-input");
var link = document.getElementById("link-input");
var time = document.getElementById("time-input");

var names = [];
var links = [];
var times = [];

var homeBtn = document.getElementById("home");
var submitBtn = document.getElementById("add-time");

homeBtn.addEventListener("click", homeBtnClick);
submitBtn.addEventListener("click", submitBtnClick);
