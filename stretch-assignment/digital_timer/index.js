const secondsOnes = document.querySelector("#secondOnes");
const secondTens = document.querySelector("#secondTens");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
const btnStart = document.querySelector("#btn-start");
const btnPause = document.querySelector("#btn-pause");

let countSO = 0;
let countST = 0;
let countMSH = 0;
let countMST = 0;

let intervalST;
let intervalSO;

btnStart.addEventListener("click", function() {
  intervalSO = setInterval(function() {
    secondsOnes.textContent = 0;
    countSO += 1;
    secondsOnes.textContent = countSO;
    if (countSO === 9) {
      countSO = 0;
    }
  }, 1000);

  intervalST = setInterval(function() {
    countST += 1;
    secondTens.textContent = countST;
  }, 10000);

  intervalMST = setInterval(function() {
    msTens.textContent = 0;
    countMST += 1;
    msTens.textContent = countMST;
    if (countMST == 10) {
      countMST = 0;
    }
  }, 10);

  intervalMSH = setInterval(function() {
    msHundreds.textContent = 0;
    countMSH += 1;
    msHundreds.textContent = countMSH;
  }, 100);
});

btnPause.addEventListener("click", function() {
  clearInterval(intervalSO);
  clearInterval(intervalST);
  clearInterval(intervalMST);
  clearInterval(intervalMSH);
});
