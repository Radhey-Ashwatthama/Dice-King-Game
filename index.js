var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6 + 1 ;
randomNumber1 = Math.floor(randomNumber1);
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;


document.querySelectorAll("img")[0].src=randomImageSource;
// document.querySelectorAll("img")[1].setAttribue("src", randomImageSource);
//
// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribue("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomImageSource2= "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].src=randomImageSource2;

// document.querySelectorAll("img")[1].setAttribue("src", randomImageSource2)

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";

}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
