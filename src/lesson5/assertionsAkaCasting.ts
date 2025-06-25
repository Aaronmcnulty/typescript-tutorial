
type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two
let c = a as Three

let d = <One>'world'
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2, 'concat') as string


//Be careful TS sees no problem - but string is returned

let nextVal: number = addOrConcat(2,2,'concat') as number

//DOUBLE CASTING OVERRULES TYPESCRIPT.
//10 as string <-- typescript doesn't accept this. 
(10 as unknown) as string



//THE DOM

//typescript sees this as a htmlelement OR null so we overule with 'as' to remove null as we know the element exists.
const img = document.getElementById('img') as HTMLImageElement

img.src //No 'possibly null' error as we overuled it above.

/*
Same problem, typescript sees it as either an element or null which causes errors when we access the elements properties later. 
Ending with exclamation mark tells tyescript it is not null. 
but instead we add an 'as' so that the correct element properties can be accessed.
*/
const myImg = document.getElementById('#img') as HTMLImageElement

myImg.src