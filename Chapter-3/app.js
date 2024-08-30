// //Question 1

var age = 19;
alert(`I am ${age} years old`);

//Question 2

let track = JSON.parse(localStorage.getItem('track')) || 1;

function onClick() {
  localStorage.setItem('track', JSON.stringify(track));
  return track++;
}
alert(`You have visited this site ${onClick()} times`);
onClick();

//Question 3

var birthYear = 2005;
document.write(`My birth year is ${birthYear}</br></br>`);

//Question 4

var visitorName = 'Anas';
var productTitle = 'T-shirt';
var quantity = 5;

document.write(`${visitorName} ordered \ ${quantity} ${productTitle}(s) on J. Clothing store.`);

