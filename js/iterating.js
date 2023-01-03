(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["ethan", "kathy", "bella", "sweet pea", "buster", "jack jack"];
    var superheros = ["wolverine", "deadpool", "captain america", "domino", "juggernaut", "hellboy"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    console.log(superheros.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; i++){

        console.log("index number: " + i + " - names: "+ names[i]);
    }

    for (var i = 0; i < superheros.length; i++){
        console.log("Superhero names: " + superheros[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function (name){
        console.log("My name is " + name);
    })

    superheros.forEach(function (hero){
        console.log(hero);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function firstElement(array){
        console.log("First element in array is " + array[0] + ".");
    }
    firstElement(names);
    firstElement(superheros);

    function secondElement(array){
        console.log("Second element in array is " + array[1] + ".");
    }
    secondElement(names);
    secondElement(superheros);

    function lastElement(array){
        console.log("Last element in araay is " + array[array.length - 1] + ".");
    }
    lastElement(names);
    lastElement(superheros);

})();