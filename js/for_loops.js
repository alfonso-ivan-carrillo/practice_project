"use strict";

(function (){

function userNumber(){
    var num = prompt("Enter a number please.");
    return num;
}

function showMultiplicationTable(number){
    var i = 0;
    while( i <= 10){
        i++;
        console.log(number + " x " + i + " = "+ (number * i));

    }
}
showMultiplicationTable(userNumber());



})();