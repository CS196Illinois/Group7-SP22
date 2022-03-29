function addBtnClick() {
  window.location.href = "../html/AdditionPage.html";
}
function statsBtnClick() {
  window.location.href = "../html/specific.html";
}
function gameBtnClick() {
  window.location.href = "../html/achievements.html";
}

var addBtn = document.getElementById("add");
var statsBtn = document.getElementById("stats");
var gameBtn = document.getElementById("game");

addBtn.addEventListener("click", addBtnClick);
statsBtn.addEventListener("click", statsBtnClick);
gameBtn.addEventListener("click", gameBtnClick);
