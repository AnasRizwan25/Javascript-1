//Question1

var value = document.querySelector('.arithmetic');
var a = 10;
value.innerHTML = `
<p>Result</p>
<p>The value of a is: ${a}</p>
<p>............................................</p>
<p>The value of ++a is:${++a} </p>
<p>Now the value of a is: ${a}</p>
<p>The value of a++ is: ${a++} </p>
<p>Now the value of a is: ${a}</p>
<p>The value of --a is:${--a} </p>
<p>Now the value of a is: ${a}</p>
<p>The value of a-- is: ${a--} </p>
<p>Now the value of a is: ${a}</p>`;

//Question2

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//--a = 1;
//--a - --b (1 - 0 = 1)
//--a - --b + ++b(1 + 1 = 2)
//--a - --b + ++b + b-- (1 +1 + 1 = 3) 
document.querySelector('.result').
  innerHTML = `
<p>a is ${a}</p>
<p>b is ${b}</p>
<p>result is ${result}</p>
`;
//Question3

var a = prompt('Give your name');
console.log(`Welcome! ${a}`);

//Question5

var number = Number(prompt('Enter a table number'));
let store = '';
for (let i = 1; i <= 10; i++) {
  if (number) {
     const html = `<p>${number} x ${i} = ${number * i}</p>`;
     store+=html;
  }
  else{
    const html = `<p>${5} x ${i} = ${5 * i}</p>`;
    store+=html;
  }
  document.querySelector('.table').
  innerHTML = store;
}

//Question6

var sub1 = prompt('Give the name of subject-1');
var sub2 = prompt('Give the name of subject-2');
var sub3 = prompt('Give the name of subject-3');
var total = 300;
var subMark1 = Number(prompt('Give the number of subject-1'));
var subMark2 = Number(prompt('Give the number of subject-2'));
var subMark3 = Number(prompt('Give the number of subject-3'));

var totalMarks = subMark1 + subMark2 + subMark3;
var percentage = (totalMarks * 100) / total;

document.querySelector('.marksheet').innerHTML = `

<table>
<tr>
<th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th>
</tr>
<tr>
<td>${sub1}</td><td>100</td><td>${subMark1}</td><td>${subMark1}%</td>
</tr>
<tr>
<td>${sub2}</td><td>100</td><td>${subMark2}</td><td>${subMark2}%</td>
</tr>
<tr>
<td>${sub3}</td><td>100</td><td>${subMark3}</td><td>${subMark3}%</td>
</tr>
<tr>
<td></td><th>${total}</th><th>${totalMarks}</th><th>${percentage}%</th>
</tr>


</table>`;