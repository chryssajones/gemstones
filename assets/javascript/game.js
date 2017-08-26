$(document).ready(function(){

console.log("JavaScript file is loaded")

var gems = ["ruby", "emerald", "sapphire", "amethyst"];

var machineOffer = 0;
var userBid = 0;
var totalGems = 0;
var sales = 0;
var losses = 0;
var rubyPrice = 0;
var emeraldPrice = 0;
var amethystPrice = 0;
var sapphirePrice = 0;

var spanOffer = document.getElementById("spanOffer");
var spanBid = document.getElementById("spanBid");
var spanCountGems = document.getElementById("spanCountGems");
var spanUserWins = document.getElementById("spanUserWins");
var spanComputerWins = document.getElementById("spanComputerWins");

function offer() {
  var o = Math.floor(((Math.random() * 1000) + 50));
  return o;
}

function price() {
  var p = Math.floor((Math.random() * 150) + 10);
  return p;
} 

function reset(){
  machineOffer = offer(); console.log("Today's offer: $" + machineOffer);
  rubyPrice = price(); console.log("ruby = $" + rubyPrice);
  emeraldPrice = price(); console.log("emerald = $" + emeraldPrice);
  amethystPrice = price(); console.log("amethyst = $" + amethystPrice);
  sapphirePrice = price(); console.log("sapphire = $" + sapphirePrice);
  totalGems = 0;
  userBid = 0;
  spanOffer.textContent = machineOffer;
  spanBid.textContent = 0;
  spanCountGems.textContent = 0;
}

function onClick(gemsIndex){
  console.log("The " + gems[gemsIndex] + " was clicked.");
  totalGems ++;
  spanBid.textContent = userBid;
  spanCountGems.textContent = totalGems;
  console.log(userBid);
  checkBid(userBid);
}

reset();

$("#ruby").click(function(){
    userBid += rubyPrice;
    onClick(0);
});

$("#emerald").click(function(){
    userBid += emeraldPrice;
    onClick(1);
});

$("#sapphire").click(function(){
    userBid += sapphirePrice;
    onClick(2);
});

$("#amethyst").click(function(){
    userBid += amethystPrice;
    onClick(3);
});

function checkBid(a) {
  console.log(a, machineOffer);

  if (a === machineOffer) {
    alert("You matched my sale price! I will pay $" + machineOffer);
    sales += machineOffer;
    spanUserWins.textContent = sales;
    playAgain();
  } else if (a > machineOffer) {
    alert("That's more than I'm willing to pay.  No sale!");
    losses += machineOffer;
    spanComputerWins.textContent = losses;
    playAgain();
  }
}

function playAgain() {
    var again = alert("Do you want to play again?")
      if (again = true) {
        reset();
      }
    };

});