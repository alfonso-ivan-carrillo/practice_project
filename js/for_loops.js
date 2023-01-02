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

function generateNums(){
    // for(var i = 0; i < 10; i++){
    var luckyNumber = Math.floor(Math.random() * (201 - 20) + 20);
    // console.log(luckyNumber);
    return(luckyNumber);
    // }
}
generateNums();

function numOddEven(){
    for (var i = 0; i < 10; i++){
        var nums = generateNums();
        // console.log(nums);
        if(nums % 2 == 0){
            console.log(nums + " is even.");
        } else {
            console.log(nums + " is odd.");
        }
    }

}
numOddEven();

})();