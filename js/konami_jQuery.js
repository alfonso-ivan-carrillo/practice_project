"use strict";

$(document).ready(function (){

    let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    let test = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

    let userInput = [];

    let testCode = $('#konamiInput').keydown(function (event){
        // console.log(event.keyCode);
        userInput.push(event.keyCode);
        return(compare(userInput));
    });

    function compare(userinput){
        // console.log(konamiCode.toString() == userinput.toString());
        console.log((JSON.stringify(konamiCode) == JSON.stringify(userinput)));
    }

    console.log(JSON.stringify(konamiCode));
    console.log(konamiCode.toString());

    console.log(JSON.stringify(konamiCode) == konamiCode.toString());

//todo
// methods to compare two arrays
// using JSON to compare to arrays - JSON.stringify() method, as it only serializes your JavaScript array. The array still takes the shape of an array, but it’s only parsed to become the string version of the array.
    function jsonArray(array1, array2){
        return(JSON.stringify(array1) == JSON.stringify(array2));
    };

//todo
// using .toString() method to compare two arrays
    const stringArray = (array1, array2) => {
        return(array1.toString() === array2.toString());
    };

//todo
//  using .every()
    const everyArray = (array1, array2) =>
        array1.length === array2.length && array1.every((element, index) => element === array2[index]);

//todo
//      using a loop to compare
    const loopArray = (array1, array2) => {
        if(array1.length !== array2.length){
            return false;
        } else {
            for(var i = 0; i < array1.length; i++){
                if(array1[i] !== array2[i]){
                    return false;
                }
            }
            return true;
        }
    }


    function arrayLoop(array1, array2){
        if(array1.length === array2.length){
            for(var i = 0; i < array1.length; i++){
                if(array1[i] == array2[i]){
                    return true;
                }
            }
            return false;
        }
    }

    console.log(arrayLoop(konamiCode, test));


});