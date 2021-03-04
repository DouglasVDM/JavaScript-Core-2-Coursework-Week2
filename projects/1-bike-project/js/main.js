//-----part1-----
const targetElementBlue = document.getElementById('blueBtn');
console.log('This is my target element', targetElementBlue);

let jumbotronBlue = document.getElementsByClassName('jumbotron');
console.log('jumbotronBlue', jumbotronBlue);

let donateBlue = document.getElementsByClassName('btn btn-primary btn-lrg');
console.log('donateBlue', donateBlue);

let volunteerBlue = document.getElementsByClassName('btn btn-secondary btn-lrg');
console.log('volunteerBlue', volunteerBlue);

targetElementBlue.addEventListener('click', blueButtonTheme);
function blueButtonTheme() {
    jumbotronBlue[0].style.backgroundColor = '#588fbd';
    donateBlue[0].style.backgroundColor = '#ffa500';
    volunteerBlue[0].style.backgroundColor = 'black';
    volunteerBlack[0].style.color = 'white';    
}

//-----part2-----
const targetElementOrange = document.getElementById('orangeBtn');
console.log('This is my target element', targetElementOrange);

let jumbotronOrange = document.getElementsByClassName('jumbotron');
console.log('jumbotronOrange', jumbotronOrange);

let donateOrange = document.getElementsByClassName('btn btn-primary btn-lrg');
console.log('donateOrange', donateOrange);

let volunteerOrange = document.getElementsByClassName('btn btn-secondary btn-lrg');
console.log('volunteerOrange', volunteerOrange);

targetElementOrange.addEventListener('click', orangeButtonTheme);
function orangeButtonTheme() {
    jumbotronOrange[0].style.backgroundColor = '#5751fd';
    donateOrange[0].style.backgroundColor = '#ffa500';
    volunteerOrange[0].style.backgroundColor = 'black';
    volunteerOrange[0].style.color = 'white';    
}

/*
When clicking orange it should change:

Jumbotron background color to #f0ad4e
Donate a bike button background color to #5751fd
Volunteer button background color to #31b0d5 and text color to white
When clicking green it should change:

Jumbotron background color to #87ca8a
Donate a bike button background color to black
Volunteer button background color to #8c9c08
*/