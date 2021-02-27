var imageStory = new Array("knightsferry", "pinecrest", "modesto", "pacificgrove", "monterey");

class NicePlace
{
    constructor(title, title1, title2, title3, title4)
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

    {
        this.title1 = title;
    }

    toString()
    {
        return "Title: " + this.title1;
    }

    get theTitle()
    {
        return this.title1;
    }
    this.title1 = title;
}

toString()
{
    return "Title: " + this.title1;
}

get theTitle()
{
    return this.title1;
}

}

// and so forth, with title2, title3, etc

//or



var imageStorypath = ["light1.jpg", "light2.jpg", "light3.jpg", "light4.jpg", "light5.jpg"];

while(actualImages.length < 5)
{
    var randomNumber = Math.floor(Math.random() * imageStoryPath.length)
    if(count[randomNumber] < 2)
    {
        imageStory.push(imageStory[randomNumber]);
        count[randomNumber] = count[randomNumber] + 1;
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

function accessInformation()
{
    /// random object from the array
    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle);
    document.getElementById("title").innerHTML = imageStory[1].toString();

}
