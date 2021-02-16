var imageLight = ["lighta", "lightb", "lightc", "lightd", "lighte", "lighta2", "lightb2", "lightc2", "lightd2", "lighte2"];

var blankImagePath = "images/blank.jpeg";

var actualImages = new Array();

function printBlanks()
{
    createRandomImageArray();

    for(var i = 0; i < imageLight.length; i++)
    {
      document.getElementById(imageLight[i]).src= blankImagePath;
    }

}

function createRandomImageArray()
{
    var actualImagePath = ["images/lighta.jpg", "images/lightb.jpg", "images/lightc.jpg", "images/lightd.jpg", "images/lighte.jpg"];
    var count = [0,0,0,0,0,0,0,0,0,0];
    while(actualImages.length < 10)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 5)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
  }
