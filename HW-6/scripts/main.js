var pictures = ["light1", "light2", "light3", "light4", "light5", "light6", "light7", "light8", "light9", "light10"];
var cardCover = "blank.jpg";
var alpha = -1;
var beta = -1;
var pointLog = 0;
var allFound = 0;
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
          // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] +1;
        }
    }
}

function flipImage(number)
{

    // make the second image appear
    if(alpha >= 0)
    {
        beta = number;
        document.getElementById(pictures[number]).src = actualImages[beta];

    }
    else if(alpha < 0) // make the first image appear
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
            cadet.pointLog = score;
            localStorage.setItem("spaceCadet", JSON.stringify(player));
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
function addToPlayer()
{
    var firstName = document.getElementById("first").value;
    var lastName = document.getElementById("last").value;
    var age = document.getElementById("age").value;

    cadet.firstname = firstName;
    cadet.lastname = lastName;
    cadet .age = age;
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
    "Score: " + cadet.score;
    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }

}
