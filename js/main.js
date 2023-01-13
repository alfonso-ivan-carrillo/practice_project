"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

// function renderCoffees(coffees) {
//     var html = '';
//     // for(var i = coffees.length - 1; i >= 0; i--) {  // this renders the array in descending order due to how the loop is setup
//     for (var i = 0; i < coffees.length - 1; i++){
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

function renderCoffeeDiv(coffee){
    var html = "<div class='coffeeDiv row'>";
    // html += "<div> " + coffee.id + "</div>";
    html += "<div><h2>" + coffee.name + "</h2></div>";
    html += "<div><small>" + coffee.roast + "</small></div>";
    html += "</div>";

    return html;
}

function renderCoffeesDivs(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length - 1; i++){
        html += renderCoffeeDiv(coffees[i]);
    }
    return html;
}

function searchCoffee(){
    var filterArray = [];
    var inputedCoffee = coffeeSearch.value;
    var emptyArray = {
        name: 'something'
    };

    emptyArray.name = inputedCoffee.charAt(0).toUpperCase() + inputedCoffee.slice(1).toLowerCase();
    console.log(emptyArray);
    coffees.forEach(function (coffee){
        if (coffee.name.includes(emptyArray.name)){
            console.log(coffee);
        }

    })


}




function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffeesDivs(filteredCoffees);
}




// var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var coffeeSearch = document.getElementById("coffee-Search");

coffeeSearch.addEventListener("keyup", searchCoffee);

// tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

var coffeeDiv = document.getElementById("coffeeDiv");
coffeeDiv.innerHTML = renderCoffeesDivs(coffees);