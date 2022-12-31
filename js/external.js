"use strict";

// console.log("Hello from External JS!");
//
// alert("Welcome to my website!");
//
// var userColor = prompt("What is your favorite color?");
//
// userColor;
//
// alert("Great, " + userColor + " is my favorite color too!");
//
// // exercise 3 from previous lesson
//
// var little_mermaid = 3;
// var brother_bear = 5;
// var hercules = 1;
// var price_perday = 3;
//
// console.log("Total price of rental is $" + ((little_mermaid + brother_bear + hercules) * price_perday) + ".");
//
// var google = 400;
// var amazon = 380;
// var facebook = 350;
//
// var google_hours = prompt("How many hours did you work for Google?");
// var amazon_hours = prompt("How many hours did you work for Amazon?");
// var facebook_hours = prompt("How many hours logged for FaceBook?");
// var paycheck = ((google * google_hours) + (amazon * amazon_hours) + (facebook * facebook_hours));
//
// alert("Total paycheck is $" + (google * google_hours + amazon * amazon_hours + facebook * facebook_hours) + ".");
//
// console.log(paycheck);
//
// //confirm method returns a boolean value and a prompt method returns string entered by user
// var premium_member = confirm("Are you a premium member?");
// var product_offer = confirm("Is the offer still valid");
// var number_of_products = confirm("Are you buying more than two products?");
// console.log(premium_member);
// console.log(product_offer);
// console.log(number_of_products);
//
// if((premium_member == true || number_of_products == true) && number_of_products == true){
//     console.log("yes");
//     alert("offer applied");
// } else {
//     console.log("no");
//     alert("no");
//
// }

// function
function userNumber(){
    var userOutput = prompt("Enter a number");
    return parseInt(userOutput);
}

function incrementNum(x){
    return alert(x + 1);
}
incrementNum(userNumber());
// console.log(parseInt(num));

// anonymous function
var increment = function(x){
    return x + 1;
}

var two = increment(5);
alert(two);

// functions with multiple parameters
function sum(a, b){
    var result = a + b;
    return result;
}
console.log(userNumber());
console.log(two);
console.log(sum(userNumber(),two));