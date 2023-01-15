"use strict";

// Immediately-Invoked Function Expression (IIFE)

(function (){

//     alert("Welcome to Ethan's Picture Page.");
//
// // var registered_user = confirm("Are you a Coach?");
// //
// // if (registered_user == true){
// //     alert("Great!");
// //     var coach_email = prompt("Please enter your email address.");
// //     console.log(coach_email);
// // } else {
// //     alert("Thank you for visiting!");
// // }
//
//     function coachEmail(){
//         var coach = confirm("Are you a coach?");
//         if (coach == true){
//             alert("Great!");
//             var coachEmail = prompt("Please enter your email address");
//             console.log(coachEmail);
//             alert(coachEmail);
//         } else {
//             alert("Thank you for visiting!");
//         }
//     }
//
//     coachEmail();


    var futbolTeams = [
        {name: 'Barcelona', league: 'La Liga'},
        {name: 'Liverpool', league: 'Premier League'},
        {name: 'PSG', league: 'Le Ligue 1'},
        {name: 'Porto', league: 'Liga Portugal'},
        {name: 'Manchester City', league: 'Premier League'},
        {name: 'Real Madrid', league: 'la Liga'},
        {name: 'Benfica', league: 'Liga Portugal'},
        {name: 'Marseille', league: 'Le Ligue 1'},
        {name: 'Bayern', league: 'Bundesliga'},
        {name: 'Dortmund', league: 'Bundesliga'},
        {name: 'Wolfsburg', league: 'Bundesliga'},
        {name: 'Ajax', league: 'Eredivise'},
        {name: 'FC Volendam', league: 'Eredivise'},
        {name: 'Chelsea FC', league: 'Premier League'},
        {name: 'Austin FC', league: 'MLS'},
        {name: 'SAFC', league: 'USL Championship'},
        {name: 'Oakland Roots', league: 'USL Championship'},
        {name: 'Rangers', league: 'Scottish Premiership'},
        {name: 'Shamrock Rovers FC', league: 'League of Ireland'}
    ];

    function displayFutbolTeams(array){
        var html = "<div class='row'>";
        html += "<div><h2>" + array.name + "</h2></div>";
        html += "<div><small>" + array.league + "</small></div>";
        html += "</div>";

        return html;
    }

    function renderFutbolTeams(array){
        var html = " ";
        array.forEach(function (element){
            html += displayFutbolTeams(element);
        })
        return html;
    }

    function searchTeams(){
        var filteredTeams = [];
        var teamInput = inputTeam.value;
        var teamInputLowerCase = teamInput.toLowerCase();
        console.log(teamInputLowerCase);
        futbolTeams.forEach(function (team){
            console.log(team);
            // if (teamInputLowerCase.includes(team.toLowerCase())){
            //     console.log(team);
            // }
        })

    }


    var futbolDisplay = document.getElementById("futbolDisplay");
    futbolDisplay.innerHTML = renderFutbolTeams(futbolTeams);

    var inputTeam = document.getElementById("inputTeam");
    inputTeam.addEventListener("keyup", searchTeams);

})();