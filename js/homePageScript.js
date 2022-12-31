"use strict";

(function (){

function captureEmail(){
    alert("Welcome to Ethan's Soccer Page!");
    var coach;
    coach = confirm("Are you a coach?");  // confirm will return a boolean value
    if(coach == true){
        var coachEmail = prompt("Please enter your email?");
        console.log(coachEmail);
        return(coachEmail);
    } else {
        alert("That's ok, welcome!");
    }
    // var emailOutput = (coach) ? console.log("Great!") : console.log("nope");
}

    captureEmail();

function favoriteTeam(){
    var futbolTeam = prompt("What's your favorite futbol team?");

    switch (futbolTeam){
        case "barca":
            alert("Barca! Barca! Barca!");
            break;
        case "liverpool":
            alert("You never walk alone.");
            break;
        case "real madrid":
            alert("Get out of here!");
            break;
        default:
            alert("You should reconsider.")
            break;
    }
}
    favoriteTeam();







})();
