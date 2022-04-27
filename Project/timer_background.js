chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["notificationTime", "isRunning"], (res) => {
    console.log("background")
    const time = res.notificationTime ?? 0
    const isRunning = res.isRunning ?? false
    if (!isRunning) {
      return
    }
    chrome.storage.local.set({
      notificationTime: time - 1,
    })
    chrome.action.setBadgeText({
      text: `${time - 1}`
    })
    chrome.storage.local.get(["notificationTime"], (res) => {
      const notificationTime = res.notificationTime ?? 0
      if (time == 0 || notificationTime == 0) {
        chrome.storage.local.set({
          isRunning: false
        })
        this.registration.showNotification("Trackler", {
          body: `${site.title} has been unlocked.`,
          icon: "icon.png",
        })
       }
     })
   })
})
