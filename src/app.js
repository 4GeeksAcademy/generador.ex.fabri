/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let numWho = Math.floor(Math.random() * who.length);
  let numAction = Math.floor(Math.random() * action.length);
  let numWhat = Math.floor(Math.random() * what.length);
  let numWhen = Math.floor(Math.random() * when.length);

  document.querySelector(".textoExcusa").innerHTML =
    who[numWho] +
    " " +
    action[numAction] +
    " " +
    what[numWhat] +
    " " +
    when[numWhen];
};
