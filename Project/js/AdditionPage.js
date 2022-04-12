
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

function blockSite() {
  var inputurl = document.getElementById("link-input").value;
  var urlname = document.getElementById("title-input").value;
  names.push(urlname);
  links.push(inputerurl);

  if (window.location.href.includes(inputurl) && links.includes(inputurl)) {
      document.head.innerHTML = (`WORK > ${urlname}`);
      document.body.innerHTML = "GET BACK TO WORK!";
  }
}


