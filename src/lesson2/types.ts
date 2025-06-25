
//TYPE ALIASES

  //We can assign types or union types to a variable and use them elsewhere.
  type stringOrNumbers = string | number
  type stringOrNumberArray = (string | number)[]

  type Guitarist = {
    name?: string, 
    active: boolean,
    albums: stringOrNumberArray //Type alias used instead of writing out types.
  }

  type UserId = stringOrNumbers //String or number is already an alias so we can assgin it here too. 

  //This CANNOT BE DONE with 'interface'



//LITERAL TYPES

  let myName: 'Dave' //Type has been assigned as 'Dave', a literal type, so other strings cannot be assigned.

  let userName: 'Dave' | 'Amy' | 'John' //userName has been assigned 3 literal types.

  //userName = 'Tony' // If we try to assign it a different string it will show an error.

  userName = 'Amy' //Works as its one of the three literal types assigned to 'userName'.
