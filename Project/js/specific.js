function homeBtnClick() {
  window.location.href = "../html/home.html";
}

var homeBtn = document.getElementById("home");

homeBtn.addEventListener("click", homeBtnClick);

document.onClick = clickListener;
var allTimeClicks = 0;
var currentClicks = 0;
function clickListener(e) {
  currentClicks += 1;
  return currentClicks;
}
