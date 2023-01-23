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
        {name: 'Real Madrid', league: 'La Liga'},
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
        // to store search results, then used to display
        var filteredTeams = [];
        // captures value of inputted keyed by user and stores in a new variable
        var teamValue = inputTeam.value;
        // created object to format results pushed into filteredTeams array must be done in order for above functions to be able to format and display correctly
        var teamObject = {
            name: 'teamNamePlaceHolder'
        }

        // capitalizes first letter of word keyed and stores in teamObject for comparison
        teamObject.name = teamValue.charAt(0).toUpperCase() + teamValue.slice(1);  // how to make case insensitive? check on it

        futbolTeams.forEach(function(team){     // iterates through array
            if (team.name.includes(teamObject.name)){                  // checks if team.name includes any letters keyed by user
                for (var i = 0; i < team.name.length; i++){
                }
                filteredTeams.push(team);
            }
        });
        futbolDisplay.innerHTML = renderFutbolTeams(filteredTeams);
    }

    function leagues(e){
        e.preventDefault();
        var displayedLeague = [];
        var selectedLeague = leagueSelection.value;
        futbolTeams.forEach(function (team){
            if (team.league == selectedLeague){
                displayedLeague.push(team);
            } else if (selectedLeague == "all"){
                displayedLeague.push(team);
            }
        });
        futbolDisplay.innerHTML = renderFutbolTeams(displayedLeague);
    }

    // to display futbol teams on html
    var futbolDisplay = document.getElementById("futbolDisplay");
    futbolDisplay.innerHTML = renderFutbolTeams(futbolTeams);

    var inputTeam = document.getElementById("inputTeam");
    inputTeam.addEventListener("keyup", searchTeams);

    var leagueSelection = document.getElementById('leagueSelection');
    var leagueSubmitBtn = document.getElementById('submitLeague');

    leagueSubmitBtn.addEventListener('click', leagues);




})();