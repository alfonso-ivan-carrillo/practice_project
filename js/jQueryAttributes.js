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


//todo  .html() is similar to innerHtml()
    $('#secondaryHeader').click(function (){
        $(this).html("<h1>.innerHtml()</h1>");
    });

//todo  .text() is similiar to innerText()
    $('#thirdHeader').click(function (){
        $(this).text(".innerText");
    });

//todo  you can retrieve the value of an attribute using the .css('attribute')
    $('#forthHeader').click(function (){
        alert($(this).css('width'));
    });
//todo  .css() can also manipulate properties
    $('h4').css('color', 'orange');

//todo  .css() you can chain them to manipulate multiple properties
    $('h1').css('color', 'skyblue').css('font-size', '75px');

//todo  pass object to change css properties
    $('#passObject').click(function (){
        $(this).css({
            'color': "orange",
            'background-color': 'black'
        });
    });

    $('#passObject').css({
        'color': 'firebrick',
        'background-color': 'papayawhip'
    });

//todo  define object beforehand then use to change css properties
    let highlightStyles = {
        'color': 'red',
        'background-color': 'yellow',
        'font-size': '50px'
    };
//todo  pass object into .css(object)
//     $('#defineObject').css(highlightStyles);

    $('#defineObject').click(function (){
        $(this).css(highlightStyles);
    });

//todo  .addClass() - add class to elements or add an additional class to an element

    $('.pHeader').click(function (){
        $('.evenP').addClass('highlighted');
    });

//todo  .removeClass() - remove class to elements
    $('#removeBtn').click(function (){
        $('.oddP').removeClass('oddP');
    });















});