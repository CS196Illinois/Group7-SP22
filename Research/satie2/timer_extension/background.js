chrome.alarms.create({
  periodInMinutes: 1 / 60,
});
chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer"], (result) => {
    const time = result.timer ?? 0;
    chrome.storage.local.set({
      timer: time + 1,
    });
    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });
  });
});
