"use strict";
// convert to more or less specific
let a = 'hello';
let b = a;
let c = a;
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be careful TS sees no problem - but string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//DOUBLE CASTING OVERRULES TYPESCRIPT.
//10 as string <-- typescript doesn't accept this. 
10;
//THE DOM
//typescript sees this as a htmlelement OR null so we overule with 'as' to remove null as we know the element exists.
const img = document.getElementById('img');
img.src; //No 'possibly null' error as we overuled it above.
/*
Same problem, typescript sees it as either an element or null which causes errors when we access the elements properties later.
Ending with exclamation mark tells tyescript it is not null.
but instead we add an 'as' so that the correct element properties can be accessed.
*/
const myImg = document.getElementById('#img');
myImg.src;
