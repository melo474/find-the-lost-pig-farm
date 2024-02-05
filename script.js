/* Declare variables below to save the different sections (divs) of your story*/

let body = document.querySelector("body");
let title = document.querySelector(".title");
let opening = document.querySelector(".opening");
let opening2 = document.querySelector(".opening2");
let opening3 = document.querySelector(".opening3");
let end1 = document.querySelector(".end1");
let end2 = document.querySelector(".end2");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let option5 = document.querySelector(".option5");
let button = document.querySelector(".button");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let answerDiv = document.querySelector(".answerDiv");




/*When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */

option1.onclick = function() {
    opening2.style.display = "block";
    opening.style.display = "none";
    button.style.display = "none";
     title.style.display = "none";

	
};

option2.onclick = function() {
    opening3.style.display = "block";
    opening.style.display = "none";
    button.style.display = "none";
     title.style.display = "none";
    

	};


option3.onclick = function() {
  button2.style.display = "block";
     opening2.style.display = "none";
     title.style.display = "none";
    opening.style.display = "block";
  button.style.display = "block";
    };

option4.onclick = function() {
    end1.style.display = "block";
    title.style.display = "none";
    opening2.style.display = "none";
     body.style.backgroundColor = "pink";
    };


option5.onclick = function() {
    end2.style.display = "block";
    title.style.display = "none";
    opening2.style.display = "none";
    opening3.style.display = "none";
    

	};











