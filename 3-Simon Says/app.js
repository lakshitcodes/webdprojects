let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let score = 0;
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    console.log("Started");
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = "Level " + level;

  //Selection of random button
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let flashBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  gameFlash(flashBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b>.<br> Press any key to start again.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  score = Math.max(score, level);
  if (score > 0) {
    let heading = document.querySelector("p");
    heading.innerText = `High Score : ${score}`;
    heading.style.display = "inline";
  }
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
