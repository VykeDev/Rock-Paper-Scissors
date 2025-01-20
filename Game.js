const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

rock.addEventListener("mouseover", () => {
  const img = rock.querySelector("img");
  const text = rock.querySelector("p");

  img.src = "elements/hand-back-fist-solid.svg";
  rock.style.backgroundColor = "black";
  text.style.color = "white";
});
rock.addEventListener("mouseout", () => {
  const img = rock.querySelector("img");
  const text = rock.querySelector("p");

  img.src = "elements/hand-back-fist-regular.svg";
  rock.style.backgroundColor = "white";
  text.style.color = "black";
});

paper.addEventListener("mouseover", () => {
  const img = paper.querySelector("img");
  const text = paper.querySelector("p");

  img.src = "elements/hand-solid.svg";
  paper.style.backgroundColor = "black";
  text.style.color = "white";
});
paper.addEventListener("mouseout", () => {
  const img = paper.querySelector("img");
  const text = paper.querySelector("p");

  img.src = "elements/hand-regular.svg";
  paper.style.backgroundColor = "white";
  text.style.color = "black";
});

scissors.addEventListener("mouseover", () => {
  const img = scissors.querySelector("img");
  const text = scissors.querySelector("p");

  img.src = "elements/hand-scissors-solid.svg";
  scissors.style.backgroundColor = "black";
  text.style.color = "white";
});
scissors.addEventListener("mouseout", () => {
  const img = scissors.querySelector("img");
  const text = scissors.querySelector("p");

  img.src = "elements/hand-scissors-regular.svg";
  scissors.style.backgroundColor = "white";
  text.style.color = "black";
});

const cards = document.querySelectorAll(".card");
const text = document.querySelector(".text");
let sb = 0;
cards.forEach((card, index) => {
  const player = document.querySelector("#player");
  const computer = document.querySelector("#computer");
  const score = document.querySelector("#score");
  const options = ["Rock", "Paper", "Scissors"];

  card.onclick = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    text.style.display = "flex";
    player.textContent = `you: ${options[index]}`;
    computer.textContent = `computer: ${options[randomNumber]}`;
    score.textContent = `score: ${sb}`;
    game(options[randomNumber], options[index]);
  };
  const outcomes = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock",
  };
  function game(player1, player2) {
    console.log(`c: ${player1}`);
    console.log(`p: ${player2}`);
    if (player1 == player2) {
      return console.log("tie");
    }
    if (outcomes[player1] == player2) {
      return console.log("computer wins");
    }
    sb++;
    score.textContent = `score: ${sb}`;
  }
});
