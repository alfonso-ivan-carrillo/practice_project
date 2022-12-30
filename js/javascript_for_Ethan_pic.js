"use strict";

alert("Welcome to Ethan's Picture Page.");

var registered_user = confirm("Are you a Coach?");

if (registered_user == true){
    alert("Great!");
    var coach_email = prompt("Please enter your email address.");
    console.log(coach_email);
} else {
    alert("Thank you for visiting!");
}