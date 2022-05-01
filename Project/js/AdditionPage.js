function homeBtnClick() {
  window.location.href = "../html/home.html";
}

function loadWebsites(callback) {
  var sites;

  chrome.storage.local.get("websites", function (items) {
    if (items.websites === undefined) {
      chrome.storage.local.set({ websites: [] });
    } else {
      sites = items.websites;
    }

    //Call the callback and pass the resulting array
    if (typeof callback === "function") {
      callback(sites);
      console.log(callback(sites));
    }
  });
}

function submitBtnClick() {
  document.getElementById("add-time").onclick = function () {
    value1 = document.getElementById("title-input").value;
    value2 = document.getElementById("time-input").value;
    value3 = document.getElementById("link-input").value;

    var site = [{ title: value1, time: value2, url: value3 }];

    //values are stored in a site object with fields title, time, and value;
    //site is stored in chrome.storage.local using the key "websites"
    //item in websites is an array of site objects
    chrome.storage.local.set({ website: site }, function () {
      console.log("Site set");
    });

    chrome.storage.local.get("websites", function (items) {
      if (items !== undefined) {
        var array = items.websites;
        console.log(array);

        array.push(site[0]);

        chrome.storage.local.set({ websites: array }, function () {
          loadWebsites();
        });

        site.value = [];
      }
    });
    window.location.href = "../html/home.html";
  };
}


var name = document.getElementById("title-input");
var link = document.getElementById("link-input");
var time = document.getElementById("time-input");

var value1;
var value2;
var value3;

var homeBtn = document.getElementById("home");
var submitBtn = document.getElementById("add-time");

homeBtn.addEventListener("click", homeBtnClick);
submitBtn.addEventListener("click", submitBtnClick);

loadWebsites();
