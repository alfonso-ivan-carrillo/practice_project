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
        return {
            radius: radius,
            draw: function (){
                console.log('Draw One');
            }
        };
    }
    const circleOne = createCircle(1);
    circleOne.draw();
    console.log(circleOne.radius);


}());