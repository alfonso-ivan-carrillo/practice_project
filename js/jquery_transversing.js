"use strict";

$(document).ready(function (){


$('#highlightBtn').click(function (){
    $('.liList').toggleClass('highlight');
});

$('h3').click(function (){
    $(this).next().toggleClass('bolder');
});

$('li').click(function (){
    $(this).parent().children().first().toggleClass('blued');
});

    // console.log($('li').first().css('color', 'blue'));

$('.frame').click(function (){
    let currentFrame = $(this).children('img').attr('src');                     //captures image clicked on
    // $('#empty').attr('src', currentFrame).css('width', '400px');

    if($(this).is(':first-child')){                                             //checks to see if the box clicked on is the Box One or first frame
        let nextFrame = $(this).next('.frame').children('img').attr('src');     //captures image of the frame/box to the right, the next one
        $(this).children('img').attr('src', nextFrame);                         // setting the image clicked on to the image to the right
        $(this).next('.frame').children('img').attr('src', currentFrame);       // sets the image of the first box to the next box

        $('#empty').attr('src', nextFrame).css('width', '400px');
    } else if ($(this).is(':last-child')){
        let prevFrame = $(this).prev('.frame').children('img').attr('src');     //captures previous box image

        $(this).children('img').attr('src', prevFrame);                         //sets frame clicked on as previous image
        $(this).prev('.frame').children('img').attr('src', currentFrame);       //sets prev frame with clicked on image

        $('#empty').attr('src', prevFrame).css('width', '400px');
    } else if($(this).next().is(":last-child")){

        console.log('no');
        let testNo = Math.round(Math.random());
        console.log(testNo);
        if(testNo == 0){
            let prevFrame = $(this).prev('.frame').children('img').attr('src');
            $(this).children('img').attr('src', prevFrame);
            $(this).prev('.frame').children('img').attr('src', currentFrame);
            $('#empty').attr('src', prevFrame).css('width', '400px');
            console.log('0');
        } else {
            let nextFrame = $(this).next('.frame').children('img').attr('src');
            $(this).children('img').attr('src', nextFrame);
            $(this).next('.frame').children('img').attr('src', currentFrame);
        }


    }


});











});