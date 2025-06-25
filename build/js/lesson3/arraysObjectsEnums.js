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
//Creates guitarist object from 'Guitarist'
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5151, 'OU812']
};
let jp = {
    active: true, // Does not have a name but name parameter is optional in 'Guitarist' type.
    albums: ['I', 'II', 'III']
};
//Function expecting a 'Guitarist' object to be passed in. 
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        //Narrowing: guitarist.name could be 'undefined' or a string. As 'toUpperCase() will return an error if used on 'undefined we check that 'guitarist.name' is present. 
        return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`; //If guitarist.name exists .toUpperCase() can safely be used (it will be a string as the object types only accept strings for this parameter)
    }
    return 'Hello!'; //If 'guitarist.name' is 'undefined' function returns 'Hello!'
};
console.log(greetGuitarist(jp));
console.log(greetGuitarist(evh));
/*
Enums
Unlike most typescript features, Enums are not a type-level addition to Javascript
but something added to the langauge and runtime."
*/
/*
Entries values will automatically start at 0 but if we say 'U = 1' the order will update, D = 2 now and so on.
If we update 'C' to equal 5, the previous numbers stay as they were but the following entries now increment from 5.
*/
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 5] = "C";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["A"] = 7] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
