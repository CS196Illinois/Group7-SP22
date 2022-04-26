
(function(){
  function loadWebsites(callback) {
    var sites;
  
    chrome.storage.local.get("websites", function (items) {
      console.log(items.websites);
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
  function checkURL(url, words) {
    var result = false;
    window.location.href = "../html/home.html"
    for (i in words) {
      alert(words[i]);
      if (url.indexOf(words[i].url) != -1) {
        result = true;
        break;
      }
    }
    return result;
  }
  function blockURL(details) {
    loadWebsites(function (websites){
      if (details.frameId === 0 && checkURL(details.url, websites)){
         var id = details.tabId;
            
         chrome.tabs.update(id, {"url": "../html/message.html"});
  
         chrome.storage.local.get("blocked", function(item){
           chrome.storage.local.set({"blocked": item.blocked+1});
           console.log(item)
        });
      }
    });
  }
  chrome.webRequest.onBeforeRequest.addListener(blockURL);
  loadWebsites();
});
