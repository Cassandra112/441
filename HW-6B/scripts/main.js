var pictures = ["light1", "light2", "light3", "light4", "light5", "light6", "light7", "light8", "light9", "light10"];
var cardCover = "blank.jpg";
var alpha = -1;
var beta = -1;
var pointLog = 0;
var allFound = 0;

var score = 0; //needed a variable to keep track of the score
// JSON declaration
var cadet = {"firstname":"", "lastname":"", "age":0, "score":0};

// create a variable with the blank image name
// create a empty array for the actual images
var actualImages = new Array();

function exteriorCard()
{
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < pictures.length; i++)
    {

        document.getElementById(pictures[i]).src= cardCover;
    }
}

function createRandomImageArray()
{

    var actualImagePath = ["light1.jpg", "light2.jpg", "light3.jpg", "light4.jpg", "light5.jpg"];

    var count = [0,0,0,0,0,0,0,0,0,0];

    while(actualImages.length < 10)
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] +1;
        }
    }
}

function flipImage(number)
{

    if(alpha >= 0)
    {
        beta = number;
        document.getElementById(pictures[number]).src = actualImages[beta];

    }
    else if(alpha < 0)
    {
        alpha = number;
        document.getElementById(pictures[alpha]).src= actualImages[alpha];

    }

    // check to see if the images do not match
    if(actualImages[beta] != actualImages[alpha] && alpha >= 0 && beta >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
    }
    // check to see if the images do match
    else if(actualImages[beta] == actualImages[alpha] && alpha >= 0 && beta >= 0)
    {
        score++;
        allFound++;

        alpha = -1;
        beta = -1;
        if(allFound == actualImages.length/2)
        {
            // we want to get the JSON object before we update the score
            var playerInformation = localStorage.getItem("spaceCadet");
            cadet = JSON.parse(playerInformation);

            cadet.pointLog = score;
            // we just have to put the same variable back into localStorage (cadet)
            //localStorage.setItem("spaceCadet", JSON.stringify(player));
             localStorage.setItem("spaceCadet", JSON.stringify(cadet));
            window.location = "page3.html";
        }
    }
}

function imagesDisappear()
{

    console.log(alpha);
    document.getElementById(pictures[alpha]).src = cardCover;
    document.getElementById(pictures[beta]).src = cardCover;
    alpha = -1;
    beta = -1;
}

// add to the JSON from the textboxes
//could need further updating -cs
function addToPlayer()
{
    var firstName = document.getElementById("first").value;
    var lastName = document.getElementById("last").value;
    var age = document.getElementById("age").value;

    cadet.firstname = firstName;
    cadet.lastname = lastName;
    cadet.age = age; // this had a space in it after cadet.
    localStorage.setItem("spaceCadet", JSON.stringify(cadet));
    window.location = "index.html";
}

// get the information out of JSON
function spaceCadet()
{
    var playerInformation = localStorage.getItem("spaceCadet");
    cadet = JSON.parse(playerInformation);
    var str = "Name: " + cadet.firstname + " " + cadet.lastname + "<br>" +
    "Age: " + cadet.age + "<br>" +
    cadet.pointLog = score;
    // "Score: " + cadet.score;
    // probably need to change this to printLog since that is what it was called above or
    // change printLog above to score so that they match

    // just needed to get the complete id since that was the one in the div tag
    /*if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }*/
    if(document.getElementById("complete") != null)
    {
        document.getElementById("complete").innerHTML = str;
    }

}
