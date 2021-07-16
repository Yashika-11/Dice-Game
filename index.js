var randoNumber1=Math.random()
randoNumber1=randoNumber1*6;
randoNumber1=Math.floor(randoNumber1)+1;
var n="dice"+randoNumber1+".png";
var diceImage="images/"+n;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",diceImage);

var randoNumber2=Math.random()
randoNumber2=randoNumber2*6;
randoNumber2=Math.floor(randoNumber2)+1;
var n="dice"+randoNumber2+".png";
var diceImage="images/"+n;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",diceImage);
if(randoNumber1>randoNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if (randoNumber2>randoNumber1) {
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
