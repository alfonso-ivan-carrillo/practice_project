"use strict";

(function (){

// TODO: OOP Pilliars - Encapsulation, Abstraction, Inheritance and Polymorphism


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



// TODO: Abstraction - benefits makes interaction of objects easier to interface and it helps reduce the impact of change. To abstract something away means to hide away the implementation details inside something (the complex methods or moving parts). So when you call the function you don't have to understand exactly what is doing. An example is: The APPEND and INSERT methods of your data structures. Instead of calling keep_going_until_you_find_a_node_that_is_nil_and_create_a_new_node_and_fill_with_this_data, we can call APPEND or INSERT.

// todo: Encapsulation - means wrapping up data and methods together into a single unit like a class. It is also built on the idea of data hiding. The variables of a class will be hidden from other classes and can be accessed only through the methods of their current class. This is mostly for safety, so we do not have something that inadvertently changes the property of an object. We are encapsulating our properties within the object, and we can do that by setting our properties to private. We can provide public setter and getter methods to modify certain properties of a class.

//TODO: Inheritance - is a mechanism to alow you to get rid of redundant code - Child Classes with inherit all of the behavior and attributes of the parent class.
// example of Inheritance -  each html element has similar properties such as hidden or innerHTML or like click(), instead of defining each for each element, you can group these into a parent class, like HTMLElement and then have other elements such as <textbox>, <select> or <checkbox>, inherit from the HTMLElement and be abuse to use these properties/methods.

// TODO: Polymorphism - Call the same method on different objects - example: petting zoo, you can pet all the animals but you can pet them the same way, so you would pet a dog differently than you would a porcupine. You could create a Method to PET an animal, PET(){return petAnimal};, and with polymorphism, you could reuse the the PET Method to another another animal, PET(porcupine){ var glove = true, return petAnimal};.  ---- element.pet()  -- porcupine.pet();







}());