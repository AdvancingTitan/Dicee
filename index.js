document.query

// Random Numbers from 1 to 6 to decide dice image source
var randomNumer1 = Math.floor(Math.random()*6) +1;
var randomNumer2 = Math.floor(Math.random()*6) +1;

var img1Source = "images\\dice" + randomNumer1 + ".png";
var img2Source = "images\\dice" + randomNumer2 + ".png";


// HTML Attribute Changes

if (randomNumer1 > randomNumer2) {         // Player 1 wins
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumer1 == randomNumer2) { // Draw
  document.querySelector("h1").innerHTML = "It's a Draw!";
} else {                                   // Player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

document.querySelector(".img1").setAttribute("src", img1Source);
document.querySelector(".img2").setAttribute("src", img2Source);
