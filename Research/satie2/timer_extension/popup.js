const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");

function updateTimeElements() {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    timerElement.textContent = `Timer : ${time} s`;
  });
  const currentTime = new Date().toLocaleTimeString();
  timeElement.textContent = `Time is: ${currentTime}`;
}

updateTimeElements();
setTimeInterval(updateTimeElements, 1000);

chrome.storage.sync.get(["name"], (result) => {
  const name = result.name ?? "???";
  nameElement.textContent = `Name: ${result.name}`;
});
