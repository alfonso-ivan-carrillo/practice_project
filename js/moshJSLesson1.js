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
            radius: radius,
            draw: function (){
                console.log('Draw One');
            }
        };
    }
    const circleFactory = createCircle(1);
    circleFactory.draw();
    console.log(circleFactory.radius);

    // todo Constructor Function
    function Circle(radius){
        this.radius = radius;                           // todo -->  this.  refers to the circle object being created
        this.draw = function (){
            console.log("Constructor Circle");
        }                                               // todo --> no return is needed, automatically done with constructor
    }
    const circleConstruct = new Circle(1);      // todo --> new  keyword initializes a new circle object and does not refer to the global or window object
    circleConstruct.draw();


}());