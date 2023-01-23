"use strict";

(function (){

//todo -- used to highlight comments
//todo -- First section creates an alert welcoming user and asking if they are a coach, if so asks for them to enter an email
function captureEmail(){
    alert("Welcome to Ethan's Soccer Page!");
    var coach;
    coach = confirm("Are you a coach?");  // confirm will return a boolean value
    if(coach == true){
        var coachEmail = prompt("Please enter your email?");
        console.log(coachEmail);
        return(coachEmail);
    } else {
        alert("That's ok, welcome!");
    }
    // var emailOutput = (coach) ? console.log("Great!") : console.log("nope");
}

    // captureEmail();
//todo ---------------------------------------------------------------------------------------
//todo      code is a switch asks about the users favorite futbol team and provides a response
function favoriteTeam(){
    var futbolTeam = prompt("What's your favorite futbol team?");

    switch (futbolTeam){
        case "barca":
            alert("Barca! Barca! Barca!");
            break;
        case "liverpool":
            alert("You never walk alone.");
            break;
        case "real madrid":
            alert("Get out of here!");
            break;
        default:
            alert("You should reconsider.")
            break;
    }
}
    // favoriteTeam();
//todo(ignore) -------------------------------------------------------------------------------
//todo      Create an empty array to store coach's name and email captured by code below
var coachInfo = [];


//todo      Code creates an 2 alerts to capture name of coach and email, renders coach's name into html and pushes coach name and email into empty array
function captureCoachInfo(){
    var name = prompt("Hello Coach, please enter your name.");
    var email = prompt("Please enter your email, we promise not to send you to many emails.");
    var coach = {
        name: name,
        email: email
    }

    var divTag = document.createElement("h1");
    var newContent = document.createTextNode( "Welcome Coach, " + name + ".");
    divTag.appendChild(newContent);
    var docCore = document.getElementById("myCarousel");
    document.body.insertBefore(divTag, docCore);

    return coachInfo.push(coach);
}


// captureCoachInfo();
// console.log(coachInfo);
//todo      function creates a loop, deploys captureCoachInfo() function and asks if the user would like to enter additional coach info
function doCapture(){
    var again = "yes";
    do {
        captureCoachInfo();

        again = prompt("Would you like to enter another coaches' info? (yes/no)").toLowerCase();
    } while (again == "yes")
    console.log(coachInfo);
}
doCapture();


//todo  for 5year old Ethan Card
//todo  Grabs html elements

var eycParagraph = document.getElementById('eycParagraph');
var eycBtn = document.getElementById('eycBtn');

//todo  changes wording in card when 'summary' button clicked
var eycParagraphChange = function (event){
    eycParagraph.innerHTML = "Ethan soccer career began at the age of 5 years old."
}

//todo  Function to select pictures when html select input and button submitted
function imagesSelector(e){
    e.preventDefault();
    console.log(myPic.hasAttribute("src"));
    var selectedImage = picSelector.value;
    selectedImage = Number(selectedImage);
    console.log(selectedImage);
    console.log(typeof (selectedImage));
    if(selectedImage == 1){
        myPic.hasAttribute("src");
        myPic.setAttribute("src", "images/ethan_levante.jpeg");
    } else if (selectedImage === 2){
        myPic.hasAttribute("src");
        myPic.setAttribute("src", "images/ethan_virginiashowcase.jpeg");
    } else if (selectedImage === 3){
        myPic.hasAttribute("src");
        myPic.setAttribute('src', 'images/valencia-ethan.jpeg');
    }
}

//todo  Grabs elements to manipulate images
var myPic = document.getElementById('myPic');
var picSelector = document.getElementById('picSelector');
var picSubmitBtn = document.getElementById('picSubmitBtn');

picSubmitBtn.addEventListener('click', imagesSelector);


eycBtn.addEventListener('click', eycParagraphChange);


var eycImage = document.getElementById('eycImage');
var eycBtn2 = document.getElementById('eycBtn2');
var imageChange = function (event){
    console.log(eycImage.hasAttribute("src"));
    eycImage.setAttribute("src", "images/ethan_levante.jpeg");
}

eycBtn2.addEventListener('click', imageChange);



})();
