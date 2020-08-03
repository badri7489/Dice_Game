var dice1 = document.querySelectorAll("img")[0];
var dice2 = document.querySelectorAll("img")[1];
var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;
dice1.setAttribute("src", "./images/dice" + rand1 + ".png");
dice2.setAttribute("src", "./images/dice" + rand2 + ".png");
document.querySelector("h1").innerHTML =
	rand1 == rand2
		? "Draw"
		: rand1 > rand2
		? "🚩 Player 1 Wins"
		: "Player 2 Wins 🚩";
