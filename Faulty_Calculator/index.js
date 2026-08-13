let random = Math.random();
console.log(random);

let a = prompt("Enter 1st number");
let b = prompt("Enter 2nd number");
let c = prompt("Enter operation (+, -, *, /)");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (random > 0.1) {
    // 90% chance — correct answer
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} 
else {
    // 10% chance — wrong answer
    c = obj[c];

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
// var a =  Number(prompt("Enter digit"))
// var b = Number(prompt("Enter another digit"))

// var op =prompt("enter the operation");
//  if(op == '+')
//  {
//   console.log(a-b);
//  }
//  else if(op=='*')
//  {
//   console.log(a+b);
//  }
//  else if(op== '-')
//  {
//   console.log(a/b);
//  }
//  else if(op == '/')
// {
//   console.log(a**b);
// }
// else
// {
//   console.log("goodnight");
// }
