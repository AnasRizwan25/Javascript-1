//Question1

let check = 'ANAS';
if (Number(check)) {
  console.log(`The given number is ${check}`);
}
else if (check === check.toLowerCase()) {
  console.log(`The given string is lower case`);
}
else if (check === check.toUpperCase()) {
  console.log(`The given string is upper case`);
}

//Question2

var num1 = 5;
var num2 = 10;
if (num1 > num2) {
  console.log(`num1 ${num1} is greater than num2 ${num2}`);
}
else {
  console.log(`num1 ${num1} is less than num2 ${num2}`);
}

//Question3

var numberCheck = Number(prompt('Enter the number1'));
if (numberCheck < 0) {
  console.log(`The given number ${numberCheck} is negative.`);
}
else if (numberCheck === 0) {
  console.log(`The given number ${numberCheck} is zero.`);
}
else if (numberCheck > 0) {
  console.log(`The given number ${numberCheck} is positive.`);
}

//Question4

var vowelCheck = prompt('Enter a vowel').toLowerCase();
if (vowelCheck === 'a' || vowelCheck === 'e' ||
  vowelCheck === 'i' || vowelCheck === 'o' ||
  vowelCheck === 'u') {
  console.log('You just type a vowel');
}
else {
  console.log('You just type a consonant');
}

//Question5

var pass = 'abcd12';
var userPass = prompt('Enter your correct Password');
if(userPass === ''){
  console.log('Please enter your Password');
}
else if(userPass === pass){
  console.log('Correct! The password you entered matches the original password');
}
else{
 console.log('Incorrect password'); 
}

//Question6

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
}
else {
  greeting = "Good evening";
}
console.log(greeting);

//Question7

var time = Number(prompt('Enter the time'))*100;
if (time >= 0 && time < 1200) {
  console.log('Good Morning!');
}
else if (time >= 1200 && time < 1700) {
  console.log('Good Afternoon!');
}
else if (time >= 1700 && time < 2100) {
  console.log('Good Evening!');
}
else if (time >= 2100 && time <= 2359) {
  console.log('Good night');
}