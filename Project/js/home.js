function addBtnClick() {
  window.location.href = "../html/AdditionPage.html";
}
function statsBtnClick() {
  window.location.href = "../html/specific.html";
}
function gameBtnClick() {
  window.location.href = "../html/achievements.html";
}

function fill(template, data) {
  var result = template;

  for (var el in data) {
    var mark = "{{ " + el + " }}";
    result = result.replace(mark, data[el]);
  }

  return result;
}
function loadWebsites() {
  chrome.storage.local.get("title", function (items) {
    if (items.title !== undefined) {
      var websites = items.title;
      var list = document.getElementById("list");
      list.innerHTML = "";

      for (var index in websites) {
        var website = websites;
        var element = fill(listElementTemplate, {
          el: website,
        });

        list.innerHTML += element;
      }

      attachEvents();
    }
  });
}

function deleteWebsite(e) {
  var id = this.parentElement.id.replace("site", "");

  chrome.storage.local.get("websites", function (items) {
    if (items.websites !== undefined) {
      var newArray = items.websites;
      newArray.splice(id, 1);

      storage.local.set({ websites: newArray }, function () {
        loadWebsites();
      });
    }
  });
}

function attachEvents() {
  var del = document.getElementById("delete");

  for (var i = 1; i < del.length; i++) {
    del.item(i).addEventListener("click", deleteCustomWebsite);
  }
}

var addBtn = document.getElementById("add");
var statsBtn = document.getElementById("stats");
var gameBtn = document.getElementById("game");

var listElementTemplate =
  '<li id ="site">' +
  "{{ el }}" +
  '<button type="delete" class="button-add" id="delete"> <img src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png" width="20px" height="20px"/></button>' +
  "</li>";

addBtn.addEventListener("click", addBtnClick);
statsBtn.addEventListener("click", statsBtnClick);
gameBtn.addEventListener("click", gameBtnClick);

loadWebsites();
