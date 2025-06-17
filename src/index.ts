

/* 
 Function accepts a string and Date only and returns a console log. 
 If another type of variable is passed to the function it will display an error.
*/
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toString()}!`);
}


/* 
  Logs: index.js:3 Hello Tony, today is Tue Jun 17 2025 13:19:13 GMT+0100 (British Summer Time)!
  index.js:19 Hello JIMMY!
*/
greet("Tony", new Date());


//greet(2, 'Tony')  <-- Error will state: 'Argument of type 'number' is not assignable to parameter of type 'string'


//Outlines Guitarist parameter types.
type Guitarist = {
  name?: string, // '?' after paramter name makes it an optional parameter. 
  active?: boolean,
  albums: (string | number)[]
}

//Creates guitarist object from 'Guitarist'
let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1984, 5151, 'OU812']
}

let jp: Guitarist = {
  active: true, // Does not have a name but name parameter is optional in 'Guitarist' type.
  albums: ['I', 'II', 'III']
}

//Function expecting a 'Guitarist' object to be passed in. 
const greetGuitarist = (guitarist: Guitarist) => {
  if(guitarist.name){
    //Narrowing: guitarist.name could be 'undefined' or a string. As 'toUpperCase() will return an error if used on 'undefined we check that 'guitarist.name' is present. 
    return `Hello ${guitarist.name?.toUpperCase()}!` //If guitarist.name exists .toUpperCase() can safely be used (it will be a string as the object types only accept strings for this parameter)
  }
  return 'Hello!' //If 'guitarist.name' is 'undefined' function returns 'Hello!'
}

console.log(greetGuitarist(jp))
console.log(greetGuitarist(evh))

