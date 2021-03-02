
var imageStory = new Array(); // we are just going to make this an empty array at first because we will push objects onto it

var myNicePlace = ["knightsferry", "pinecrest", "modesto", "pacificgrove", "monterey"]


// So you have the right idea here, however, the best part of it all is that you only
// need one title as you will be creating multiple
// objects (NicePlace objects) with their own titles
// and this allows you to have as many NicePlace objects as you want
// it will look like this


class NicePlace
{

    constructor( title ) // eventually you can add an imagePath, description, etc.
    {
        this.title = title;

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


// this function will create the --objects--- and put them in the array
function beginStory()
{
    // now all your titles will become individual objects
    // since we called the array imageStory, we will call each object something
    // different
    //var imageStory = new NicePlace("Knights Ferry, CA"); changed from imageStory to new object name: mapPlace
    var mapPlace = new NicePlace("Knights Ferry");
    var mapPlace1 = new NicePlace("Pinecrest, CA");
    var mapPlace2 = new NicePlace("Modesto, CA");
    var mapPlace3 = new NicePlace("Pacific Grove, CA");
    var mapPlace4 = new NicePlace("Monterey, CA");

   // all of these objects are created from the class NicePlace
    var Story = new NicePlace("Knights Ferry River Park <br> Family Park <br> Knights Ferry, CA <br> June 2020 <br> by: Casey Jay"); // this is the Story object
    var Story1 = new NicePlace("Pinecrest Lake Trailhead <br> Family Lake <br> Pinecrest, CA <br> July 2019 <br> by: Casey Jay"); // this is the Story1 object
    var Story2 = new NicePlace("Dry Creek Trail <br> Bike and Jogging Trail <br> Modesto, CA <br> January 2018 <br> by: Casey Jay");
    var Story3 = new NicePlace("Asilomar State Beach <br> Trails and Tidepools <br> Pacific Grove, CA <br> February 2021 <br> by: Casey Jay");
    var Story4 = new NicePlace("Old Fisherman's Wharf <br> Dining and Shopping <br> Monterey, CA <br> August 2017 <br> by: Casey Jay");


    // now we can add each Story to the imageStory array
   imageStory.push(Story);
   imageStory.push(Story1);
   imageStory.push(Story2);
   imageStory.push(Story3);
   imageStory.push(Story4);
}

function switchInfo()
{


    // this gets a random number from our array
    var randomNumber = Math.floor(Math.random() * imageStory.length);
    // we need to get an object from the array
    var currentStory = imageStory[randomNumber];
// get the information out of the object

    var title = currentStory.theTitle;


    // display the information
    document.getElementById("title").innerHTML = title;
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
    //console.log(myNicePlace.toString);
    //console.log(myViewFinder.theTitle);
    //console.log(myStory1.theTitle);

}
