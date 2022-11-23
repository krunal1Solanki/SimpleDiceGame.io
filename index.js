img = ["images/dice1.png","images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png" ]

var i1 = Math.ceil(Math.random() * 5);
var i2 = Math.ceil(Math.random() * 5);

var rand1 = img[i1];
var rand2 = img[i2];

document.querySelector(".img1").setAttribute("src", rand1);
document.querySelector(".img2").setAttribute("src",rand2);


var x = document.querySelector("h1");

if(i1 == i2) {
    x.innerText = "TIEE";
} else if(i1 > i2) {
    x.innerHTML = "Player 1 WON !!"
} else {
    x.innerHTML = "Player 2 WON !!"
}