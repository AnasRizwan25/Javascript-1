//Question1
var a = 3, b = 5;
document.querySelector('.js-parap').innerHTML = (`Sum of ${a} and ${b} is ${a + b}`);

//Question2

document.querySelector('.js-paras').innerHTML = (`Sum of ${a} and ${b} is ${a - b}`);
document.querySelector('.js-param').innerHTML = (`Sum of ${a} and ${b} is ${a * b}`);
document.querySelector('.js-parad').innerHTML = (`Sum of ${a} and ${b} is ${a / b}`);

//Question3
var x;
document.querySelector('.js-para1').innerHTML = `Value after variable declaration is ${x}`;
x = 5;
document.querySelector('.js-para2').innerHTML = `Initial value: ${x}`;
x++;
document.querySelector('.js-para3').innerHTML = `Value after increament is : ${x}`;
x += 7;
document.querySelector('.js-para4').innerHTML = `Value after addition is: ${x}`;
x--;
document.querySelector('.js-para5').innerHTML = `Value after decrement is : ${x}`;

x = x % 3;
document.querySelector('.js-para6').innerHTML = `The remainder is : ${x}`;

//Question 4

var tickPrice = 600;
document.querySelector('.js-tick').
  innerHTML = `Total cost to buy 5 ticket to a movie is ${tickPrice * 5}PKR`;

//Question 5

let store = '';
for (let i = 1; i <= 10; i++) {
  let html = `<p>${4} x ${i} = ${4 * i}</p>`;
  store += html;
}
document.querySelector('.result').
  innerHTML = store;

//Question 6
var celciusValue = 25;
var feh = ((celciusValue * (9 / 5)) + 32);
var fehValue = 70;
var cel = ((fehValue - 32) * (5 / 9));

document.querySelector('.celtofeh').innerHTML = `${celciusValue}<sup>o</sup>C is ${feh}<sup>o</sup>F`;
document.querySelector('.fehtocel').innerHTML = `${fehValue}<sup>o</sup>F is ${cel}<sup>o</sup>C`;

//Question 7
var price1 = 650, quan1 = 3;
var price2 = 100, quan2 = 7;
var shipCharge = 100;
var total = price1 * 3 + price2 * 7 + shipCharge;

document.querySelector('.shopping').
  innerHTML = `
  <p>Price of item 1 is ${price1}</p><p>Quantity of item 1 is ${quan1}</p>
  <p>Price of item 2 is ${price2}</p><p>Quantity of item 2 is ${quan2}</p>
  <p>Shipping Charges ${shipCharge}</p><p class="gap1">Total cost of your order is ${total}</p>`;;

//Question8
var totalmark = 980;
var markObt = 804;
var percent = (markObt * 100) / totalmark;

document.querySelector('.mark').
  innerHTML = `<p>Total marks: ${totalmark}</p><p>Marks obtained: ${markObt}</p>
  <p>Percentage: ${percent}%</p>`;

//Question9
var Us = 10, riyal = 25;
document.querySelector('.currency').
  innerHTML = `Total Currency in PKR: ${(Us * 104.80) + (riyal * 28)}`;

//Question10
var num = 10;
var numTotal = (((num + 5) * 10) / 2);
console.log(numTotal);

//Question11

var currentYear = 2024;
var year = 2005;
document.querySelector('.age').
  innerHTML = `
  <p>Current Year: ${currentYear}</p>
  <p>Birth Year : ${year}
  <p>Your Age is: ${currentYear - year}</p>
  `;
//Question12
var r = 20;
var circum = 2 * Math.PI * r;
var area = Math.PI * (r ** 2);

document.querySelector('.geo').
  innerHTML = `
  <p>Radius of a circle: ${r}</p>
  <p>The circumference is: ${circum}</p>
  <p>The area is: ${area}</p>
`;
//Question13
var snack = 'Twix';
var currentAge = 19;
var maxAge = 65;
var quantity = 3;
var ageAverage = maxAge - currentAge;
var totalQuantity = ageAverage * 365 * quantity;
document.querySelector('.supply').
  innerHTML = `
  <p>Favorite Snack: ${snack}</p>
  <p>Current Age: ${currentAge}</p>
  <p>Estimated Maximum Age: ${maxAge}</p>
  <p>Amount of snacks per day: ${quantity}</p>
  <p>You will need ${totalQuantity} ${snack.toLowerCase()} to laast you until the ripe old age of ${maxAge}</p>
  `;