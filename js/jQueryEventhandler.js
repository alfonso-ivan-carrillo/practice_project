"use strict";

$(document).ready(function (){
    alert("Page is loaded.");

    $('li').css('list-style-type', 'none');

//todo  .clck()
    $('#villainsHeader').click(function (){
        $('#villainsHeader').html("Killer Characters");
    });

    let anton = $('li').eq(0);
    anton.click(function (){
        anton.html("No Country for Old Men");
    });

    let bill = $('li').eq(1);
    bill.click(function (){
        bill.html("Gangs of New York");
    });

//todo  .dblclick()
    let agent = $('li').eq(2);
    agent.dblclick(function (){
        agent.html("The Matrix");
    });


//todo  .hover() event handler combines two other event handlers: MOUSEENTER and MOUSELEAVE
//todo      $(selector).hover(handlerIn, handlerOut); same as $(selector).mouseenter(handleIn); and $(selector).mouseleave(handlerOut);
    $('#antonImage').hover(
        function (){
            $(this).attr('src', 'images/chigurgh-dof.jpg');     //todo  .attr() - manipulates an elements attribute
        }, function (){
            $(this).attr('src', 'images/antonChigurh.jpeg');
        }
    );

    $('#billImage').hover(
        function (){
            $(this).attr('src', 'images/butcher-bill.webp');
        }, function (){
            $(this).attr('src', 'images/bill-flag.jpeg');
        }
    );

    $('#smithImage').hover(
        function (){
            $(this).attr('src', 'images/agent-smith-fan.jpeg');
        }, function (){
            $(this).attr('src', 'images/agent-smith-matrix.webp');
        }
    );

//todo  toggle images
    $('.hereditaryImage').click(function (){    //todo  grab class .hereditaryImage - 2 images on html - 1 displayed and other hidden - use .toggle to switch back and forth (display one and hide the other)
        $('img', this).toggle();
    });












});