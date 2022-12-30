"use strict";

console.log("Hello from External JS!");

alert("Welcome to my website!");

var userColor = prompt("What is your favorite color?");

userColor;

alert("Great, " + userColor + " is my favorite color too!");

// exercise 3 from previous lesson

var little_mermaid = 3;
var brother_bear = 5;
var hercules = 1;
var price_perday = 3;

console.log("Total price of rental is $" + ((little_mermaid + brother_bear + hercules) * price_perday) + ".");

var google = 400;
var amazon = 380;
var facebook = 350;

alert("Total paycheck is $" + (google * 6 + amazon * 4 + facebook * 10) + ".");

//confirm method returns a boolean value and a prompt method returns string entered by user
var premium_member = confirm("Are you a premium member?");
var product_offer = confirm("Is the offer still valid");
var number_of_products = confirm("Are you buying more than two products?");
console.log(premium_member);
console.log(product_offer);
console.log(number_of_products);

if((premium_member == true || number_of_products == true) && number_of_products == true){
    console.log("yes");
    alert("offer applied");
} else {
    console.log("no");
    alert("no");

}