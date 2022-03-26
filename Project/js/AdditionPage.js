function homeBtnClick() {
  window.location.href = "../html/home.html";
}

function submitBtnClick() {
  if (name != "" && link != "" && time != 0) {
    names.push(name);
    links.push(link);
    times.push(time);
    console.log(names);
    console.log(links);
    console.log(times);
    window.location.href = "../html/home.html";
  }
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
