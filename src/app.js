/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let top = document.querySelector(".top-suit");
  let center = document.querySelector(".number");
  let bottom = document.querySelector(".bottom-suit");

  let randsuit = Math.floor(Math.random() * 4);
  const element = suits[randsuit];
  if (suits[randsuit] === "♥" || suits[randsuit] === "♦") {
    top.style.color = "red";
    bottom.style.color = "red";
  } else {
    top.style.color = "black";
    bottom.style.color = "black";
  }

  top.innerHTML = element;
  bottom.innerHTML = element;

  let randnumber = Math.floor(Math.random() * 14);
  const element1 = numbers[randnumber];
  center.innerHTML = element1;
};
