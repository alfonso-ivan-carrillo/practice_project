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
//  (special note for self - when targeting button for click, make sure html button has type attribute defined
    $('#removeBtn').click(function (){
        $('.oddP').removeClass('oddP');
    });

//todo .toggleClass() - toggle between class - even class present on element, then toggle will remove class, if not present will add class
//  (special note for self - when targeting button for click, make sure html button has type attribute defined
    $('#toggleBtn').click(function (){
        $('.oddP').toggleClass('highlighted');
    });

//todo exercise - toggle on off class for dd elements
    $('#toggleOnOff').click(function (){
       $('dd').toggleClass('invisible');
    });

//todo bonus - "highlight" dt elements as they are clicked - the "this" keyword targets each element as it is clicked
    $('dt').click(function (){
        $(this).css('background-color', 'yellow');
    })


//todo  .each() jQuery method - similiar to forEach loop - two parameters available, index and element
    $('li').each(function (index){
        console.log(index);
    });

    $('li').each(function (index, element){
        console.log(element);
    });

    $('li').each(function (index){
        if(index % 2 !== 0){
            $(this).css('background-color', 'lime');
        }
    });

    $('li').each(function (index, element){
        if(index % 2 !== 1){
            $(this).css('background-color', 'yellow');
        }
    });

//todo  .first() - reduce the set of matched elements to the first in the set.
    $('li').first().css("font-weight", "bold").css('font-size', '20px');

//todo  .last() - reduce the set of matched elements to the last in the set.
    $('li').last().css('text-decoration', 'underline');

//todo  .children() - get the children of each element in the set of matched elements, optionally filtered by a selector.
// .children([selector(optional)])
    $('#pillarsList').children().css('text-transform', 'uppercase');

//todo  .parent() - get the parent of each element in the current set of matched elements, optionally filtered by a selector.
// .parent([selector](optional) and .parents([selector](optional))
// .parent() will return only elements one set up the DOM, .parents() will travel completely up the DOM tree.
    $('li').parent().css('background-color', 'magenta')







});