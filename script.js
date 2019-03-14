// total in cup
var sugarCount = 0;
var creamCount = 0;
// total left 
var sugarLeft = 3;
var creamLeft = 3;

//adds sugar to cup, displays how much is left
function addSugar() {
    sugarCount++;
    if(sugarCount > 3){
        sugarCount = 3;
    }

    console.log("added "+sugarCount+" sugar");

    sugarLeft = 3 - sugarCount;

    if(sugarCount == 1){
    document.getElementById("sugarNum").innerHTML = sugarCount+" sugar packet added. There are "+sugarLeft+" sugar packets remaining.";
    } else if(sugarCount == 2){
        document.getElementById("sugarNum").innerHTML = sugarCount+" sugar packets added. There is "+sugarLeft+" sugar packet remaining.";
    } else {
        document.getElementById("sugarNum").innerHTML = sugarCount+" sugar packets added. There are "+sugarLeft+" sugar packets remaining.";
    }

}

// adds cream to cup, displays how much is left
function addCream() {
    creamCount++;
    if(creamCount > 3){
        creamCount = 3;
    }

    console.log("added "+creamCount+" cream");

    creamLeft = 3 - creamCount;

    if(creamCount == 1){
    document.getElementById("creamNum").innerHTML = creamCount+" cream packet added. There are "+creamLeft+" cream packets remaining.";
    } else if(creamCount == 2){
        document.getElementById("creamNum").innerHTML = creamCount+" cream packets added. There is "+creamLeft+" cream packet remaining.";
    } else {
        document.getElementById("creamNum").innerHTML = creamCount+" cream packets added. There are "+creamLeft+" cream packets remaining.";
    }
}

// drinks coffee, displays final text  based on counts in cup
function drink() {
    console.log("drank coffee with "+sugarCount+" sugar and "+creamCount+" cream")

    //displays final sugar text
    if(sugarCount == 0){
        document.getElementById("sugarState").innerHTML = "You imbibe a bitter brew.";
    } else if(sugarCount == 2){
        document.getElementById("sugarState").innerHTML = "A touch of sweetness. Just a hint.";

    } else if(sugarCount == 1){
        document.getElementById("sugarState").innerHTML = "A semi-sweet cup.";

    } else {
        document.getElementById("sugarState").innerHTML = "Candy-flavored coffee? Why not?";

    }
   
    //displays final cream text
    if(creamCount ==0){
     document.getElementById("creamState").innerHTML = "It tastes like darkness. Which tastes like caffeine.";
    } else if(creamCount == 1){
        document.getElementById("creamState").innerHTML = "And a faint suggestion that, however distantly, there was a cow involved in the production of your beverage.";
    } else if(creamCount == 2){
        document.getElementById("creamState").innerHTML = "And cream enough to taste it. You watch the white swirling with the black, a tempest in a teacup.";
    } else {
        document.getElementById("creamState").innerHTML = "It's more cream than coffee now.";
    }
}

// who knows how to get this to work?
function reset(){
    sugarCount = 0;
    creamCount = 0;

    document.getElementById("sugarNum").innerHTML = "";
    document.getElementById("creamNum").innerHTML = "";
    document.getElementById("sugarState").innerHTML = "";
    document.getElementById("creamState").innerHTML = "";

    console.log("reset program");
}