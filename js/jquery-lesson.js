"use strict"


//todo      $('selector') is the same as jQuery('selector')  -- $ is commonly used shorthand for jQuery
//todo      All selector expressions return us a jQuery object, which is just an object that represents zero or more HTML elements, with all of the methods of jQuery attached to it.
//todo      ID Selector -- Syntax for jQuery id Selector is $('#some-id');
//todo      CLASS Selector -- Syntax for jQuery class Selector is $('.some-class');
//todo      Element Selector -- $('tag-name');
//todo      Multiple Selectors -- $('selector1, selector2');
//todo      To Select All Elements on a page -- $('*');


$(document).ready(function (){
   alert("Page is loaded");


   let title = $('#pearlJam').html();     //todo   The jQuery .html() is similar to JavaScript innerHTML - returns the html contents of selected element or the first element in a collection.
   alert(title);

   $('.pearlTitle').css('background-color', 'orange');      //todo   The jQuery .css selector is similar to JavaScript style property.

   $('li').css('color', 'navy');

   $('h1, h2, p').css('color', 'brown');

   $('*').css('font-weight', 'bold');

   // let testV = $('#jqSelector').html();
   // console.log(testV);
   // alert(testV);


   //todo   jQ Selector

   let jqSelector = document.getElementById('jqSelector');
//todo   notice if you getElementById, when using jQuery to select/manipulate element, don't place withing "quotes".
   $(jqSelector).html("<h5>jQuery</h5>");

   //todo   JS Selector
   let jsSelector = document.getElementById('jsSelector');
   jsSelector.innerHTML = "<h3>Hello World!</h3>";

   //todo   Using JS to insert a new element after another with he native DOM API.
   // let firstH1 = document.getElementById("firstH1");
   // let newElement = document.createElement('hr');
   // firstH1.parentNode.insertBefore(newElement, firstH1.nextSibling);

   //todo   Using jQuery to insert a new element (same example as above).
   let target = document.getElementById("firstH1");
   let newElement = document.createElement("hr");
   $(target).after(newElement);











});