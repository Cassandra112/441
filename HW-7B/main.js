var imageStory = new Array("knightsferry", "pinecrest", "modesto", "pacificgrove", "monterey");

var myNicePlace = ["knightsferry", "pinecrest", "modesto", "pacificgrove", "monterey"]

class NicePlace
{
    constructor( title1, title2, title3, title4, title5 )
    {
        this.title = title;
        this.title1 = title1;
        this.title2 = title2;
        this.title3 = title3;
        this.title4 = title4;
    }

    toString()
    {
        return "Title: " + this.title;
    }

    get theTitle()
    {
        return this.title;
    }

}

function beginStory()
{
    var imageStory = new NicePlace("Knights Ferry, CA");
    var imageStory1 = new NicePlace("Pinecrest, CA");
    var imageStory2 = new NicePlace("Modesto, CA");
    var imageStory3 = new NicePlace("Pacific Grove, CA");
    var imageStory4 = new NicePlace("Monterey, CA");

    imageStory.push(myNicePlace);
    imageStory.push(myNicePlace1);
    imageStory.push(myNicePlace2);
    imageStory.push(myNicePlace3);
    imageStory.push(myNicePlace4);

}

function createRandomImageArray()
{

    var actualImagePath = ["knightsferry.JPG", "pinecrest.jpeg", "modesto.jpeg", "pacificgrove.JPG", "monterey.jpeg"];

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

function accessInformation()
{
    /// random object from the array
    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle);
    document.getElementById("title").innerHTML = imageStory[1].toString();
    document.getElementById("title").innerHTML = imageStory[2].toString();
    document.getElementById("title").innerHTML = imageStory[3].toString();
    document.getElementById("title").innerHTML = imageStory[4].toString();
    document.getElementById("title").innerHTML = imageStory[5].toString();

}
