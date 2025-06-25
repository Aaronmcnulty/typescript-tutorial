

//FUNCTIONS

  //Hovering on 'add' shows that two numbers are expected and we have stated it will return a number by add 
  //':number' before the arrow. 
  const add = (a: number, b: number):number => {
    return a + b
  }

  //This function does not return anything so it infers the output as 'void'.
  //We can state this outright by adding ':void' before the arrow.
  const logMsg = (message: any):void => {
    console.log(message)
  }

  logMsg('Hello!') //Functon works with a string.
  logMsg(add(3,2)) //Function works as message type is 'any'.
  //logMsg(add('t', 3)) //Error as 'add' function expects two numbers even if logMsg does not.


  //Works on non arrow functions too. 
  let subtract = function (c: number, d: number):number {
    return c - d
  }

  //A function can be a type as well. 
  type mathFunction = (a: number, b: number) => number

  /*
  Interface Version
  interface: mathFunction {
    (a: number, b: number):number
  } 
  */

  //If you hover over multiply its type is 'mathFunction'. 
  let multiply: mathFunction = function(c,d) {
    return c * d
  }

  logMsg(multiply(2,2))


//OPTIONAL PARAMETERS FUNCTION (must be last in the list)

  //If an argument is optional we need to specify what to do when its undefined
  const addAll = (a: number, b: number, c?: number): number => { // 'c' is an optional input
    if(typeof c !== 'undefined') { 
      return a + b + c
    }
    return a + b // if 'c' is undefined ignore it and return a + b
  }

//DEFAUL Parameters

  // 'c' now has a default value of 2 unless a value is passed in. 
  const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c 
  }

  logMsg(addAll(2,3,2))
  logMsg(addAll(2,3))
  logMsg(sumAll(2,3))
  logMsg(addAll(2,3,3))


//REST PARAMETERS

  // '...nums' represents the rest of the parameters that are not specified like a.
  const total = (a: number, ...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr) // a is not included only the 'rest' numbers
  }

  logMsg(total(1,2,3))
  logMsg(total(1,2,3,5,6))

//NEVER PARAMETER 

//If you mouse over 'createError' it will show its returning a 'never' type.
//This is used when an error is being created/returned.
const createError = (errMsg: string): never => {
  throw new Error(errMsg)
}

//Also show when an infinite loop is created. 

// const infinite = () => {
//   let i: number = 1
//   while(true){
//     i++
//   }
// }

//You should on see 'never' infered when you intentionally create an error.


//Even though its impossible for an 'undefined' value to checked typescript needs to 
//have a string returned as stated so an error still needs to be included. 
const numberOrString = (value: number | string ): string => {
  if(typeof value === 'string') return 'string'
  if(typeof value === 'number') return 'number'
  return createError('This should not happen!')
}