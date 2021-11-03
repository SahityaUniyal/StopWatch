let ms = 0,
  s = 0,
  m = 0;
let timer = 0;

let stopWatch = document.querySelector(".timer");
let laps = document.querySelector(".laps-container");

function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}
function run() {
  stopWatch.textContent = getTimer();
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
}
function stop() {
  clearInterval(timer);
  timer = false;
}
function reset() {
  m = 0;
  s = 0;
  ms = 0;
  stopWatch.textContent = getTimer();
}

function lap() {
  if (timer) {
    let li = document.createElement("li");
    li.innerText = getTimer();
    laps.appendChild(li);
  }
}
function resetlaps() {
  laps.innerHTML="";
}
function getTimer() {
  return (
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s) +
    ":" +
    (ms < 10 ? "0" + ms : ms)
  );
}
