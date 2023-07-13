import {halfOf,multiply} from './lib.js';
console.log(halfOf(84));
console.log(multiply(21, 2));

import doSomething from './doSomething.js';
doSomething();

import { flag, touch } from './validator.js';
console.log(flag);
touch();
console.log(flag);

const sum1 = (a, b) => {
   return a + b;
}
let result1 = sum1(1, 2);
console.log(result1);

const sum2 = (a, b) => a + b;
let result2 = sum2(1, 2);
console.log(result2);


