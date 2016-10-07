"use strict"

let mathlib = require("./mathlib");
console.log(mathlib.add(1, 2));
console.log(mathlib.multiply(5, 4));
console.log(mathlib.square(5));

var maxVal = -1;
for(let i = 0; i < 1000; i++)
{
  let num = mathlib.random(5, 20);
  if(num > maxVal)
    maxVal = num;
}
console.log(maxVal);
