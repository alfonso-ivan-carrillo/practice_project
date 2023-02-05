"use strict";

$(document).ready(function (){


//todo      es6 examples

    console.log(Math.pow(2, 8));
    console.log((2 ** 8));

//todo      use LET instead of VAR
    var oldVar = "old variable";
    let newVar = "new variable";

    console.log(oldVar);
    console.log(newVar);


//todo      Blocked scoped variables / use let or const
    if(true){
        var myName = 'codeup';
    };
    console.log(myName);        //console logs "codeup"

    if(true){
        const testName = 'codeup;'
    };
// console.log(testName);      // console log -->  undefined due to scope

    for(var i = 0; i < 10; i++){

    }
    console.log(i);

    for(let j = 0; j < 10; j++){

    }
//  console.log(j);             // console log --> undefined due to scope


//todo      Allows interpolation in strings   ${}

    const name = 'anton';
    var bill = 'butcher';

    console.log("crazy " + name + "!");
    console.log("butcher " + bill + "!");

    console.log("crazy ${name}!");     //should allow but not using correct JS  -- crazy anton!
    console.log("butcher ${bill}");     //should allow but not using correct JS -- butcher bill!

//todo      for....of       works with NodeLists - can also use CONST instead of LET
    for(let e of name){
        console.log(e);
    };


//todo      ARROW FUNCTIONS
    function sayHelloOld(name){
        return 'Hello, ' + name + "!";
    };
    const sayHello = function (name){
        return 'Hello, ' + name + "!";
    };
    //same as
    const sayHello1 = (name) => "Hello, " + name + "!";

    //parentheses can be omitted if there is only one argument
    const sayHello2 = name => 'Hello, ' + name + "!";

    const sayHello3 = (name) => {
        const greeting = "hello, " + name + "!";
        return greeting;
    };

    console.log(sayHelloOld(name));
    console.log(sayHello(name));
    console.log(sayHello1(name));
    console.log(sayHello2(name));
    console.log(sayHello3(name));

//todo      Default Function Parameter Values
    function sayHello4(name) {
        if (typeof name === "undefined"){
            name = "world";
        }
        return "Hello, " + name + "!";
    };

    console.log(sayHello4());       // "Hello, World!"
    console.log(sayHello4(name));   // "Hello, anton!"

    function sayHello5(name = "World"){
        return "Hello, ${name}!";
    };

    console.log(sayHello5());       // "Hello, World!"
    console.log(sayHello5(name));   // "Hello, anton!"

// with arrows
    const sayHello6 = (name = "World") => 'Hello, ${name}!';

    console.log(sayHello6());       //  "Hello, World!"
    console.log(sayHello6(name));   //  "Hello, anton!"


//todo      object property variable assignment shorthand
    //old way
    const nameCode = 'codeup';
    const person = {
        name: nameCode,
        age: 4,
    };

//todo      shorthand with es6
    const peron1 = {
        nameCode,
        age: 4,
    };


//todo      Object Destructuring
    //old way
    var man = {name: 'billy', age: 5};
    var manName = man.name;
    var manAge = man.age;
    console.log(manName);   // billy
    console.log(manAge);    // 5
    //new way - need to use updated javascript
    const woman = {nombre: "betty", age: 6};
//    const {nombre, age} = womanOne;
//    console.log(womanOne.nombre);   // betty
//    console.log(womanOne.age);      // 6

//todo      Array
console.log('**********************')
    const myArray = [0, 1, 2, 3, 4, 5];
    const [x, y, z] = myArray;
    console.log(x);     //takes first index an assigns to x
    console.log(y);     // takes second index an assigns to y
    console.log(z);

//todo esjs exercises



});