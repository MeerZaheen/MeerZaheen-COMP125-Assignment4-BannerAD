/* main JavaScript file */

/*
* FileName: App.js
*
* @author Meer Zaheen Nazmul
* @date August 19, 2016
*
* StudentID: 300522487
* website: http://comp125-assignment2.azurewebsites.net/contact.html
* @description: This file is the main javascript file for the website
*/


// IIFE - Immediately Invoked Function Expression
var core;
(function (core) {
    "use strict";

    // Paragraph object for AJAX
    var xhrParagraphContents;

    // we can use a named function instead of an anonymous function
    function readData() {
        // data loaded                everything is ok
        if ((xhrParagraphContents.readyState === 4) && (xhrParagraphContents.status === 200)) {

            var paragraphs = JSON.parse(xhrParagraphContents.responseText);
            var paragraphDATA = paragraphs.paragraphDATA;

            paragraphDATA.forEach(function (paragraphDATA) {
                var index = paragraphDATA["id"];
                var paragraphContent = paragraphDATA["content"];
                console.log(index + " : " + paragraphContent);
                if (paragraphElements[index]) {
                    paragraphElements[index].innerHTML = paragraphContent;
                }
            }, this);
        }
    }

    function readParagraphContents() {

        xhrParagraphContents = new XMLHttpRequest(); // step 1 - create xhr object
        xhrParagraphContents.open("GET", "Scripts/paragraphs.json", true); // step 2 - open request
        xhrParagraphContents.send(null); // step 3 - send request
        xhrParagraphContents.addEventListener("readystatechange", readData); // step 4

    }
    // <---------------- PARAGRAPHS SECTION ------------>
    var paragraphElements = [];

    paragraphElements[0] = document.getElementById("0")
    paragraphElements[1] = document.getElementById("1")
    //paragraphElements[2] = document.getElementById("paragraphThree")
    paragraphElements[3] = document.getElementById("3")
    paragraphElements[4] = document.getElementById("4")
    paragraphElements[5] = document.getElementById("5")

    var paragraphs = [];

    // <---------------- CONTACT PAGE SECTION ------------>

    // create a reference for sendButton
    var sendButton = document.getElementById("sendButton");

    // check to see if sendButton exists
    if (sendButton) {
        // event listener
        sendButton.addEventListener("click", sendButtonClick);
    }

    // event handler function that shows in console when the send button is clicked
    function sendButtonClick(event) {
        console.log("clicked!");
    }

    // create a reference to the form field
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var contactNumber = document.getElementById("contactNumber");
    var message = document.getElementById("message");

    // create a reference to the form
    var contactForm = document.getElementById("contactForm");

    if (contactForm) {
        // event listener with inline anonymous event handler function once you click Send(Submit)
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("submitted"); // shows form input in console
            showFormInput();
            contactForm.reset();
        });
    }

    /**
     * This function shows the input from each form field
     * on the console
     * 
     * @method showFormInput
     * @return {void}
     */
    // event handler function
    function showFormInput() {
        console.log("++++++++++++++++++++++++++++++++");
        console.log("First Name: " + firstName.value);
        console.log("++++++++++++++++++++++++++++++++");
        console.log("Last Name: " + lastName.value);
        console.log("++++++++++++++++++++++++++++++++");
        console.log("Email: " + email.value);
        console.log("++++++++++++++++++++++++++++++++");
        console.log("contactNumber: " + contactNumber.value);
        console.log("++++++++++++++++++++++++++++++++");
        console.log("message: " + message.value);
        console.log("++++++++++++++++++++++++++++++++");
    }
    /*   
     * This function is to handle the windows load event on which the
     * paragraph details will be requested from json file using AJAX call and then process
     * the resoponse to use paragraph details.
     * 
     * @function init
     * @returns {void}
     */

    //add windows load event handler
    //window.addEventListener("load", init);

    // <---------------- END CONTACT PAGE SECTION ------------>

    // <---------------- PARAGRAPHS DATA SECTION ------------>

    /// index intro paragraph
    //paragraphs[0] = "I am Meer Zaheen, born on March 12, 1990. I have been living in Toronto, Canada for almost 18 years. I graduated from Seneca College as a Civil Engineer in 2013. Since then, I was employed at an engineering firm called CCI-Group. Formerly I was at a 9 month contract with EXP Inc. I was always passionate about evolving products and disruptive technologies and hence why I chose to continue my education at Centennial College as a Software Engineer. Outside of Engineering and technology, I like to play competitive video games, absorb different cultures and enjoy amazing food. I have always had a passion for sports and personal fitness – not only to lead a healthy lifestyle but to bring out my competitive spirit. I live to serve my talents as an engineer, artist and a fitness enthusiast. I create balance in work, play, and community. Also, I want to be the kind of person my cat already thinks I am."

    // project intro paragraph
    //paragraphs[1] = "On this page, you will be able to see some of my previous and on-going projects!"

    // project 1 paragraph (PC)
    //paragraphs[3] = "This was my first ever custom-built desktop PC. I started this project with extreme budget for about 300$ and my initial plan was to keep on upgrading and work on this project. I did a lot of research onto PC components in every aspect possible. I enjoyed working on this project as much as I enjoyed all my other activities. As of now, this custom PC can handle everything thrown at it and there will always be a new upgrade as more and more technology arises."

    // project 2 paragraph (Art)
    //paragraphs[4] = "Drawing and sketching has always been a part of my hobbie every since I was very young. This hobbie has somewhat become similar to a project."

    // project 3 paragraph (Websites)
    //paragraphs[5] = "These are some of the websites I created using Web Expression 4."

    // contact me paragraph
    //paragraphs[2] = " I'm a Civil Engineer graduate from Seneca College, Newnham Campus."
    //+ " I worked professionally as a Civil Engineer for 2 years and realized that I would like to pursue a different career." + " I'm currently enrolled in Centennial College as a Software Engineer."
    //+ " I enjoy First Person Shooter video games." + " I'm also a PC hardware enthusiast, as I have build my own PC - more information would be found on My Projects page."

    // <---------------- END PARAGRAPHS DATA SECTION ------------>

    // check to see if paragraph one exists
    var paragraphElementLength = paragraphElements.length;

    // if paragraph exists then populate each paragraph on the page

    for (var index = paragraphElementLength; index >= 0; index--) {
        if (paragraphElements[index]) {
            paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    var canvas;
    var stage;

    function init() {
        readParagraphContents();
        initBanner();
        stage.update();
    }

    function banner() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        //click event listener to stop Ticker update and open corresponding url
        canvas.addEventListener("click", function () {
            if (stopTick == true) {
                stopTick = false;
            } else {
                stopTick = true;
            }
            window.open("http://comp125-assignment-1.azurewebsites.net/project.html")
        });
        main();
    }
    function gameLoop() {
                if (txtLabel.x >= -200 ){
            txtLabel.x -= 2;
        }
        else {
            txtLabel.x = 350;
            if (index == dataArray.length) {
                index = 0;
            }
            else {
                index++;
            }
            txtLabel.text = dataArray[index];
        }
        if (stopTick == true){
            stage.update();
}
    }
    function main() {
        var clickMeButton = new createjs.Bitmap("../Assets/img/clickMeButton.png");
        stage.addChild(clickMeButton);
        clickMeButton.addEventListener("click", clicked);
        clickMeButton.x = 70;
        clickMeButton.y = 200;
    }
    
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map