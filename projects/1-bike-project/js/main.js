//-----part1a-----
const blueButton = document.getElementById('blueBtn');

let jumbotronBlue = document.getElementsByClassName('jumbotron');
// console.log('jumbotronBlue', jumbotronBlue);

let donateBlue = document.getElementsByClassName('btn btn-primary btn-lrg');
// console.log('donateBlue', donateBlue);

let volunteerBlue = document.getElementsByClassName('btn btn-secondary btn-lrg');
// console.log('volunteerBlue', volunteerBlue);

blueButton.addEventListener('click', blueButtonTheme);
function blueButtonTheme() {
    jumbotronBlue[0].style.backgroundColor = '#588fbd';
    donateBlue[0].style.backgroundColor = '#ffa500';
    volunteerBlue[0].style.backgroundColor = 'black';
    volunteerBlue[0].style.color = 'white';    
};

//-----part1b-----
const orangeButton = document.getElementById('orangeBtn');
// console.log('This is my target element', orangeButton);

let jumbotronOrange = document.getElementsByClassName('jumbotron');
// console.log('jumbotronOrange', jumbotronOrange);

let donateOrange = document.getElementsByClassName('btn btn-primary btn-lrg');
// console.log('donateOrange', donateOrange);

let volunteerOrange = document.getElementsByClassName('btn btn-secondary btn-lrg');
// console.log('volunteerOrange', volunteerOrange);

orangeButton.addEventListener('click', orangeButtonTheme);
function orangeButtonTheme() {
    jumbotronOrange[0].style.backgroundColor = '#f0ad4e';
    donateOrange[0].style.backgroundColor = '#5751fd';
    volunteerOrange[0].style.backgroundColor = '31b0d5';
    volunteerOrange[0].style.color = 'white';    
};

//-----part1c-----
const greenButton = document.getElementById('greenBtn');
// console.log('This is my target element', greenButton);

let jumbotronGreen = document.getElementsByClassName('jumbotron');
// console.log('jumbotronGreen', jumbotronGreen);

let donateGreen = document.getElementsByClassName('btn btn-primary btn-lrg');
// console.log('donateGreen', donateGreen);

let volunteerGreen = document.getElementsByClassName('btn btn-secondary btn-lrg');
// console.log('volunteerGreen', volunteerGreen);

greenButton.addEventListener('click', greenButtonTheme);
function greenButtonTheme() {
    jumbotronGreen[0].style.backgroundColor = '#87ca8a';
    donateGreen[0].style.backgroundColor = '#5751fd';
    volunteerGreen[0].style.backgroundColor = '#8c9c08';
    volunteerGreen[0].style.color = 'white';    
};

//-----part2-----

const submitButton = document.querySelector('form > button');
const emailField = document.getElementById("exampleInputEmail1");
const textInput = document.getElementById("example-text-input");
const describeInput = document.getElementById("exampleTextarea");

//  When you click the submit button: The input fields will be checked.
submitButton.addEventListener('click', inputFieldCheck);
    
function inputFieldCheck() {
  //  Storing the Input values in Variables
  let emptyEmail = emailField.value;
  let emptyText = textInput.value;
  let emptyDescribe = describeInput.value;
  const emptyColour = "red";

    if (emptyEmail === "") {
      // If email, text and describe field is empty, change background colour to red.
      emailField.style.background = emptyColour;
      alert("Oops, you didn't give your email address.")
    } if (emptyText === "") {
      (textInput.style.background = emptyColour);
      alert("Oops, you didn't give your name.")
    } if (emptyDescribe === "") {
      describeInput.style.background = emptyColour;
      alert("Oops, you didn't describe yourself.")
    } else {      
      alert("Thank you for filling out the form");
      //  Setting the fields to blank.
      emailField.value = "";
      textInput.value = "";
      describeInput.value = "";      
    }
}
// event.preventDefault();