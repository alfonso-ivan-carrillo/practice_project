(function() {
"use strict";

var car = new Object();
console.log("car " + typeof car);
car.make = "toyota";
car["model"] = "tacoma";
car.honk = function (){
    alert("Honk! Honk!");
}
console.log(car["make"]);
console.log(car.model);
car.honk();

var heros = [{                // curly braces also creates new object
    name: "woverine",
    team: "x-men",
    powers: ["healing", "claws", "animal senses"],
    secretIdentity: {
        alias: "logan",
        job: "fighter"
    },
    action: function (){
        alert("Snkt!");
    },
    activate: function (){
        console.log("Woverline: \"You messed up bub.\" " + this.action());
    }

},
    {
    name: "deadpool",
    team: "x-force",
    powers: ["healing", "weapons master", "humor"],
    secretIdentity: {
        alias: "wade",
        job: "merc"
    },
    action: function () {
        alert("Pow Pow!");
    },
    activate: function (){
        console.log("Deadpool: \"Ha Ha!\" " + this.activate());
    }
}];
console.log("The name of the first hero is " + heros[0].name + ".");
console.log("The name of the second hero is " + heros[1].name + ".");

heros.forEach(function (hero){
    console.log(hero.name + " : " + hero.team);
})
heros.forEach(function (hero){
    hero.powers.forEach(function (power){
        console.log(power);
    })
})
    // heros[0].action();
    // heros[1].action();
heros[0].activate();




    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
    firstName: "Alfonso",
    lastName: "Carrillo",
    sayHello: function (){
        console.log("Hello from " + this.firstName + " " + this.lastName + ".");
    }
}
console.log(person.firstName + " " + person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

function hebDiscount(){
    var discount = .12;
    shoppers.forEach(function (shopper){
        if (shopper.amount >= 200){
            console.log(shopper.name + " qualified for a discount of 12%. He paid $" + shopper.amount + " but after discount is applied the shopper will pay $" + (shopper.amount - (shopper.amount * discount)).toFixed(2) + ".");
        } else {
            console.log(shopper.name + " did not qualify for a discount. The shopper will pay the full price of $" + shopper.amount + ".");
        }
    })
}
hebDiscount();

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

var books = [{
        title: "The Road",
        author: {
            firstName: "Cormac",
            lastName: "McCarthy"
        }
    },
    {
        title: "Fight Club",
        author: {
            firstName: "Chuck",
            lastName: "Palanhck"
        }
    },
    {
        title: "A Game of Thornes",
        author: {
            firstName: "George",
            lastName: "Martin"
        }
    },
    {
        title: "The First Law",
        author: {
            firstName: "Joe",
            lastName: "Abercombie"
        }
    },
    {
        title: "John Dies at the End",
        author: {
            firstName: "James",
            lastName: "Wong"
        }
    }];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
for (var i = 0; i < books.length ; i++){
    console.log("Book # " + (i+  1) + "\nTitle: " + books[i].title + "\nAuthor: " + books[i].author.firstName + " " + books[i].author.lastName);
        // console.log("Title: " + books[i].title);
        // console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
var bookCollection = [];  // create an array to store books created from function
function createBook(title, author){
    var authorName = author.split(" ");     // split author's name since it stored as an object
    var book = {
        title: title,
        author: {
            firstName: authorName[0],       // since author's name was split into an array, access value as an array object
            lastName: authorName[1]
        }
    }
    return bookCollection.push(book);
}

createBook("No Country for Old Men", "Cormac McCarthy");
createBook("Clash of Kings", "George Martin");
console.log(bookCollection);

function showBookInfo(books){
    for (var i = 0; i < books.length; i++){
        console.log("Book # " + ( i + 1)  + "\nTitle: " + books[i].title + "\nAuthor: " + books[i].author.firstName + " " + books[i].author.lastName );
    }
}
showBookInfo(books);




})();