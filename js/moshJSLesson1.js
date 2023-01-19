"use strict";

(function (){
    // Using todo to highlight comments
    // todo -> Object Literals
    let circle = {
        radius: 1,
        location: {
            x: 1,
            y: 1
        },
        draw: function (){
            console.log('draw');
        }
    };

    circle.draw();
    console.log(circle.location);
    console.log(circle.radius);

    // todo -> Factories - or constructor function
    function createCircle(radius){
        return {                                    // todo --> if the function returns an object, then you are using a factory
            radius: radius,     //todo   takes parameter and adds it to the radius value
            draw: function (){
                console.log('Draw One');
            }
        };
    }
    const circleFactory = createCircle(1);
    circleFactory.draw();
    console.log(circleFactory.radius);

    // todo Constructor Function
    function Circle(radius){                            // todo -->  notice capitalization of 'circle'
        this.radius = radius;                           // todo -->  this.  refers to the circle object being created
        this.draw = function (){
            console.log("Constructor Circle");
        }                                               // todo --> no return is needed, automatically done with constructor
    }

    const circleConstruct = new Circle(1);      // todo --> new  keyword initializes a new circle object and does not refer to the global or window object
    // todo ->    const circleConstruct = new Circle(1); same as using the CALL method to create a new circle object  -- Circle.call({}, 1);
    circleConstruct.draw();




    console.log(circleConstruct.constructor);
    console.log(circleFactory.constructor);

    console.log(Circle.name);
    console.log(Circle.length);
    console.log(Circle.constructor);

                // todo -> Notice 'Function' is capitalized to call internal function that creates objects
    // const CircleTest = new Function("radius",
    //     `this.radius = radius;
    //     this.draw = function(){
    //     console.log('internal object constructor used to draw')
    //     };`
    // );
    //
    // const newCircle = new CircleTest(1);
    // newCircle.draw();
    // console.log(newCircle);

// todo     Primitives are copied by their value
    let a = 10;
    let b = a;

    a = 20;

    console.log("a = " + a);
    console.log("b = " + b);

// todo     Objects are copied by their reference
    let c = {value: 10};
    let d = c;

    c.value = 20;

    console.log(c);
    console.log(d);

// todo     Primitives are copied by their value.

    let number = 10;
    function increase(number){
        number++;
    }
    increase(number);
    console.log(number);    // logs 10 in console, parameter 'number' in function is out of scope

// todo     Objects are copied by their reference.
    let obj = {value: 10};

    function increaseObj(obj){
       obj.value++;
    }
    increaseObj(obj);
    console.log(obj);


    function Square(side){
        this.side = side;
        this.area = Math.pow(side, 2);
    }

    let squareOne = new Square(10);
    console.log(squareOne.side);
    console.log(squareOne.area);

//todo you can add properties to an object on the fly in JS, if were using Java would have to adjust CLASS
    squareOne.color = { color: "green"};
    squareOne['border-color'] = {borderColor: 'red'};   //todo use the Bracket Notation if property has special characters or spaces

    console.log(squareOne);
    console.log(squareOne['border-color']);

//todo you can also delete properties
    delete squareOne.color;
    delete squareOne['border-color'];
    console.log(squareOne);


//todo  Enumerating Properties  --> for in loop
    for (let key in squareOne){
        console.log(key, squareOne[key]);   //todo    key gives you name of properties  object[key] gives you value of properties
    }

    const keys = Object.keys(squareOne);    //todo     returns properties of object as an array, note you cannot get values with this method
    console.log(keys);

//todo      to check if an object has a property use the 'in' operator
    if ('area' in squareOne){
        console.log("this has an area");
    }

//todo      abstraction  -  hide the details/show only the essentials

function Triangle(length, width){
    let color = 'red';            //todo you can make a value private or inaccessible by declaring a variable within the function / limits public interaction/helps with abstraction
    let area = function (x, y){     //todo equivalent to making a private variable in java
        let area = x * y;
        return area;
    }
    this.length = length;
    this.width = width;
    this.area = function (){
        area = (this.width * this.length);
        console.log(area);
    }
    this.borderColor = color;
    this.draw = function (){
        console.log("draw triangle");
    }
}


    let triangleOne = new Triangle(5, 3);
    triangleOne.draw();
    triangleOne.area();








}());