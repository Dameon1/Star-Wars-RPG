

// document ready... allows the page to load completely before linking anything to the html
/////////////////....very important

  $(document).ready(function() {

    console.log("working");




    /* Basic object values that are "potentially" ID accurate*/


    var $a = $("#a");

    var mG = {
      name:"a",
      atackPoints: 10,
      defensePoints:10,
    };

    var dVG = {
      name:"b",
      atackPoints: 10,
      defensePoints:10,
    };

    var oBWG = {
      name:"c",
      atackPoints: 10,
      defensePoints:10,
    };

    var yG = {
       name:"d",
      atackPoints: 10,
      defensePoints:10,
    };


    // variables to hold arrays, potenetially display items
    var goodCharacters = [[mG],[dVG],[oBWG],[yG]];
    var badCharacters = [];
    var currentDefender = [];

    //check to see if arrays are working
    console.log(goodCharacters);
    var  goodObject = goodCharacters[0] ;
    console.log(goodCharacters);
    console.log(goodObject);

    // tried to build a constuctor that takes objects to populate and recall but failed to did this

    // Creating a start function needs an

    function start() {
      $(".a").show();
      $(".b").show();
      $(".c").show();
      $(".d").show();
}

// calling start function...onkey event(maybe)
    start();
/*
 Layout for showing and hiding other elements in the document
    ~after a player picks "a" charachter
*/

// four attacker selectors

//if user picks "a"
$(".ah").on("click", function() {
  $(".b").hide();
  $(".c").hide();
  $(".d").hide();
  $(".f").show();
  $(".g").show();
  $(".h").show();
  $(".ah").off();
});

//if user picks "b"
$(".bh").on("click", function() {
  $(".a").hide();
  $(".c").hide();
  $(".d").hide();
  $(".e").show();
  $(".g").show();
  $(".h").show();
  $(".bh").off();
});

//if user picks "c"
$(".ch").on("click", function() {
  $(".a").hide();
  $(".b").hide();
  $(".d").hide();
  $(".e").show();
  $(".f").show();
  $(".h").show();
  $(".ch").off();
});

//if user picks "d"
$(".dh").on("click", function() {
  $(".a").hide();
  $(".b").hide();
  $(".c").hide();
  $(".e").show();
  $(".f").show();
  $(".g").show();
  $(".dh").off();
});


// four defender selectors

//if picks "e"
$(".eh").on("click", function() {
  $(".e").hide();
  $(".i").show();
      $("#f").removeClass("fh");
      $("#g").removeClass("gh");
      $("#h").removeClass("hh");
});

//if picks "f"
$(".f").on("click", function() {
  $(".f").hide();
  $(".j").show();
      $("div.mN").removeClass(".e");
      $("div.yN").removeClass(".g");
      $("div.oBWN").removeClass(".h");
});

//if picks "g"
$(".g").on("click", function() {
  $(".g").hide();
  $(".k").show();
      $("div.mN").removeClass(".e")
      $("div.dVN").removeClass(".f");
      $("div.oBWN").removeClass(".h");
});

//if picks "h"
$(".h").on("click", function() {
  $(".h").hide();
  $(".l").show();
      $("div.mN").removeClass(".e")
      $("div.dVN").removeClass(".f");
      $("div.yN").removeClass(".g");
});

//if picks "i"
$(".ih").on("click", function() {
  $(".i").hide();
  $("#f").addClass("fh");
  $("#g").addClass("gh");
  $("#h").addClass("hh");
});




/*after death of first character. it will get this..code block
 but putting an ".on"click for functionality*/



 //if picks "i"
 $(".ih").on("click", function() {
   $(".i").hide();
   $("#f").addClass("fh");
   $("#g").addClass("gh");
   $("#h").addClass("hh");
 });

//if picks "j"
$(".j").on("click", function() {
  $(".j").hide();
  $("div.yN").addClass(".g");
  $("div.oBWN").addClass(".h");
});

//if picks "k"
$(".kh").on("click", function() {
  $(".k").hide();
  $("#e").addClass("eh");
  $("#f").addClass("fh");
  $("#h").addClass("hh");
  console.log(this);
});

$(".l").on("click", function() {
  $(".l").hide();
  $(".f").addClass(".f");
  $(".g").addClass(".g");
});
/*
//these were some things that I tried at various times
$(".f").on("click", function() {
  $(".f").hide();
  $(".j").show();
      $("div.mN").removeClass(".e");
      $("div.yN").addClass(".g");
      $("div.oBWN").append$(".h");
});

//if pick "g"
$(".g").on("click", function() {
  $(".g").hide();
  $(".k").show();
      $("#f").off(".e")
      $("div.dVN").addClass(".f");
      $("div.oBWN").removeClass(".h");
});

/* nothing below this line is knowingly being used at the moment all work from top down






/* this is for tageteting effects work thru $masterGood = $("#masterGood"); its a base for all for rows;
    there are very little effects attached to the html

let $masterGood = $("#masterGood")
let $masterNeutral = $("#masterNeutral");
let $masterEvil= $("#masterEvil)

/* Basic object values that are "potentially" ID accurate*/


var $a = $("#a");

var mG = {
  name:"a",
  atackPoints: 10,
  defensePoints:10,
};

var dVG = {
  name:"b",
  atackPoints: 10,
  defensePoints:10,
};

var oBWG = {
  name:"c",
  atackPoints: 10,
  defensePoints:10,
};

var yG = {
   name:"d",
  atackPoints: 10,
  defensePoints:10,
};

/*  String function reference

function toString() {
    document.getElementById("firstRow").innerHTML = goodCharacters;
    console.log(goodCharacters);
};  */


// variables to hold arrays, potenetially display items
    var goodCharacters = [[mG],[dVG],[oBWG],[yG]];
    var badCharacters = [];
    var currentDefender = [];

//check to see if arrays are working
    console.log(goodCharacters);
    var  goodObject = goodCharacters[0] ;
    console.log(goodCharacters);
    console.log(goodObject);

/* trying to build a constuctor that takes objects to populate and recall
would have been alot easier with constructors, unsure if needed, just a refereng*/

});
