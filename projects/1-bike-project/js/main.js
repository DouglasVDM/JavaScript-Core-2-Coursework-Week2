const targetElementBlue = document.getElementById('blueBtn');
console.log('This is my target element', targetElementBlue);

let jumbotronBlue = document.getElementsByClassName('jumbotron');
console.log('jumbotronBlue', jumbotronBlue);

let donateOrange = document.getElementsByClassName('btn btn-primary btn-lrg');
console.log('donateOrange', donateOrange);

let volunteerBlack = document.getElementsByClassName('btn btn-secondary btn-lrg');
console.log('volunteerBlack', volunteerBlack);

targetElementBlue.addEventListener('click', blueButtonTheme);
function blueButtonTheme() {
    jumbotronBlue[0].style.backgroundColor = '#588fbd';
    donateOrange[0].style.backgroundColor = '#ffa500';
    volunteerBlack[0].style.backgroundColor = 'black';
    volunteerBlack[0].style.color = 'white';    
}