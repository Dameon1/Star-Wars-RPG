

// document ready... allows the page to load completely before linking anything to the html
/////////////////....very important

  $(document).ready(function() {

        console.log("working");


// Creating a start function

 function start() {
  $(".a").show();
  $(".b").show();
  $(".c").show();
  $(".d").show();
  $(".pics").show();
}

// calling start function
  start();

















/* nothing below this line is knowingly being used at the moment all work from top down


















/* this is for tageteting effects work thru $masterGood = $("#masterGood"); its a base for all for rows;
    there are very little effects attached to the html

let $masterGood = $("#masterGood")
let $masterGood = $("#masterGood")
let $masterGood = $("#masterGood")
let $masterGood = $("#masterGood")

let $masterNeutral = $("#masterNeutral");
let $masterNeutral = $("#masterNeutral")
let $masterNeutral = $("#masterNeutral")
let $masterNeutral = $("#masterNeutral")

let $masterEvil= $("#masterEvil);
let $masterEvil= $("#masterEvil)
let $masterEvil= $("#masterEvil)
let $masterEvil= $("#masterEvil)

*/

/* Basic object values that are "potentially" ID accurate*/

let mG = {
  name:"a",
  atackPoints: 10,
  defensePoints:10,
};

let dVG = {
  name:"b",
  atackPoints: 10,
  defensePoints:10,
};

let oBWG = {
  name:"c",
  atackPoints: 10,
  defensePoints:10,
};

let yG = {
   name:"d",
  atackPoints: 10,
  defensePoints:10,
};

/*  String function reference

function toString() {
    document.getElementById("firstRow").innerHTML = goodCharacters;
    console.log(goodCharacters);
};  */


// variables to hold arrays, potenetial display items
    let goodCharacters = [[mG],[dVG],[oBWG],[yG]];
    let badCharacters = [];
    let currentDefender = [];

//check to see if its working
console.log(goodCharacters);
let  goodObject = goodCharacters[0] ;
console.log(goodCharacters);
console.log(goodObject);

/* trying to build a constuctor that takes objects to populate and recall , unsure if needed, just a refereng
 let newObject = new Object();       or maybe a name instead that has all this

let a = 10;
let b = 5;
  goodgoodCharacters.name =  "hello";
  goodgoodCharacters.attack = b;
  goodgoodCharacters.defend =  a;
  goodgoodCharacters.pic = b;

*/

/*
{functions} by (ID) reference model, it's mixed on purpose to show passing capabilities

$("#masterGood").on("click", function() {
  $("#masterGood").show({ height: "300px" });
});

$("#masterGood").on("click", function() {
  $("#goodCharacters").empty();
  $("#goodCharacters[0]").toString();
  console.log(goodCharacters);
  toString();
});


this is making an object that is connected to an (ID) model
let $masterGood = $("#masterGood")

*/

});
