function homeBtnClick() {
  window.location.href = "../html/home.html";
}

var value1;
var value2;
var value3;
var webpages;

function submitBtnClick(callback) {

  document.getElementById("add-time").onclick = function() {

    value1 = document.getElementById("title-input").value;
    chrome.storage.sync.set({'title': value1}, function() {
      console.log("Title is " + value1)
    });

    value3 = document.getElementById("time-input").value;
    chrome.storage.sync.set({'time': value3}, function() {
      console.log("Time is " + value3)
    });

    value2 = document.getElementById("link-input").value;
    chrome.storage.sync.set({'websites': value2}, function() {
      console.log("Link is " + value2)
    });

  /*  chrome.storage.sync.get(["websites"], function(items) {
        webpages = webpages.concat(items.websites);
        if(typeof callback === "function") {
          callback(webpages);
        }
    });
    console.log(webpages); */
    alert("saved");
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
