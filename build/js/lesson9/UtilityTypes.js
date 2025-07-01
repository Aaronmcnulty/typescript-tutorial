"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
//Will log assign1 object with grade updated but assign1 is not mutated. 
console.log(updateAssignment(assign1, { grade: 95 }));
//Will create a new object using assign1 and then updates the 'grade' property. 
const assignGraded = updateAssignment(assign1, { grade: 100 });
console.log(assignGraded);
console.log(assign1);
//Required and Readonly
const recordsAssignment = (assign) => {
    // send to database, etc
    return assign;
};
// assignVerified.grade = 88 <-- Wont update as it was created with the 'Readonly' utility type.
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordsAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//RECORD 
//We let typescript know its a record and the key/value pair are both strings.
const hexColorMap = {
    red: "FF00000",
    green: "00FF00",
    blue: "0000FF",
};
//We can create a final grades object with the key/value pair being 'Student: LetterGrade'.
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
//Creates 'gradeData' object which expects 'Students' string as key and 'Grades' object as the value
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: "k123",
    grade: 85,
};
//Requires both of the properties that were 'NOT' omitted.
const preview = {
    studentId: "k123",
    title: "Final Project",
};
//RETURN TYPE
/*
type newAssign = {title: string, points: number } <-- usualy we create the type first
if we change the function we have to update the types.
*/
//If we might change we can put the type after which will update if we change the function
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
