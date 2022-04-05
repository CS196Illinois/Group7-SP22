function homeBtnClick() {
  window.location.href = "../html/home.html";
  loadWebsites();
}

function submitBtnClick() {
  /* add "add websites to storage" code here */
  document.getElementById("add-time").onclick = function () {
    value1 = document.getElementById("title-input").value;
    chrome.storage.local.set({ title: value1 }, function () {
      console.log("Title is " + value1);
    });

    value3 = document.getElementById("time-input").value;
    chrome.storage.local.set({ time: value3 }, function () {
      console.log("Time is " + value3);
    });

    value2 = document.getElementById("link-input").value;
    chrome.storage.local.set({ link: value2 }, function () {
      console.log("Link is " + value2);
    });

    chrome.storage.local.get("websites", function (items) {
      if (items !== undefined) {
        var array = items.websites;

        array.push({ value1 });

        chrome.storage.local.set({ websites: array }, function () {
          loadWebsites();
        });

        input.value = "";
      }
    });

    /*  chrome.storage.local.get(["websites"], function(items) {
        webpages = webpages.concat(items.websites);
        if(typeof callback === "function") {
          callback(webpages);
        }
    });
    console.log(webpages); */
    alert("saved");
    loadWebsites();
  };
}

var name = document.getElementById("title-input");
var link = document.getElementById("link-input");
var time = document.getElementById("time-input");

var websites = [];
var value1;
var value2;
var value3;
var site = { title: "", time: 0, link: "" };

var homeBtn = document.getElementById("home");
var submitBtn = document.getElementById("add-time");

homeBtn.addEventListener("click", homeBtnClick);
submitBtn.addEventListener("click", submitBtnClick);
