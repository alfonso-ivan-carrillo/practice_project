"use strict";

(function (){

function showMultiplicationTable(number){
    var i = 0;
    while( i <= 10){
        i++;
        console.log(number + " x " + i + " = "+ (number * i));

    }
}
showMultiplicationTable(7);



})();