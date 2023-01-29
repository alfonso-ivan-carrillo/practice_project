"use strict";

$(document).ready(function (){
    alert("document loaded");

    $('body').css('background-color', 'skyblue');

//todo  .html()
//     $('#primaryHeader').click(function (){
//     let primaryHeader = $('#primaryHeader').html();
//     alert(primaryHeader);
//     });
// ------------
// refactored below
    $('#primaryHeader').click(function (){
        alert($(this).html());
    });

    $('#secondaryHeader').click(function (){
        $(this).html("I know you'll be a star but in someone else's sky, but why, why can't it be in mine.");
    });















});