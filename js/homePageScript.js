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

var coachInfo = [];

function captureCoachInfo(){
    var name = prompt("Hello Coach, please enter your name.");
    var email = prompt("Please enter your email, we promise not to send you to many emails.");
    var coach = {
        name: name,
        email: email
    }
    return coachInfo.push(coach);
}

// captureCoachInfo();
// console.log(coachInfo);

function doCapture(){
    var again = "yes";
    do {
        captureCoachInfo();

        again = prompt("Would you like to enter another coaches' info? (yes/no)").toLowerCase();
    } while (again == "yes")
    console.log(coachInfo);
}
doCapture();



})();
