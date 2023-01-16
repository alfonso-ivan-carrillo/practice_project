"use strict";

(function (){

// TODO: example of procedural programming - variables on one side and functions in another

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    console.log(baseSalary + (overtime * rate));
    return baseSalary + (overtime * rate);
}

getWage(20000, 10, 20);


// TODO: example of encapsulation which is better than procedural programming

    let employee = {
        baseSalary: 30_000,
        overtime: 10,
        rate: 20,
        getWage: function (){                   // TODO: the function is already included in the object, requires less parameters to use and easier to maintain
            return this.baseSalary + (this.overtime * this.rate);
        }
    };
    // console.log(employee.getWage());
    employee.getWage();






}());