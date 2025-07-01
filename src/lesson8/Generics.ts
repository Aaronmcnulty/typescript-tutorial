
//This function only works on strings 
const stringEcho = (arg: string): string => arg

//If we want to use it with any type we use a generic '<T>' to signify that any type can be passed in. 
const echo = <T>(arg: T): T => arg

//Function to check if argument is an object, returns true or false.
const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray
        (arg) && arg !== null
    )
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1,2,3]))
console.log(isObj({name: 'John'}))
console.log(isObj(null))


//Function returns argument and a boolean depending on the arguments value, .
const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if (Array.isArray(arg) && !arg.length){
        return {arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is: false}
    }
        return {arg, is: !!arg }
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Dave'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({name: 'Dave'}))
console.log(isTrue([]))
console.log(isTrue([1,2,3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

interface BoolCheck<T> {
    value: T, 
    is: boolean,
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value: arg, is: false }
    }
    return {value: arg, is: !!arg}
}

interface HasId {
    id: number
}

const processUser = <T extends HasId>(user: T): T => {

    return user
}

console.log(processUser({id: 1, name: 'Dave'}))
// console.log(processUser({name: 'Dave'})) <-- Typescript expects id and will not work if it is skipped.


/* 
Returning properties from an array of objects using generics 
*/
const getUsersProperty = <T extends HasId, K extends keyof T>
(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
} 

const usersArray = [
    {
      "id": 1,
      "firstName": "Emily",
      "lastName": "Johnson",
      "maidenName": "Smith",
      "age": 28,
      "gender": "female",
      "email": "emily.johnson@x.dummyjson.com",
      "phone": "+81 965-431-3024",
      "username": "emilys",
      "password": "emilyspass",
      "birthDate": "1996-5-30",
      "image": "https://dummyjson.com/icon/emilys/128",
      "bloodGroup": "O-",
      "height": 193.24,
      "weight": 63.16,
      "eyeColor": "Green",
      "hair": {
        "color": "Brown",
        "type": "Curly"
      },
      "ein": "977-175",
      "ssn": "900-590-289",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
      "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
      },
      "role": "admin"
    },
    {
      "id": 2,
      "firstName": "Michael",
      "lastName": "Williams",
      "maidenName": "",
      "age": 35,
      "gender": "male",
      "email": "michael.williams@x.dummyjson.com",
      "phone": "+49 258-627-6644",
      "username": "michaelw",
      "password": "michaelwpass",
      "birthDate": "1989-8-10",
      "image": "https://dummyjson.com/icon/michaelw/128",
      "bloodGroup": "B+",
      "height": 186.22,
      "weight": 76.32,
      "eyeColor": "Red",
      "hair": {
        "color": "Green",
        "type": "Straight"
      },
      "ein": "912-602",
      "ssn": "108-953-962",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",
      "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
      },
      "role": "admin"
    },
    {
      "id": 3,
      "firstName": "Sophia",
      "lastName": "Brown",
      "maidenName": "",
      "age": 42,
      "gender": "female",
      "email": "sophia.brown@x.dummyjson.com",
      "phone": "+81 210-652-2785",
      "username": "sophiab",
      "password": "sophiabpass",
      "birthDate": "1982-11-6",
      "image": "https://dummyjson.com/icon/sophiab/128",
      "bloodGroup": "O-",
      "height": 177.72,
      "weight": 52.6,
      "eyeColor": "Hazel",
      "hair": {
        "color": "White",
        "type": "Wavy"
      },
      "ein": "963-113",
      "ssn": "638-461-822",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
      "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
      },
      "role": "admin"
    }
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

class StateObject<T> {
    private data: T
    
    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T){
        this.data = value
    }
}

const store = new StateObject<string>("John")
console.log(store.state)
store.state = "Dave"
// store.state = 12

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (['Dave', 42, true])
console.log(myState.state)