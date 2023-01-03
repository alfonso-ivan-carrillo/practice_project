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
    console.log(names);
    console.log(names.length);
    console.log(superheros.length);
    superheros.unshift("prof x");
    superheros.push("beast");
    console.log(superheros);
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


    var horrorMovies = ["the witch", "hereditary", "smile", "barbarian", "evil dead"];
    horrorMovies.push("day of the dead");
    console.log(horrorMovies);
    console.log((horrorMovies[horrorMovies.length - 1])); // last element in array
    var removedMovie = horrorMovies.pop();
    console.log(horrorMovies);
    horrorMovies.shift();
    console.log(horrorMovies);
    console.log(removedMovie);
    console.log(horrorMovies.indexOf("smile"));
    console.log(horrorMovies.lastIndexOf("barbarian"));
    var partOne = horrorMovies.slice(1,3);  // starts at index 1 (includes it) ends at index 3 but doesnt include it
    console.log(partOne);
    var nums = [1, 2, 3, 4, 5];
    console.log(nums);
    nums.reverse();
    console.log(nums);
    nums.sort();
    console.log(nums);

    var movieString = "deadpool,wolverine,xmen";
    console.log(movieString);
    var movieArray = movieString.split(',');
    console.log(movieArray);
    var backToString = movieArray.join(',');
    console.log(backToString);

})();