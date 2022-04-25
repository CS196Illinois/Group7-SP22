(function(){

    console.log("In background.js");

    function loadWebsites(callback) {
        var websites;
      
        chrome.storage.local.get("defaultWebsites", "ourWebsites", function (items) {

            websites = 
              [
                  {"url" : "youtube.com", "on" : true}
              ];

        //   if (items.defaultWebsites === undefined) {
        //       websites = 
        //       [
        //           {"url" : "youtube.com", "on" : true}
        //       ];

        //     chrome.storage.local.set({ "defaultWebsites" : websites});
        //   } 
        //   else {
        //     websites = items.defaultWebsites;
        //   }
          
        chrome.storage.local.set({"ourWebsites": ["www.youtube.com"]});
        {
        //   if (item.ourWebsites === undefined){
        //       chrome.storage.local.set({"ourWebsites": []});
        //   }
        //   else {
        //       websites = websites.concat(items.ourWebsites);
        //   }
        }
          //Call the callback and pass the resulting array
          if (typeof callback === "function") {
            callback(websites);
            console.log(callback(websites));
          }
        });
    }

    function checkURL(url, words) {
        {
        // var result = false;
    
        // for (var x in words) {
        // if (words[x].on && url.indexOf(words[x].url) != -1) {
        //     result = true;
        //     break;
        // }
        // }
        // usually we would return result
    }
        return true;
    }
    
    function blockURL(details) {
        chrome.storage.local.get("on", function(item){
        if (item.on === true) {
    
            loadWebsites(function(sites){
                // details.frameId === 0 && checkURL(details.url, websites)
            if (true){
                var id = details.tabId;
                
                chrome.tabs.update(id, {"url": "html/message/html"});
    
                chrome.storage.local.get("blocked", function(item){
                chrome.storage.local.set({"blocked": item.blocked+1});
                });
            }
            });
        }
        });
    }
    
    chrome.webNavigation.onCommitted.addListener(blockURL);
    
    chrome.storage.local.get("on", function(item){
        if (item.on === undefined){
        chrome.storage.local.set({"on": false, "blocked": 0});
        }
    });
    
    loadWebsites();
})();