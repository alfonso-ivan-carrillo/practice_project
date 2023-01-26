"use strict";


(function (){

    var coaches = [{
        id: 0,
        name: "David Bauer",
        college: "Schreiner University"
    },{
        id: 1,
        name: "Brady Van Holland",
        college: "LeTourneau University"
    }, {
        id: 2,
        name: "Matt Pitcock",
        college: "Hardin-Simmons University"
    }];



    function helloCoach(){
        let tempArray = [];

        let tempCoachObject = {
            id: "",
            name: "something",
            college: "somethingU"
        }

        alert("Welcome to the Coach's Corner!");
        let inputName = prompt("name");

        let inputCollege = prompt("college");
        tempCoachObject.id = coaches.length + 1;
        tempCoachObject.name = inputName;



        tempCoachObject.college = inputCollege;
        coaches.push(tempCoachObject);

        console.log(coaches);
    }

    helloCoach();



}());




