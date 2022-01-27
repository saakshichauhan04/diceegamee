var num1=Math.floor((Math.random()*6)+1);
var newimage1="dice"+num1+".png";
var newimagesource1="images/"+newimage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", newimagesource1);

var num2=Math.floor((Math.random()*5)+1);
var newimage2="dice"+num2+".png";
var newimagesource2="images/"+newimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",newimagesource2);
if(num1>num2)
{
  document.querySelector("h1").innerHTML="PLAYER 1 WINS🎉";
}
else if(num1<num2)
{
  document.querySelector("h1").innerHTML="PLAYER 2 WINS🎉";
}
else
{
  document.querySelector("h1").innerHTML="WOHOO,IT'S A DRAWWW😳";
}
function start(){
    window.location.reload();
}
