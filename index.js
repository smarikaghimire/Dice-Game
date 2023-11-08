var random1 =Math.floor(Math.random()*6)+1;
var randomDiceimage= "dice"+random1+ ".png";
var randomImageSource="images/"+randomDiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var random2 =Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(random1>random2){
    document.getElementById("hi").innerHTML="Wow,Player1 Wins!";
}
else if(random2>random1){
    document.getElementById("hi").innerHTML="Bravo,Player2 Wins!";
}
else{
    document.getElementById("hi").innerHTML="It's a tie tie!";
}


