"use strict";
/*
 Function accepts a string and Date only and returns a console log.
 If another type of variable is passed to the function it will display an error.
*/
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toString()}!`);
}
/*
  Logs: index.js:3 Hello Tony, today is Tue Jun 17 2025 13:19:13 GMT+0100 (British Summer Time)!
  index.js:19 Hello JIMMY!
*/
greet("Tony", new Date());
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5151, 'OU812']
};
let jp = {
    active: true,
    albums: ['I', 'II', 'III']
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
    }
    return 'Hello!';
};
console.log(greetGuitarist(jp));
console.log(greetGuitarist(evh));
/*
Enums
Unlike most typescript features, Enums are not a type-level addition to Javascript
but something added to the langauge and runtime."
*/ 
