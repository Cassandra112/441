var imageStory = new Array("knightsferry", "pinecrest", "modesto", "pacificgrove", "monterey");

var myNicePlace = ["knightsferry", "pinecrest", "modesto", "pacificgrove", "monterey"]

class NicePlace
{
    constructor(title)
    {
        this.title = title;
        this.image = image;
        this.description = author;
        this.author = author;
        this.year = year;
    }

    toString()
    {
        return this.title;
        return this.image;
        return this.description;
        return this.author;
        return this.year;
    }

    get theTitle()
    {
        return this.title;
        return this.image;
        return this.description;
        return this.author;
        return this.year;
    }

}

// I am missing 2 things, which are the math.random and the image.paths...

function beginStory()
{

  //should the below 'imagestory' names here be in place for my div names :/
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

function accessInformation()
{
    /// random object from the array
    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle);

    //--Or, under "title" is this where my div names go?

    document.getElementById("title").innerHTML = imageStory[1].toString();
    document.getElementById("title").innerHTML = imageStory[2].toString();
    document.getElementById("title").innerHTML = imageStory[3].toString();
    document.getElementById("title").innerHTML = imageStory[4].toString();

}
