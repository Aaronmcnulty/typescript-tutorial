


interface TransactionObj {
    //Index needs to be included to iterate over object properties.
   [index: string]: number
    Pizza: number, 
    Books: number, 
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10, 
    Books: -5, 
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj):
number => {
    let total = 0 
    for(const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

///////////////////////////////////////////////

interface Student {
    [key: string]: string | number | number[] | undefined
    name: string, 
    GPA: number, 
    classes?: number[]
}

const student: Student = {
    name: "Doug", 
    GPA: 3.5, 
    classes: [100, 200]
}

// console.log(student.test) <-- Its possible to reference properties that don't exist and this can cause an 'undefined' error. 

//Iterate over the student object and log each key value pair
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`)
}

//Map student and log each of its properties values. 
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

//Function to log values from the object when the key is passed in as an argument 
const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'name')


/////////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

//Works similarly to creating an index above but at the cost of not being able to be specific about what a value is if more than one value type is expected. 
type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary:500, 
    bonus: 100, 
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    //We need to reference revenue as a keyof Incomes otherwise typescript doesn't understand.
    console.log(monthlyIncomes[revenue as keyof Incomes])
}