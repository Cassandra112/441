function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Taylor is at a fork in the road. She needs to decide where to buy her shoes. Should she go to Macy's or Target?";
        document.getElementById("choice1").innerHTML = "Macy's";
        document.getElementById("choice2").innerHTML = "Target";
    } else if (choice == 2 && answer2 == "Target") {
        document.getElementById("story").innerHTML = "Taylor finds one pair of golden slippers here that fit. She needs to buy her dress next, should she go to Nordstrom’s or Walmart";
        document.getElementById("choice1").innerHTML = "Nordstrom";
        document.getElementById("choice2").innerHTML = "Walmart";
    } else if (choice == 1 && answer1 == "Macy's") {
        document.getElementById("story").innerHTML = "Taylor finds the perfect shoes, yet she still needs her dress. Should she go to Nordstrom’s or Walmart";
        document.getElementById("choice1").innerHTML = "Nordstrom";
        document.getElementById("choice2").innerHTML = "Walmart";
    } else if (choice == 2 && answer2 == "Walmart") {
        document.getElementById("story").innerHTML = "Taylor finds a cheap sequence dress, yet she still needs to find her accessories. Should she go to the local boutique or RiteAid";
        document.getElementById("choice1").innerHTML = "Local boutique";
        document.getElementById("choice2").innerHTML = "RiteAid";
    } else if (choice == 1 && answer1 == "Nordstrom") {
        document.getElementById("story").innerHTML = "Taylor finds a glittery dress. Yet, she still needs to find her accessories. Should she go to the local boutique or RiteAid";
        document.getElementById("choice1").innerHTML = "Local boutique";
        document.getElementById("choice2").innerHTML = "RiteAid";
    } else if (choice == 2 && answer2 == "RiteAid") {
        document.getElementById("story").innerHTML = "Taylor finds accessories that match. She is ready for the gala.";
        document.getElementById("choice1").innerHTML = "She gets ready"; //**UPDATE CLOSING SECTION HERE
        document.getElementById("choice2").innerHTML = "Stays home and watches Netflix";
      } else if (choice == 1 && answer1 == "RiteAid") {
        document.getElementById("story").innerHTML = "Taylor gets ready for the gala";
        document.getElementById("choice1").innerHTML = "Start Over"; //**UPDATE CLOSING SECTION HERE
        document.getElementById("choice2").innerHTML = "Start Over";
      } else if (choice == 2 && answer2 == "RiteAid") {
        document.getElementById("story").innerHTML = "Taylor finds accessories that match. She is ready for the gala.";
        document.getElementById("choice1").innerHTML = "She gets ready"; //**UPDATE CLOSING SECTION HERE
        document.getElementById("choice2").innerHTML = "Stays home and watches Netflix";
    }

}


//layout credit to: Michael Cassens / instructor
