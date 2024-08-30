// //Question1
var cityName = prompt('Enter a city name').toLowerCase();
if (cityName === 'karachi') {
  alert('Welcome to city of lights');
}
else {
  alert('Welcome to this beautiful city');
}
//Question2

var gender = prompt('Enter your gender').toLowerCase();
if (gender === 'male') {
  alert('Good Morning Sir');
}
else if(gender === 'female') {
  alert("Good Morning Ma'am");
}
else{
  alert('Enter correct gender');
}

//Question3

var color = prompt('Enter a color you want');
document.querySelector('.table').innerHTML = `
<table style = "color : ${color};">

<tr">
<th>Signal color</th> <th>Message</th>
</tr>
<tr>
<td>Red</td><td>Must Stop</td>
</tr>
<tr>
<td>Yellow</td><td>Ready to move</td>
</tr>
<tr>
<td>Green</td><td>Move now</td>
</tr>
</table>`;

//Question4

var fuelRemains = Number(prompt('Enter your remaining fuel'));
if(fuelRemains < 0.25){
  alert('Please refill the fuel in your car');
}
else{
  alert('You have enough fuel to drive');
}

//Question5

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
}

//Question6

var mark1 = Number(prompt('Enter your mark-1'));
var mark2 = Number(prompt('Enter your mark-2'));
var mark3 = Number(prompt('Enter your mark-3'));
var obtainMarks = mark1 + mark2 + mark3;
var total = 300;
var grade = '';
var remark = '';
var percent = (obtainMarks * 100) / total;

if(percent >=80 && percent <= 100){
  grade = 'A-one';
  remark = 'Excellent';
}
else if(percent >= 70){
  grade = 'A';
  remark = 'Good';
}
else if(percent >= 60){
  grade = 'B';
  remark = 'You need to improve';
}
else if(percent < 60){
  grade = 'Fail';
  remark = 'Sorry';
}
document.querySelector('.marksheet').innerHTML = 
`
<p>Total marks : ${total}</p>
<p>Marks obtained : ${obtainMarks}</p>
<p>Percentage : ${percent}%</p>
<p>Grade : ${grade}</p>
<p>Remarks : ${remark}</p>`;

//Question7

var secretNumber = 5;
var guess = Number(prompt('Guess the number'));
if(secretNumber === guess){
  alert('Bingo! Correct answer');
}
else if(secretNumber === guess + 1){
  alert('Close enough to the correct answer');
}

//Question8

var num = Number(prompt('Enter any number'));
if (num % 3 == 0) {
  alert(`The given number ${num} is divisible by 3.`);
}
else {
  alert(`The given number ${num} is not divisible by 3.`);
}

//Question9

var numCheck = Number(prompt('Enter to check number is even or odd'));
if (numCheck % 2 == 0) {
  alert(`The given number ${numCheck} is Even.`);
}
else {
  alert(`The given number ${numCheck} is Odd.`);
}

//Question10

var temp = Number(prompt('Enter a temperature'));
if(temp > 40){
  alert('It is too hot outside.');
}
else if(temp > 30){
  alert('The Weather today is Normal.');
}
else if(temp > 20){
  alert("Today's Weather is cool.");
}
else if(temp > 10){
  alert("OMG! Today's weather is so Cool.");
}

//Question11

var a = Number(prompt('Enter the number(1) for calculation'));
var b = Number(prompt('Enter the number(2) for calculation'));
var operator = prompt('Enter you want (+, -, *, /, % )');
if (operator === '+') {
  alert(a + b);
}
else if (operator === '+') {
  alert(a + b);
}
else if (operator === '-') {
  alert(a - b);
}
else if (operator === '*') {
  alert(a * b);
}
else if (operator === '/') {
  alert(a / b);
}
else if (operator === '%') {
  alert(a % b);
}