chrome.tabs.onCreated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
  
    alert('loaded!');
  
    }
  })