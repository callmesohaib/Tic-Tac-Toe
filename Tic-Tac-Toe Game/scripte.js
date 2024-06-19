let boxes = document.querySelectorAll(".box");
let rebtn = document.querySelector("#Reset-Btn");
let newbtn = document.querySelector("#New-Btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let clickCount = 0;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [6, 7, 8],
];

const ResetGame = () => {
  turnO = true;
  clickCount = 0;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    clickCount++;
    let isWinner=checkWinner();
    if(!isWinner &&clickCount==9){
        showDraw();
    }
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showwinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};
const showDraw = () => {
  msg.innerText = "Draw Match";
  msgcontainer.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos0 = boxes[pattern[0]].innerText;
    let pos1 = boxes[pattern[1]].innerText;
    let pos2 = boxes[pattern[2]].innerText;
    if (pos0 != "" && pos1 != "" && pos2 != "")
      if (pos0 == pos1 && pos1 == pos2) {
        showwinner(pos0);
        disableBoxes();
        return true;
      }
  }
};
newbtn.addEventListener("click", ResetGame);
rebtn.addEventListener("click", ResetGame);
