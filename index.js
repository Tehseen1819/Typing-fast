var main = document.querySelector(".main");
var h2 = document.querySelector(".center h2");
var scorediv = document.querySelector(".score");
var time = document.querySelector(".time");
var finalscore=document.querySelector('.gameover h2');
var gameover=document.querySelector('.gameover');
var score = 0;
var timeleft = 9;

function getRandomAlphabet() {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789[]{}\|';.,:!@#$%^&*()-_=+~";
  const randomIndex = Math.floor(Math.random() * letters.length);
  h2.textContent = letters[randomIndex];
}

window.addEventListener("keydown", (d) => {
  if (h2.textContent === d.key) {
    getRandomAlphabet();
    score += 10;
    scorediv.textContent = `Score: ${score}`;
  }
});

var timer = setInterval(() => {
  time.textContent = `Time Left: ${timeleft}`;
  timeleft--;
  if (timeleft < 0) {
    clearInterval(timer);
    main.style.display='none';
    gameover.style.display='block';
    finalscore.textContent=`GAME OVER , Your Score is ${score}`;
  }
}, 1000);


getRandomAlphabet();
