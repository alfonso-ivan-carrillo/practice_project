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


});