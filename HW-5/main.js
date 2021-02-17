var imageLight = ["light1", "light2", "light3", "light4", "light5", "light6", "light7", "light8", "light9", "light10"];

var blankImagePath = "blank.jpg";

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
    var actualImagePath = ["light1.jpg", "light2.jpg", "light3.jpg", "light4.jpg", "light5.jpg"];
    var count = [0,0,0,0,0,0,0,0,0,0];
    while(actualImages.length < 10)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
  }
  function flipImage(number)
{
    document.getElementById(imageLight[number]).src= actualImages[number];
}
