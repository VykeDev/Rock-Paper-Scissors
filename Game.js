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

cards.forEach((card, index) => {
  card.onclick = () => {
    text.style.display = "flex";
  };
});
