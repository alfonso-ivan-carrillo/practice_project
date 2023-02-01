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

//todo  Bonus exercise
// using traversing learned in lesson

$('.frame').click(function (){
    //   Capture image clicked on - saves it in a variable - currentFrame
    let currentFrame = $(this).children('img').attr('src');

    // checks if the image clicked on is the first image of the set of three
    if($(this).is(':first-child')){
        // captures next image in the nextFrame variable (middle image)
        let nextFrame = $(this).next('.frame').children('img').attr('src');
        // the captured image is set as the image
        $(this).children('img').attr('src', nextFrame);
        // sets the first image as the next frame's image
        $(this).next('.frame').children('img').attr('src', currentFrame);

    // checks if the image clicked on is the last image of the set of three
    } else if ($(this).is(':last-child')){
        // captures previous frame's image (middle image)
        let prevFrame = $(this).prev('.frame').children('img').attr('src');
        // the captured image is set as the image
        $(this).children('img').attr('src', prevFrame);
        // sets the middle fram's image as the last image of the set
        $(this).prev('.frame').children('img').attr('src', currentFrame);

    // checks if the image clicked on is the middle frame
    } else if($(this).next().is(":last-child")){
        // set a variable to capture a random number generated by the method and rounded
        let testNo = Math.round(Math.random());
        // console.log(testNo);
        // if random number is 0 the frame will switch images to the left
        if(testNo == 0){
            // captures previous frame's image (first or left frame)
            let prevFrame = $(this).prev('.frame').children('img').attr('src');
            // sets middle frame's image as the first/left image
            $(this).children('img').attr('src', prevFrame);
            // sets the first/left frame with the middle image
            $(this).prev('.frame').children('img').attr('src', currentFrame);

        } else {
            // if random number generated is a 1, will switch images to the right
            // captures last/right image from the set into a variable
            let nextFrame = $(this).next('.frame').children('img').attr('src');
            // sets last/right image in the middle frame
            $(this).children('img').attr('src', nextFrame);
            //sets middle image to the last frame
            $(this).next('.frame').children('img').attr('src', currentFrame);
        }
    };
});


//todo practice bonus
    $('.boxes').click(function (){
        let currentBox = $(this).children('img').attr('src');
        console.log(currentBox);

        if ($(this).is("#boxOne")){
            let middleBox = $(this).next('.boxes').children('img').attr('src');
            $(this).children('img').attr('src', middleBox);
            // $(this).next('.boxes').children('img').attr('src', currentBox);
            $('#boxTwo').children('img').attr('src', currentBox);
        } else if ($(this).is('#boxThree')){
            let middleBox = $(this).prev('.boxes').children('img').attr('src');
            $(this).children('img').attr('src', middleBox);
            $('#boxTwo').children('img').attr('src', currentBox);
        } else {
            let randomNum = Math.round(Math.random());
            if (randomNum == 0){
                let leftBox = $('#boxOne').children('img').attr('src');
                $(this).children('img').attr('src', leftBox);
                $('#boxOne').children('img').attr('src', currentBox);
            } else {
                let rightBox = $('#boxThree').children('img').attr('src');
                $(this).children('img').attr('src', rightBox);
                $('#boxThree').children('img').attr('src', currentBox);
            }
        }
    });










});