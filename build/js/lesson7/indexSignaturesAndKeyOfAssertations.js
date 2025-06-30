"use strict";
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test) <-- Its possible to reference properties that don't exist and this can cause an 'undefined' error. 
//Iterate over the student object and log each key value pair
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//Map student and log each of its properties values. 
Object.keys(student).map(key => {
    console.log(student[key]);
});
//Function to log values from the object when the key is passed in as an argument 
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    //We need to reference revenue as a keyof Incomes otherwise typescript doesn't understand.
    console.log(monthlyIncomes[revenue]);
}
