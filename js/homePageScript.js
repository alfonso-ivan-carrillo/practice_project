"use strict";

(function (){

function captureEmail(){
    alert("Welcome to Ethan's Soccer Page!");
    var coach;
    coach = prompt("Are you a coach?");
    if(coach == "yes"){
        var coachEmail = prompt("Please enter your email?");
        console.log(coachEmail);
        return(coachEmail);
    } else {
        alert("That's ok, welcome!");
    }
}

captureEmail();


})();
