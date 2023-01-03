"use strict";

(function (){

function userNumber(){
    do {
        var num = prompt("Enter a number please.");
        if (Number(num)){
            continue;
        } else {
            alert("not a valid number, try again.");
        }
    } while (!Number(num))
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

function pyrmaidOutput(rows){
    for(var i =1; i <= rows; i++ ){
        var output = "";
        for (var j = 1; j <= i; j++){
            output += i + "";
        }
        console.log(output);
    }
}

pyrmaidOutput(9);


function fiveByFive(){
    for (var i = 100; i >= 5; i -= 5 ){
        console.log(i);
    }
}
fiveByFive();


function breakContinue(){
    var skip = userNumber();
    console.log("Number to skip is: " + skip);
    for (var i = 1; i <= 50; i++){
        if (skip == i){
            console.log("Yikes, skip this number: " + i);
            continue;
        } else if (i % 2 == 1){
            console.log("This is an odd number: " + i);
            continue;
        }
    }
}
breakContinue();

function twoTimes(){
    var x = 1;
    while (x < 65536){
        x = x * 2;
        // x *= 2;
        console.log(x);
    }
}
twoTimes();

function cones(){
    var allCones = Math.floor(Math.random() * (100 - 50) + 50);
    console.log(allCones);
    var balance = 0;
    do {
        var conesSold = Math.floor(Math.random() * 5) + 1;
        if(allCones > conesSold){
            allCones -= conesSold;
            balance += conesSold;
            console.log(allCones + " cones sold");
            // console.log("cones sold counter: " + balance);
        } else if (allCones < conesSold){
            console.log("Cannot sell you " + conesSold + ", I only have " + allCones);
            // console.log("remaining " + allCones);
            // console.log("counting... "+ balance);
            // console.log(conesSold);
        } else if(allCones == 0 || allCones == conesSold){
            document.write("<h1>Yay! I sold them all!</h1>");
            break;
        }

    } while (allCones > 0)
}
cones();



})();