console.log("JavaScript file is loaded")

var machineOffer;
var userBid;
var totalGems;
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
  var o = Math.round(((Math.random() * 100) + 10));
  return o;
}

function price() {
  var p = Math.floor((Math.random() * 10) + 1);
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
}

reset();

$("#ruby").click(function(){
    console.log("The ruby was clicked.");
    userBid += rubyPrice;
    totalGems ++
    checkBid();
});

$("#emerald").click(function(){
    console.log("The emerald was clicked.");
    userBid += emeraldPrice;
    totalGems ++
    checkBid();
});

$("#sapphire").click(function(){
    console.log("The sapphire was clicked.");
    userBid += sapphirePrice;
    totalGems ++
    checkBid();
});

$("#amethyst").click(function(){
    console.log("The amethyst was clicked.");
    userBid += amethystPrice;
    totalGems ++
    checkBid(userBid);
});

function checkBid(a) {
  if (a = machineOffer) {
    //user wins
  }

  else if (a < machineOffer) {
    //do nothing
  }

  else {
    //user loses
  }
}

spanOffer.textContent = machineOffer;
spanBid.textContent = userBid;
spanCountGems.textContent = totalGems;
spanUserWins.textContent = sales;
spanComputerWins.textContent = losses;
